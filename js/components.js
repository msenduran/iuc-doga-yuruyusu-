/* ================================================
   Paylaşımlı Bileşenler: Navbar + Footer
   Tek kaynak — tüm sayfalara otomatik inject edilir.
   ================================================ */

const NAVBAR_HTML = `
<!-- ====== NAVBAR ====== -->
<nav class="navbar navbar-expand-lg sticky-top" aria-label="Ana Navigasyon"
     style="background-color: var(--color-dark);">
  <div class="container">
    <a class="navbar-brand navbar-brand-custom" href="index.html">
      <i class="bi bi-tree-fill me-2"></i>İÜC <span>Doğa</span> Yürüyüşü
    </a>
    <button class="navbar-toggler border-0" type="button"
            data-bs-toggle="collapse" data-bs-target="#mainNav"
            aria-controls="mainNav" aria-expanded="false" aria-label="Menüyü aç/kapat">
      <span class="navbar-toggler-icon" style="filter:invert(1);"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="index.html">Ana Sayfa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="events.html">Etkinlikler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="gallery.html">Galeri</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="about.html">Hakkımızda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-custom" href="contact.html">İletişim</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

const FOOTER_HTML = `
<!-- ====== FOOTER ====== -->
<footer class="pt-5 pb-3">
  <div class="container">
    <div class="row g-4">

      <div class="col-12 col-md-4">
        <h6><i class="bi bi-tree-fill me-1"></i> İÜC Doğa Yürüyüşü</h6>
        <p class="small" style="color:var(--color-accent);">
          İstanbul Üniversitesi-Cerrahpaşa bünyesinde faaliyet gösteren
          doğa ve yürüyüş topluluğu.
        </p>
        <div class="d-flex gap-3 mt-2">
          <a href="#" style="color:var(--color-accent); font-size:1.2rem;" aria-label="Instagram">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" style="color:var(--color-accent); font-size:1.2rem;" aria-label="Twitter/X">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="#" style="color:var(--color-accent); font-size:1.2rem;" aria-label="E-posta">
            <i class="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>

      <div class="col-6 col-md-2">
        <h6>Sayfalar</h6>
        <ul class="footer-links-custom">
          <li><a href="index.html">Ana Sayfa</a></li>
          <li><a href="events.html">Etkinlikler</a></li>
          <li><a href="gallery.html">Galeri</a></li>
          <li><a href="about.html">Hakkımızda</a></li>
          <li><a href="contact.html">İletişim</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3">
        <h6>İletişim</h6>
        <ul class="footer-links-custom">
          <li><i class="bi bi-envelope me-1"></i> dogayuruyusu@iuc.edu.tr</li>
          <li><i class="bi bi-instagram me-1"></i> @iucdogayuruyusu</li>
          <li>
            <i class="bi bi-geo-alt me-1"></i>
            Avcılar Kampüsü, İstanbul
          </li>
          <li>
            <i class="bi bi-clock me-1"></i>
            Her Çarşamba 18:00
          </li>
        </ul>
      </div>

      <div class="col-12 col-md-3">
        <h6>Topluluğa Katıl</h6>
        <p class="small" style="color:var(--color-accent);">
          Üye olmak için başvuru formunu doldur.
        </p>
        <a href="contact.html" class="btn btn-nature btn-sm rounded-pill px-3">
          <i class="bi bi-person-plus me-1"></i>Üye Ol
        </a>
      </div>

    </div>
    <hr class="footer-divider mt-4" />
    <p class="text-center small mb-0" style="color: rgba(255,255,255,0.4);">
      © 2026 İÜC Doğa Yürüyüşü Topluluğu. Tüm hakları saklıdır.
    </p>
  </div>
</footer>
`;

/* ---------- Inject & Aktif Link ---------- */
(function () {
  // Navbar inject
  const navEl = document.getElementById('navbar-placeholder');
  if (navEl) navEl.innerHTML = NAVBAR_HTML;

  // Footer inject
  const footerEl = document.getElementById('footer-placeholder');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Aktif navbar linkini işaretle
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-custom').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
