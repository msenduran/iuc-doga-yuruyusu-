# İÜC Doğa Yürüyüşü Topluluğu — Web Sitesi

İstanbul Üniversitesi-Cerrahpaşa Doğa Yürüyüşü Topluluğu'nun tanıtım ve etkinlik web sitesi.

## Teknolojiler

- HTML5
- CSS3
- Bootstrap 5.3.3 (local)
- Bootstrap Icons 1.11.3 (local)
- Vanilla JavaScript

## Sayfalar

| Sayfa | Dosya |
|---|---|
| Ana Sayfa | `index.html` |
| Etkinlikler | `events.html` |
| Galeri | `gallery.html` |
| Hakkımızda | `about.html` |
| İletişim & Başvuru | `contact.html` |

## Klasör Yapısı

```
iuc-doga-yuruyusu/
├── index.html
├── events.html
├── gallery.html
├── about.html
├── contact.html
├── css/
│   ├── style.css
│   ├── bootstrap.min.css
│   ├── bootstrap-icons.min.css
│   └── fonts/
├── js/
│   ├── main.js
│   ├── components.js
│   └── bootstrap.bundle.min.js
├── assets/
│   └── img/
└── report/
    ├── design-report.html
    ├── screenshots/
    └── wireframes/
```

## Çalıştırma

### Python ile (önerilen)

```bash
python3 -m http.server 8080
```

Tarayıcıda `http://localhost:8080` adresini aç.

### Local ağdan erişim

Aynı Wi-Fi ağındaki cihazlardan erişmek için:

```bash
python3 -m http.server 8080
```

Ardından `http://<bilgisayarın-IP-adresi>:8080` adresini kullan.

## Özellikler

- Tam responsive tasarım (mobil & masaüstü)
- Bootstrap bileşenleri: Navbar, Card, Carousel, Modal, Alert, Accordion, Badge, Spinner
- Özel CSS sınıfları: `hero-nature`, `section-title-custom`, `trail-card`, `event-badge-custom`, `gallery-overlay-custom`, `club-stat-box`, `footer-links-custom`
- İnternet bağlantısı gerektirmez (tüm bağımlılıklar local)
