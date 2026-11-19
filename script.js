// Menu navigasi responsif
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });
}

// Pencarian dan filter katalog
const searchInput = document.querySelector('#search-menu');
const categoryFilter = document.querySelector('#filter-menu');
const productCards = document.querySelectorAll('.product-card');
const emptyState = document.querySelector('#empty-state');

function filterProducts() {
  if (!productCards.length) return;
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  let visibleCount = 0;

  productCards.forEach((card) => {
    const name = card.dataset.name.toLowerCase();
    const cardCategory = card.dataset.category;
    const matchesName = name.includes(keyword);
    const matchesCategory = category === 'semua' || category === cardCategory;
    const visible = matchesName && matchesCategory;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

if (searchInput && categoryFilter) {
  searchInput.addEventListener('input', filterProducts);
  categoryFilter.addEventListener('change', filterProducts);
}

// Form kontak: validasi HTML5 tetap dijalankan browser.
// Demo ini menampilkan konfirmasi lokal, bukan mengirim data ke server.
const contactForm = document.querySelector('#contact-form');
const formFeedback = document.querySelector('#form-feedback');

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    formFeedback.textContent = 'Terima kasih! Pesan berhasil divalidasi. Hubungkan formulir ke layanan backend untuk menerima pesan sungguhan.';
    contactForm.reset();
  });
}
