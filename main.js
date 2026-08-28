document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLL NAVIGASI
    const navLinks = document.querySelectorAll('header nav a, .btn-secondary');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 2. FORM PENCARIAN MOTOR
    const searchBtn = document.querySelector('.btn-search');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const tanggal = document.querySelector('.search-box input[type="date"]').value;
            
            if (!tanggal) {
                alert('Silakan pilih tanggal sewa terlebih dahulu!');
                return;
            }

            // Scroll otomatis ke bagian katalog motor
            const catalogSection = document.querySelector('#motor');
            if (catalogSection) {
                catalogSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 3. ORDER VIA WHATSAPP OTOMATIS
    const sewaButtons = document.querySelectorAll('.btn-card');
    const nomorWA = '628123456789'; // Ganti dengan nomor WhatsApp Anda (Gunakan format 62)

    sewaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Ambil data dari kartu motor yang diklik
            const card = button.closest('.card');
            const namaMotor = card.querySelector('h3').innerText;
            const harga = card.querySelector('.price').innerText.replace(/\n/g, ' ');

            // Buat pesan otomatis
            const pesan = `Halo MotoRent Batam, saya berminat untuk menyewa *${namaMotor}* (${harga}). Apakah unit ini tersedia?`;
            
            // Buka WhatsApp di tab baru
            const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
            window.open(urlWA, '_blank');
        });
    });

});


  
    const menuToggle = document.getElementById('menu-toggle');
    const rightNav = document.querySelector('.right-nav');

    menuToggle.addEventListener('click', () => {
        rightNav.classList.toggle('active');
    });


    const btnLihat = document.querySelector('.btn-yellow-header');
const cardGrid = document.querySelector('.card-grid');

btnLihat.addEventListener('click', function(e) {
  e.preventDefault(); // Mencegah link '#' melompat ke atas halaman
  cardGrid.classList.toggle('show-all');

  // Ganti teks tombol saat diklik (opsional)
  if (cardGrid.classList.contains('show-all')) {
    this.innerHTML = 'Sembunyikan Motor &rarr;';
  } else {
    this.innerHTML = 'Lihat Semua Motor &rarr;';
  }
});