/* ================================================
   İÜC Doğa Yürüyüşü Topluluğu - Ana JS Dosyası
   ================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- İletişim formu gönderim simülasyonu --- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const successAlert = document.getElementById('formSuccess');
      if (successAlert) {
        successAlert.classList.remove('d-none');
        contactForm.reset();
        setTimeout(() => successAlert.classList.add('d-none'), 5000);
      }
    });
  }

  /* --- Başvuru formu gönderim simülasyonu --- */
  const applyForm = document.getElementById('applyForm');
  if (applyForm) {
    applyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const successAlert = document.getElementById('applySuccess');
      if (successAlert) {
        successAlert.classList.remove('d-none');
        applyForm.reset();
        setTimeout(() => successAlert.classList.add('d-none'), 6000);
      }
    });
  }

  /* --- Spinner: sayfa yüklenince gizle --- */
  const pageSpinner = document.getElementById('pageSpinner');
  if (pageSpinner) {
    pageSpinner.classList.add('d-none');
  }

  /* --- Galeri lightbox-modal bağlantısı --- */
  document.querySelectorAll('.gallery-item[data-bs-target]').forEach(item => {
    item.addEventListener('click', function () {
      const src   = this.dataset.imgSrc;
      const title = this.dataset.imgTitle;
      const modalImg   = document.getElementById('lightboxImg');
      const modalTitle = document.getElementById('lightboxTitle');
      if (modalImg && src)   modalImg.src = src;
      if (modalTitle && title) modalTitle.textContent = title;
    });
  });

});
