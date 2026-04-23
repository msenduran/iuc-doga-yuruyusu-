# Teknik Rehber — İÜC Doğa Yürüyüşü Topluluğu Web Sitesi

> Proje türü: Üniversite ödevi · Saf Front-End · Backend yok

---

## İçindekiler

1. [Proje Genel Bakış](#1-proje-genel-bakış)
2. [Klasör ve Dosya Yapısı](#2-klasör-ve-dosya-yapısı)
3. [Kullanılan Teknolojiler](#3-kullanılan-teknolojiler)
4. [Paylaşımlı Bileşenler (components.js)](#4-paylaşımlı-bileşenler-componentsjs)
5. [CSS Mimarisi](#5-css-mimarisi)
6. [JavaScript Modülleri](#6-javascript-modülleri)
7. [Bootstrap Bileşenleri](#7-bootstrap-bileşenleri)
8. [Sayfalar ve İçerik](#8-sayfalar-ve-içerik)
9. [Görseller](#9-görseller)
10. [Projeyi Çalıştırma](#10-projeyi-çalıştırma)
11. [Ödev Uyumluluk Tablosu](#11-ödev-uyumluluk-tablosu)

---

## 1. Proje Genel Bakış

İÜC Doğa Yürüyüşü Topluluğu'nun tanıtım ve etkinlik web sitesidir.

| Özellik | Değer |
|---|---|
| Topluluk adı | İÜC Doğa Yürüyüşü Topluluğu |
| Sayfa sayısı | 5 |
| Dil | Türkçe |
| Framework | Bootstrap 5.3.3 |
| Backend | Yok (saf HTML/CSS/JS) |
| Veritabanı | Yok |

---

## 2. Klasör ve Dosya Yapısı

```
iuc-doga-yuruyusu/
│
├── index.html          → Ana Sayfa
├── events.html         → Etkinlikler
├── gallery.html        → Galeri
├── about.html          → Hakkımızda
├── contact.html        → İletişim & Başvuru
│
├── css/
│   └── style.css       → Tüm özel stiller ve CSS değişkenleri
│
├── js/
│   ├── components.js   → Navbar + footer inject (paylaşımlı bileşenler)
│   └── main.js         → Sayfa etkileşimleri (formlar, galeri, spinner)
│
└── assets/
    └── img/            → Tüm yerel görseller (12 adet .jpg)
        ├── hiking-trail.jpg
        ├── forest-trail.jpg
        ├── mountain-peak.jpg
        ├── abant-lake.jpg
        ├── abant-misty.jpg
        ├── uludag-summit.jpg
        ├── aerial-forest.jpg
        ├── sapanca-lake.jpg
        ├── karagol.jpg
        ├── sunset-nature.jpg
        ├── camp-fire.jpg
        └── mountain-flowers.jpg
```

---

## 3. Kullanılan Teknolojiler

### CDN Bağımlılıkları (internet gerekmez mi?)

Görseller yereldir, ancak aşağıdaki kütüphaneler CDN üzerinden yüklenir:

| Kütüphane | Versiyon | Kullanım |
|---|---|---|
| Bootstrap CSS | 5.3.3 | Grid, bileşenler, yardımcı sınıflar |
| Bootstrap JS Bundle | 5.3.3 | Modal, collapse, carousel, alert |
| Bootstrap Icons | 1.11.3 | İkon seti (`bi-*`) |

> **Not:** Proje internet bağlantısı olmadan açılırsa Bootstrap CDN'i yüklenmez.
> Tamamen çevrimdışı çalışması gerekiyorsa Bootstrap dosyaları `css/` ve `js/` altına indirilmelidir.

### Standart Web Teknolojileri

- **HTML5** — Semantic etiketler (`<nav>`, `<section>`, `<footer>`, `<main>`)
- **CSS3** — Custom properties (değişkenler), flexbox, grid, transitions
- **Vanilla JavaScript (ES6+)** — Template literals, IIFE, arrow functions, `const/let`

---

## 4. Paylaşımlı Bileşenler (components.js)

### Problem

5 HTML sayfasında navbar ve footer'ı tekrar tekrar yazmak, bakımı zorlaştırır.
Örneğin navbara yeni bir link eklemek 5 dosyanın düzenlenmesini gerektirir.

### Çözüm

`js/components.js` tek bir kaynak dosyasında hem navbar hem footer HTML'ini
şablon literal olarak tanımlar ve sayfa yüklendiğinde DOM'a inject eder.

### Nasıl Çalışır?

**Her HTML sayfasında iki placeholder div vardır:**

```html
<body>
  <!-- Navbar buraya inject edilir -->
  <div id="navbar-placeholder"></div>

  <!-- ... sayfa içeriği ... -->

  <!-- Footer buraya inject edilir -->
  <div id="footer-placeholder"></div>

  <script src="js/components.js"></script>
  <script src="...bootstrap.bundle.min.js"></script>
  <script src="js/main.js"></script>
</body>
```

**`components.js` çalışma akışı:**

```
1. NAVBAR_HTML şablon literali tanımlanır
2. FOOTER_HTML şablon literali tanımlanır
3. IIFE çalışır:
   a. #navbar-placeholder.innerHTML = NAVBAR_HTML
   b. #footer-placeholder.innerHTML = FOOTER_HTML
   c. window.location.pathname → mevcut sayfa dosya adı alınır
   d. Eşleşen .nav-link-custom öğesine 'active' + aria-current eklenir
```

**Script yükleme sırası (önemli):**

```
components.js   →  navbar/footer DOM'a eklenir
bootstrap.js    →  data-bs-toggle event delegation başlatılır
main.js         →  form ve galeri etkileşimleri kurulur
```

### Değişiklik Yapmak

Navbara yeni sayfa eklemek için **sadece `components.js`** düzenlenir:

```javascript
// NAVBAR_HTML içindeki ul'ye ekle:
<li class="nav-item">
  <a class="nav-link nav-link-custom" href="yeni-sayfa.html">Yeni Sayfa</a>
</li>
```

---

## 5. CSS Mimarisi

### CSS Değişkenleri (`:root`)

Tüm renkler merkezi olarak `css/style.css` başında tanımlanmıştır:

```css
:root {
  --color-primary:   #2d6a4f;   /* Ana yeşil */
  --color-secondary: #52b788;   /* Açık yeşil */
  --color-accent:    #95d5b2;   /* Vurgu yeşili */
  --color-earth:     #774936;   /* Toprak tonu */
  --color-light-bg:  #f0f7f4;   /* Açık arka plan */
  --color-dark:      #1b4332;   /* Koyu yeşil (navbar) */
  --color-text:      #2d3a2e;   /* Ana metin rengi */
}
```

Renk değiştirmek için sadece bu değişkenler güncellenir; tüm site otomatik değişir.

### Ödev Kapsamındaki 7 Özel CSS Sınıfı

| Sınıf | Nerede | Ne İşe Yarar |
|---|---|---|
| `hero-nature` | index.html | Tam ekran doğa hero bölümü, gradient + overlay |
| `section-title-custom` | Tüm sayfalar | Yeşil alt çizgili başlık stili |
| `trail-card` | index, events | Hover'da yükselen, gölgeli kart bileşeni |
| `event-badge-custom` | events, index | Zorluk seviyesi etiketi (kolay/orta/zor) |
| `gallery-overlay-custom` | gallery | Hover'da beliren karanlık metin overlay |
| `club-stat-box` | index, about | İstatistik kutusu, sol kenarlı stil |
| `footer-links-custom` | Tüm sayfalar | Footer linkleri, hover'da sola kayan efekt |

### Responsive Davranış

```css
@media (max-width: 768px) {
  .hero-nature     { min-height: 70vh; }   /* Hero küçülür */
  .section-padding { padding: 50px 0; }    /* Dikey boşluk azalır */
  .gallery-item img{ height: 160px; }      /* Galeri görselleri küçülür */
}
```

Bootstrap grid (`col-md-*`, `col-lg-*`) ile ek responsive davranış sağlanır.

---

## 6. JavaScript Modülleri

### `js/components.js`

| Görev | Açıklama |
|---|---|
| Navbar inject | `#navbar-placeholder` div'ine navbar HTML yazar |
| Footer inject | `#footer-placeholder` div'ine footer HTML yazar |
| Aktif link | URL'den sayfa adını okur, eşleşen linke `active` ekler |

### `js/main.js`

| Görev | Tetikleyici | İlgili Sayfa |
|---|---|---|
| İletişim formu | `submit` olayı | contact.html |
| Başvuru formu | `submit` olayı | contact.html |
| Galeri lightbox | `click` olayı | gallery.html |
| Yükleme spinner | `DOMContentLoaded` | index.html |

Tüm kod `DOMContentLoaded` içinde çalışır — sayfa tamamen yüklenmeden önce DOM erişimi yapılmaz.

---

## 7. Bootstrap Bileşenleri

Ödev gereksinimi: en az 6 farklı Bootstrap bileşeni.

| # | Bileşen | Sayfa | Kullanım |
|---|---|---|---|
| 1 | **Navbar** | Tüm sayfalar | Responsive navigasyon, collapse |
| 2 | **Card** | index, events, about | Etkinlik ve ekip kartları |
| 3 | **Carousel** | index | Galeri slayt gösterisi |
| 4 | **Modal** | events, gallery | Etkinlik detay + lightbox |
| 5 | **Alert** | index, contact | Duyuru ve form başarı mesajı |
| 6 | **Accordion** | about | SSS / değerler bölümü |
| 7 | **Badge** | events, index | Etkinlik durumu etiketi |
| 8 | **Spinner** | index | Sayfa yükleme göstergesi |

---

## 8. Sayfalar ve İçerik

### `index.html` — Ana Sayfa

- Hero bölümü (`hero-nature`)
- Duyuru alert'i (kapatılabilir)
- 4 istatistik kutusu (`club-stat-box`)
- 3 etkinlik kartı (`trail-card`)
- Carousel (3 slayt)

### `events.html` — Etkinlikler

- Filtre formu (select, checkbox)
- 6 etkinlik kartı (3 açık kayıt, 3 yakında)
- 3 adet Modal (detay + hızlı başvuru formu)
- Her modal'da: radio, checkbox, text input

### `gallery.html` — Galeri

- Kategori filtre butonları
- 12 görsel ızgara (`gallery-overlay-custom`)
- Lightbox Modal (tıklanan görseli büyütür)

### `about.html` — Hakkımızda

- Misyon ve istatistik bölümü
- Accordion (5 madde: değerler + SSS)
- 4 ekip üyesi kartı

### `contact.html` — İletişim & Başvuru

- Üyelik başvuru formu (text, email, tel, select×2, radio×3, checkbox×5)
- İletişim bilgileri kutusu
- Hızlı mesaj formu

---

## 9. Görseller

Tüm görseller `assets/img/` klasöründe yerel olarak depolanır.
Unsplash'ten indirilmiş, açık lisanslıdır (Unsplash License).

| Dosya | Boyut | Kullanıldığı Yer |
|---|---|---|
| hiking-trail.jpg | ~294 KB | Uludağ etkinliği |
| forest-trail.jpg | ~298 KB | Belgrad Ormanı |
| mountain-peak.jpg | ~237 KB | Kaçkar / zirve |
| abant-lake.jpg | ~94 KB | Abant Gölü etkinliği |
| abant-misty.jpg | ~130 KB | Carousel / galeri |
| uludag-summit.jpg | ~125 KB | Carousel / galeri |
| aerial-forest.jpg | ~209 KB | About sayfası / galeri |
| sapanca-lake.jpg | ~200 KB | Sapanca etkinliği |
| karagol.jpg | ~46 KB | Karagöl etkinliği |
| sunset-nature.jpg | ~116 KB | Hero arka plan |
| camp-fire.jpg | ~259 KB | Kamp gecesi galerisi |
| mountain-flowers.jpg | ~346 KB | Dağ çiçekleri galerisi |

---

## 10. Projeyi Çalıştırma

### Yöntem 1 — Doğrudan Tarayıcı (en basit)

```bash
# index.html dosyasını çift tıkla veya:
xdg-open index.html          # Linux
open index.html              # macOS
start index.html             # Windows
```

> ⚠️ `file://` protokolü ile açıldığında Bootstrap CDN'den yüklenir.
> İnternet bağlantısı yoksa Bootstrap çalışmaz.

### Yöntem 2 — Yerel HTTP Sunucusu (önerilen)

```bash
# Python 3 ile:
cd iuc-doga-yuruyusu
python3 -m http.server 8080
# Tarayıcıda: http://localhost:8080

# Node.js ile (npx):
npx serve .
```

---

## 11. Ödev Uyumluluk Tablosu

| Gereksinim | Hedef | Durum |
|---|---|---|
| Sayfa sayısı | En az 5 | ✅ 5 sayfa |
| Teknoloji | HTML + CSS + Bootstrap 5 | ✅ |
| Backend | Yok | ✅ |
| Dil | Türkçe | ✅ |
| Responsive | Masaüstü + mobil | ✅ |
| Bootstrap bileşenleri | En az 6 | ✅ 8 bileşen |
| Özel CSS sınıfı | En az 5 | ✅ 7 sınıf |
| `button` elementi | Var | ✅ |
| `checkbox` elementi | Var | ✅ |
| `select` / dropdown | Var | ✅ |
| `radio` elementi | Var | ✅ |
| Navbar | Tüm sayfalarda ortak | ✅ |
| Footer | Tüm sayfalarda ortak | ✅ |
| Büyük bölüm yorumları | Var | ✅ |

---

*Son güncelleme: Nisan 2026*
