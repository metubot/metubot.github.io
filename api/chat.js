const { retrieve } = require('./knowledge');

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

const SYSTEM_PROMPT = `Sen ODTÜ (Orta Doğu Teknik Üniversitesi) öğrencilerine yardım eden "METUbot" adlı resmi AI asistanısın.
Uzmanlık alanların: kampüs yaşamı, idari işler, öğrenci yönetmelikleri, ders kaydı, not sistemi, yurt, burs, çift anadal, kayıt dondurma, mezuniyet ve akademik prosedürler.

Sana her mesajda [ODTÜ BİLGİ TABANI] başlığı altında ilgili belgeler verilecek. Bu belgelerdeki bilgileri öncelikli kaynak olarak kullan.

Kuralların:
- Kullanıcının dilinde yanıt ver (Türkçe veya İngilizce)
- Bilgi tabanındaki adımları net ve sıralı şekilde açıkla
- Mümkünse ilgili yönetmelik madde numarasını veya birimi belirt
- Bilgi tabanında olmayan konularda odtu.edu.tr veya oidb.metu.edu.tr adresine yönlendir
- Samimi ama profesyonel bir ton kullan`;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GROQ_API_KEY ortam değişkeni eksik' });

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages dizisi gerekli' });
  }

  // Extract last user message for retrieval
  const lastUserMsg = [...messages].reverse().find(m => m.role === 'user');
  const userQuery = lastUserMsg ? lastUserMsg.content : '';

  // RAG: retrieve relevant chunks
  const chunks = retrieve(userQuery, 3);
  const ragContext = chunks.length > 0
    ? `\n\n[ODTÜ BİLGİ TABANI]\n${chunks.join('\n\n---\n\n')}`
    : '';

  // Inject context into last user message
  const enrichedMessages = messages.map((m, i) => {
    const isLast = i === messages.length - 1 && m.role === 'user';
    return isLast
      ? { role: 'user', content: m.content + ragContext }
      : m;
  });

  try {
    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...enrichedMessages
        ],
        max_tokens: 1200,
        temperature: 0.5
      })
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(response.status).json({ error: err.error?.message || 'Groq API hatası' });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Bir hata oluştu.';
    return res.status(200).json({ reply });

  } catch (err) {
    return res.status(500).json({ error: 'Sunucu hatası', detail: err.message });
  }
};
