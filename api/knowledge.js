// ODTÜ Knowledge Base - RAG chunks
const KB = [
  // ====== DERS KAYDI ======
  {
    id: "dk1",
    tags: ["ders kaydı", "kayıt", "add drop", "ders ekleme", "ders bırakma", "kredi", "course registration", "register", "enroll", "enrollment", "drop course", "add course", "credits"],
    content: `Ders Kaydı (Add/Drop) Süreci:
- Ders kaydı her dönem başında belirli tarihlerde OIS (Online Information System) üzerinden yapılır.
- Add/Drop süresi genellikle ilk iki hafta içindedir.
- Öğrenciler danışman onayı alarak ders ekleyebilir/bırakabilir.
- Azami ders yükü: lisans öğrencileri için 9 kredi saati + normal dönem kredisi (genellikle 21-24 AKTS).
- Ön koşulsuz dersler OIS'ten doğrudan eklenebilir.
- Ön koşullu dersler danışman onayı gerektirir.
- İlgili yönetmelik: ODTÜ Lisans Eğitim-Öğretim Yönetmeliği Madde 14-17.`
  },
  {
    id: "dk2",
    tags: ["ois", "online kayıt", "sistem", "student.metu.edu.tr", "online system", "student portal", "login", "password", "mobile app"],
    content: `OIS (Online Information System):
- Adres: student.metu.edu.tr
- Ders kaydı, not görüntüleme, transkript alma, dilekçe gönderme işlemleri yapılır.
- Kullanıcı adı: ODTÜ öğrenci numarası
- Şifre sorunları için: BBS (Bilgi İşlem Daire Başkanlığı) - bbs.metu.edu.tr
- Mobil uygulama: METU Mobile (iOS/Android)`
  },

  // ====== NOT SİSTEMİ ======
  {
    id: "ns1",
    tags: ["not", "harf notu", "gpa", "genel not ortalaması", "transkript", "FF", "FD", "DD", "DC", "CC", "CB", "BB", "BA", "AA", "grade", "grades", "letter grade", "transcript", "cgpa", "cumulative", "grading system", "pass", "fail"],
    content: `ODTÜ Harf Notu ve GPA Sistemi:
Harf notu → 4'lük sistem:
AA = 4.00, BA = 3.50, BB = 3.00, CB = 2.50, CC = 2.00, DC = 1.50, DD = 1.00, FD = 0.50, FF = 0.00
- W (Withdraw): Dersten çekilme, GPA'ye dahil değil
- I (Incomplete): Eksik not, bir sonraki dönem tamamlanması gerekir
- S/U: Satisfactory/Unsatisfactory (bazı dersler için)
- Genel Not Ortalaması (GNO/CGPA): Tüm dönem notlarının ağırlıklı ortalaması
- Dönem Not Ortalaması (DNO/GPA): Tek dönem ortalaması
- Mezuniyet için minimum GNO: 2.00/4.00
- İlgili yönetmelik: ODTÜ Lisans Yönetmeliği Madde 25-30`
  },
  {
    id: "ns2",
    tags: ["sınav", "bütünleme", "final", "vizeler", "mazeret sınavı", "exam", "exams", "midterm", "final exam", "make-up exam", "makeup", "resit", "retake"],
    content: `ODTÜ Sınav Sistemi:
- Vizeler: Dönem ortasında, tarihler ders programında belirtilir
- Finaller: Dönem sonunda, akademik takvime göre
- Bütünleme hakkı: Sınavda FF veya FD alan ya da devamsızlık dışındaki nedenlerle başarısız olan öğrencilere bütünleme sınav hakkı verilir
- Mazeret sınavı: Belgelenmiş sağlık/acil durum için dilekçeyle başvurulur
- Sınav sonuçlarına itiraz: Sınav sonrası 5 iş günü içinde OIS üzerinden yapılır`
  },

  // ====== DEVAMSIZLIK ======
  {
    id: "dev1",
    tags: ["devamsızlık", "yoklama", "devam zorunluluğu", "W", "devam şartı", "attendance", "absence", "attendance requirement", "withdraw", "missing class"],
    content: `Devam Zorunluluğu:
- ODTÜ'de dersler için minimum %70 devam zorunludur.
- Devamsızlık sınırını aşan öğrenciler o dersin final sınavına giremez ve dersten W notu alır.
- W notu GPA hesabına dahil edilmez ancak transkripte işlenir.
- Hastalık belgesi veya resmi mazeret, devamsızlık hesabını doğrudan değiştirmez (bölüme bağlıdır).
- Devam durumu OIS üzerinden takip edilebilir.
- İlgili yönetmelik: ODTÜ Lisans Yönetmeliği Madde 18`
  },

  // ====== ÇİFT ANADAL / YANDAL ======
  {
    id: "ca1",
    tags: ["çift anadal", "double major", "DAP", "ek program", "ikinci bölüm", "second major", "dual degree", "double degree", "apply double major"],
    content: `Çift Anadal Programı (DAP):
- Başvuru koşulları: İlk iki dönem tamamlanmış olmalı, GNO ≥ 3.00/4.00 (bölüme göre değişebilir)
- Başvuru zamanı: 2. veya 3. yarıyıl sonu (bölüm ilanlarını takip edin)
- Kontenjanlar sınırlıdır, GNO sıralamasına göre kabul yapılır
- Çift anadal öğrencileri iki diploma alır
- Maksimum eğitim süresi uzayabilir (asıl programın 1.5 katı)
- Başvuru: OIS → Başvurular → Çift Anadal
- Bilgi için: oidb.metu.edu.tr`
  },
  {
    id: "ya1",
    tags: ["yandal", "minor", "YAP", "sertifika programı", "minor program", "secondary program", "certificate"],
    content: `Yandal Programı (YAP / Minor):
- Başvuru koşulları: GNO ≥ 2.50/4.00, 3. veya 4. yarıyıl öğrencisi olmak
- Yandal en az 18 kredilik ek ders gerektirir
- Diploma üzerine işlenir (ayrı diploma verilmez), ancak transkripte yansır
- Başvuru: OIS → Başvurular → Yandal
- Her bölümün yandal programı ve kontenjanı farklıdır`
  },

  // ====== KAYIT DONDURMA ======
  {
    id: "kd1",
    tags: ["kayıt dondurma", "izinli sayılma", "dönem erteleme", "askerlik", "hastalık izni", "freeze enrollment", "leave of absence", "suspend studies", "defer semester", "military service", "medical leave"],
    content: `Kayıt Dondurma (İzinli Sayılma):
- Bir dönem veya bir yıl süreyle kayıt dondurulabilir
- Nedenler: Sağlık, maddi imkânsızlık, askerlik, yurt dışı eğitim, aile durumu
- Başvuru: İlgili döneme kayıt yaptırmadan önce veya dönem başında yapılmalıdır
- Sağlık nedeniyle: Sağlık Raporu (hastane) + dilekçe
- Diğer nedenler: Belge + dilekçe → Öğrenci İşleri Daire Başkanlığı
- Azami dondurma süresi: Lisansta 4 yarıyıl (2 yıl)
- İlgili birim: oidb.metu.edu.tr → Dilekçe/Formlar
- İlgili yönetmelik: ODTÜ Lisans Yönetmeliği Madde 9`
  },

  // ====== BURS ======
  {
    id: "burs1",
    tags: ["burs", "burs başvurusu", "KYK", "devlet bursu", "vakıf bursu", "yüksek onur", "onur", "scholarship", "financial aid", "grant", "honor roll", "dean's list", "stipend"],
    content: `Burs Seçenekleri:
1. Devlet Bursu (KYK): burs.gov.tr üzerinden başvuru, her yıl yenilenir
2. ODTÜ Burs İmkânları: odtu.edu.tr/bursvebagis
3. Yüksek Onur / Onur Belgesi (dolaylı avantaj):
   - Onur Listesi: DNO ≥ 3.00, en az 15 kredi alınmış
   - Yüksek Onur: DNO ≥ 3.50
4. Vakıf Bursları: ODTÜ Vakfı (mv.metu.edu.tr), çeşitli sektörel burslar
5. Araştırma Bursları: Bölüm hocaları aracılığıyla, proje bazlı (lisans araştırma programı)
- Burs danışmanlık birimi: Öğrenci İşleri → Burs Birimi`
  },

  // ====== YURT ======
  {
    id: "yurt1",
    tags: ["yurt", "yurt başvurusu", "KYK yurt", "kampüs yurdu", "konaklama", "dormitory", "dorm", "housing", "accommodation", "student housing", "residence"],
    content: `Yurt İmkânları:
1. KYK Yurtları: yurtkur.gov.tr üzerinden başvuru (her yıl temmuz-ağustos)
2. ODTÜ Kampüs Yurtları: Kampüs içinde yurtlar mevcut
   - Başvuru: student.metu.edu.tr → Yurt Başvurusu
   - Öncelik: GNO, gelir durumu, uzak il
3. Özel Yurtlar: Kampüs çevresinde çok sayıda özel yurt
- Yurt kontenjanları sınırlı, erken başvuru önerilir
- İlgili birim: Sağlık Kültür ve Spor Daire Başkanlığı (sks.metu.edu.tr)`
  },

  // ====== MEZUNİYET ======
  {
    id: "mez1",
    tags: ["mezuniyet", "mezun olmak", "diploma", "graduation", "bitirme projesi", "graduate", "graduating", "graduation requirements", "thesis", "capstone", "degree requirements"],
    content: `Mezuniyet Koşulları:
- GNO ≥ 2.00/4.00 olmalı
- Müfredattaki tüm zorunlu dersler tamamlanmalı
- Staj gereklilikleri (bölüme göre değişir) karşılanmalı
- Toplam kredi yükü tamamlanmalı
- Bitirme ödevi/projesi olan bölümlerde başarıyla tamamlanmalı
Mezuniyet Başvurusu:
- OIS → Mezuniyet Başvurusu → Online form doldurulur
- Diploma töreni genellikle Haziran ayında yapılır
- Geçici mezuniyet belgesi iş başvurularında kullanılabilir
- İlgili birim: Öğrenci İşleri Daire Başkanlığı (oidb.metu.edu.tr)`
  },

  // ====== STAJ ======
  {
    id: "staj1",
    tags: ["staj", "internship", "zorunlu staj", "staj belgesi", "staj raporu", "mandatory internship", "summer internship", "internship report", "work experience", "practical training"],
    content: `Staj Prosedürü:
- Staj zorunluluğu bölüme göre değişir (Mühendislik: genellikle 2 staj zorunlu)
- Staj öncesi: OIS'ten staj başvurusu, bölüm onayı alınır
- SGK bildirimi: Staj sırasında öğrenci SGK kapsamındadır
- Staj süresi: Bölüme göre 20-60 iş günü
- Staj sonrası: Staj raporu hazırlanır, komisyona teslim edilir
- Yaz stajları en yaygın dönemdir
- Staj şirketi öğrenci tarafından bulunur (bazı bölümlerde bölüm yardımcı olur)
- Staj defteri ve belgeler için bölüm sekreterliğine danışın`
  },

  // ====== AKADEMİK TAKVİM ======
  {
    id: "at1",
    tags: ["akademik takvim", "tatil", "yarıyıl", "dönem", "yaz okulu", "kayıt tarihleri", "academic calendar", "semester dates", "summer school", "holidays", "schedule", "term dates"],
    content: `Akademik Takvim:
- Güz Yarıyılı: Eylül-Ocak
- Bahar Yarıyılı: Şubat-Haziran
- Yaz Okulu: Temmuz-Ağustos (isteğe bağlı, ücretli)
- Güncel tarihler için: akademiktakvim.metu.edu.tr
- Resmi tatiller akademik takvimde belirtilir
- Yaz okulu için ayrıca başvuru yapılır: maksimum 2 ders / dönem`
  },

  // ====== İLETİŞİM / BİRİMLER ======
  {
    id: "ilet1",
    tags: ["iletişim", "birim", "öğrenci işleri", "danışman", "dekanlık", "sekretarya", "contact", "office", "student affairs", "advisor", "department", "faculty", "registrar"],
    content: `Önemli ODTÜ Birimleri ve İletişim:
- Öğrenci İşleri Daire Başkanlığı: oidb.metu.edu.tr
- Sağlık Kültür ve Spor Dairesi: sks.metu.edu.tr
- BBS (Bilgi İşlem): bbs.metu.edu.tr
- Kütüphane: lib.metu.edu.tr
- Kariyer Merkezi: career.metu.edu.tr
- Uluslararası İlişkiler (Erasmus vb.): iro.metu.edu.tr
- Genel ODTÜ: odtu.edu.tr
- Dilekçe ve formlar için: oidb.metu.edu.tr/tr/formlar`
  },

  // ====== ERASMUS / ULUSLARARASI ======
  {
    id: "er1",
    tags: ["erasmus", "exchange", "yurt dışı", "değişim programı", "uluslararası", "IRO", "exchange program", "study abroad", "international", "mobility", "erasmus application", "learning agreement"],
    content: `Erasmus+ ve Değişim Programları:
- Erasmus+: Avrupa üniversitelerine 1-2 dönem değişim imkânı
- Başvuru dönemi: Genellikle Kasım-Ocak (bir sonraki akademik yıl için)
- Koşullar: En az 2. sınıf öğrencisi, GNO ≥ 2.20-3.00 (bölüme göre), dil yeterlilik belgesi
- Dil sınavı: ODTÜ bünyesindeki TÖMER'de veya YDS/YÖKDİL belgesiyle
- Burs: Gidilen ülkeye göre aylık Erasmus hibesi
- Başvuru: iro.metu.edu.tr
- Öğrenim anlaşması (Learning Agreement) danışman onaylı hazırlanır
- Gidilen üniversitedeki dersler transkripte aktarılır`
  },

  // ====== SAĞLIK ======
  {
    id: "sag1",
    tags: ["sağlık merkezi", "hastaane", "sağlık", "doktor", "reçete", "ilaç", "health center", "health", "doctor", "medical", "prescription", "sick", "hospital", "counseling", "psychological support"],
    content: `ODTÜ Sağlık Hizmetleri:
- ODTÜ Sağlık Merkezi: Kampüs içinde, ücretsiz muayene
- Çalışma saatleri: Hafta içi 08:00-17:00
- Acil durumlar: Nöbetçi sağlık personeli mevcuttur
- SGK kapsamında ilaç için reçete alınabilir
- Psikiyatri/psikoloji desteği: Psikolojik Danışmanlık Merkezi (PDM) - psikolojik.metu.edu.tr
- Sevk işlemleri burada yapılır (Hacettepe, Ankara gibi hastanelere)
- İletişim: sks.metu.edu.tr → Sağlık Birimi`
  },

  // ====== ULAŞIM ======
  {
    id: "ulas1",
    tags: ["ulaşım", "servis", "otobüs", "metro", "kampüs içi ulaşım", "araç", "bisiklet", "transportation", "bus", "shuttle", "metro", "getting to campus", "bicycle", "parking"],
    content: `ODTÜ Ulaşım:
- Ankara metrosu: M1 hattı ODTÜ durağı kampüse erişim sağlar
- Öğrenci servisleri: Kampüs dışından düzenli servisler (sks.metu.edu.tr)
- Kampüs içi: Ücretsiz kampüs otobüsleri (ring servisi) düzenli çalışır
- Bisiklet: Kampüs bisiklet dostu, kiralanabilir bisikletler mevcut
- ODTÜ araç kapıdan geçiş: Öğrenci kimliği veya kayıtlı araç gereklidir`
  },

  // ====== YEMEKHANE / KAFETERYA ======
  {
    id: "ym1",
    tags: ["yemekhane", "cafeteria", "yemek", "kafeterya", "yemek kartı", "food", "dining", "meal card", "canteen", "lunch", "eat"],
    content: `Yemekhane ve Yemek İmkânları:
- ODTÜ Yemekhaneleri: Kampüste birden fazla yemekhane var (Merkez, Mühendislik, vb.)
- Yemek kartı: OIS üzerinden veya kasiyer noktalarından yüklenebilir
- Ücret: Öğrenci fiyatı güncel tarifeye göre belirlenir (uygun fiyatlı)
- Kafeteryalar ve kantinler de kampüste mevcuttur
- Vejetaryen seçenekler genellikle sunulur`
  },

  // ====== KÜTÜPHANE ======
  {
    id: "kut1",
    tags: ["kütüphane", "kitap", "veritabanı", "makale", "araştırma", "IEEE", "JSTOR", "library", "book", "database", "article", "research", "borrow", "vpn", "journal", "paper"],
    content: `ODTÜ Kütüphanesi:
- Web: lib.metu.edu.tr
- Kampüs içinde ana kütüphane + şube kütüphaneler
- Çalışma saatleri: Hafta içi 08:00-22:00, hafta sonu değişkendir
- Online veritabanları: IEEE Xplore, ScienceDirect, JSTOR, Springer ve daha fazlası
- Erişim: Kampüs dışından VPN ile erişilebilir (vpn.metu.edu.tr)
- Kitap ödünç alma: Öğrenci kimliğiyle, maksimum 4 hafta
- Makale talebi (ILL): lib.metu.edu.tr üzerinden talep edilebilir`
  },

  // ====== DİLEKÇE / PROSEDÜR ======
  {
    id: "dil1",
    tags: ["dilekçe", "form", "başvuru", "prosedür", "nasıl yapılır", "petition", "application form", "how to apply", "procedure", "official request", "submit"],
    content: `Dilekçe ve Başvuru Prosedürleri:
- Tüm resmi dilekçeler OIS üzerinden online gönderilebilir
- Ayrıca fiziksel dilekçe: Öğrenci İşleri Daire Başkanlığı'na teslim edilir
- Formlar: oidb.metu.edu.tr/tr/formlar adresinden indirilir
- Yanıt süresi: Genellikle 5-10 iş günü
- Dilekçenizin durumunu OIS üzerinden takip edebilirsiniz
- Bölüm bazlı konular için önce bölüm sekreterliğine danışın`
  },

  // ====== KARİYER ======
  {
    id: "kar1",
    tags: ["kariyer", "iş ilanı", "staj ilanı", "CV", "mülakat", "linkedin", "kariyer günleri", "career", "job", "job fair", "resume", "interview", "career center", "recruitment"],
    content: `Kariyer Hizmetleri:
- ODTÜ Kariyer Merkezi: career.metu.edu.tr
- İş ve staj ilanları, kariyer fuarı bilgileri
- CV ve mülakat hazırlık workshop'ları düzenlenir
- Kariyer Günleri: Her yıl güz döneminde, 100+ şirket katılır
- LinkedIn ODTÜ mezun ağı çok güçlü, mezunlarla bağlantı kurabilirsiniz
- CV hazırlama desteği için kariyer merkezi randevu veriyor`
  },

  // ====== GENEL KAMPÜS ======
  {
    id: "kamp1",
    tags: ["kampüs", "spor", "kulüp", "sosyal", "etkinlik", "tesis", "havuz", "spor salonu", "campus", "sports", "club", "facilities", "pool", "gym", "activities", "student club", "events", "forest"],
    content: `Kampüs Olanakları:
- Spor Tesisleri: Olimpik yüzme havuzu, spor salonu, tenis kortları, futbol sahası
- Kulüpler: 100+ öğrenci kulübü (müzik, spor, teknik, sosyal)
- Kültür Merkezi: Tiyatro, sinema, konserler
- Teknoloji Transfer Ofisi (TTO): Girişimcilik için destek
- Yerleşke çok geniş, kampüs içi ulaşım için ring servisi kullanın
- Orman alanı ve göl: Kampüs içinde yürüyüş parkurları mevcut`
  }
];

/**
 * Keyword-based retrieval: finds most relevant KB chunks for a query
 */
function retrieve(query, topK = 3) {
  const q = query.toLowerCase();
  const tokens = q.split(/\s+/);

  const scored = KB.map(chunk => {
    let score = 0;

    // Tag matching (weighted higher)
    for (const tag of chunk.tags) {
      if (q.includes(tag)) score += 3;
      else if (tokens.some(t => tag.includes(t) || t.includes(tag))) score += 1;
    }

    // Content keyword matching
    const contentLower = chunk.content.toLowerCase();
    for (const token of tokens) {
      if (token.length > 3 && contentLower.includes(token)) score += 0.5;
    }

    return { chunk, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(s => s.chunk.content);
}

module.exports = { retrieve };
