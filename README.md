# İÜC Doğa Yürüyüşü Topluluğu — Web Sitesi

İstanbul Üniversitesi-Cerrahpaşa Doğa Yürüyüşü Topluluğu'nun tanıtım ve etkinlik web sitesi.

## Prerequisites

Projeyi çalıştırmak için aşağıdakilerden birini kur:

### Python 3 (önerilen)

**macOS / Linux:**
```bash
# Kontrol et (genellikle yüklü gelir)
python3 --version

# Yüklü değilse — Ubuntu/Debian
sudo apt install python3

# macOS (Homebrew ile)
brew install python3
```

**Windows:**
- [python.org](https://www.python.org/downloads/) adresinden indir ve kur
- Kurulum sırasında **"Add Python to PATH"** kutusunu işaretle

---

### Node.js (alternatif)

**macOS / Linux:**
```bash
# Ubuntu/Debian
sudo apt install nodejs npm

# macOS (Homebrew)
brew install node
```

**Windows:**
- [nodejs.org](https://nodejs.org/) adresinden LTS sürümünü indir ve kur

`http-server` paketini global yükle:
```bash
npm install -g http-server
```

---

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
└── assets/
    └── img/
```

## Çalıştırma

Repoyu klonla:
```bash
git clone https://github.com/msenduran/iuc-doga-yuruyusu-.git
cd iuc-doga-yuruyusu-
```

### Python ile (önerilen)

```bash
python3 -m http.server 8080
```

Tarayıcıda `http://localhost:8080` adresini aç.

### Node.js ile

```bash
http-server -p 8080
```

Tarayıcıda `http://localhost:8080` adresini aç.

### Local ağdan erişim (mobil / diğer cihazlar)

Aynı Wi-Fi ağındaki cihazlardan erişmek için önce IP adresini öğren:

```bash
# Linux / macOS
hostname -I

# Windows
ipconfig
```

Ardından sunucuyu başlat ve mobil cihazdan `http://<IP-adresi>:8080` adresini aç.

## Özellikler

- Tam responsive tasarım (mobil & masaüstü)
- Bootstrap bileşenleri: Navbar, Card, Carousel, Modal, Alert, Accordion, Badge, Spinner
- Özel CSS sınıfları: `hero-nature`, `section-title-custom`, `trail-card`, `event-badge-custom`, `gallery-overlay-custom`, `club-stat-box`, `footer-links-custom`
- İnternet bağlantısı gerektirmez (tüm bağımlılıklar local)
