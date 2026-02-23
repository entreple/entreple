// Modal Elementleri
const modal = document.getElementById("previewModal");
const iframe = document.getElementById("projectIframe");
const btnDesktop = document.getElementById("btn-desktop");
const btnMobile = document.getElementById("btn-mobile");

// Önizlemeyi Aç
function openModal(url) {
  if(!modal) return; // Eğer o sayfada modal yoksa hata vermesin
  iframe.src = url; 
  modal.style.display = "flex";
  setTimeout(() => modal.classList.add("show"), 10);
  setDevice('desktop'); 
  document.body.style.overflow = "hidden"; 
}

// Önizlemeyi Kapat
function closeModal() {
  if(!modal) return;
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
    iframe.src = ""; 
    document.body.style.overflow = "auto"; 
  }, 300); 
}

// Cihaz Görünümünü Değiştir
function setDevice(device) {
  if (device === 'mobile') {
    iframe.style.width = "375px"; 
    btnMobile.classList.add("active");
    btnDesktop.classList.remove("active");
  } else {
    iframe.style.width = "100%"; 
    btnDesktop.classList.add("active");
    btnMobile.classList.remove("active");
  }
}

// Modal dışına tıklayınca kapatma
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}