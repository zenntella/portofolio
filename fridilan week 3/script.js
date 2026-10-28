document.addEventListener('DOMContentLoaded', function() {
  
  // 1. Logika Mode Gelap / Terang
  const btnTema = document.querySelector('#btnToggleTema');
  const bodyHalaman = document.querySelector('body');

  if (btnTema) {
    btnTema.addEventListener('click', function() {
      bodyHalaman.classList.toggle('light-mode');
      
      if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
      } else {
        btnTema.textContent = '☀️ Mode Terang';
      }
    });
  }

  // 2. Logika Modal Popup
  const btnBukaModal = document.querySelector('#btnKontak');
  const elemenModal = document.querySelector('#modalKontak');
  const btnTutupModal = document.querySelector('#btnTutupModal');

  if (btnBukaModal && elemenModal && btnTutupModal) {
    btnBukaModal.addEventListener('click', function(event) {
      event.preventDefault();
      elemenModal.classList.add('show');
    });

    btnTutupModal.addEventListener('click', function() {
      elemenModal.classList.remove('show');
    });
  }
});