// Menunggu sehingga DOM selesai dimuatkan
document.addEventListener('DOMContentLoaded', () => {

    // 1. EFEK NAVBAR - Berubah warna semasa skrol
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '15px 6%';
            navbar.style.transition = '0.4s';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '30px 6%';
        }
    });

    // 2. ANIMASI KEMASUKAN GAMBAR (Fade-In Effect)
    // Mencipta pemerhati (Observer) untuk mengesan elemen yang masuk ke skrin
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Berhenti memerhati selepas animasi selesai
            }
        });
    }, { threshold: 0.1 });

    // Memilih semua kotak gambar untuk diberikan animasi
    const imageBoxes = document.querySelectorAll('.image-box');
    imageBoxes.forEach(box => {
        // Tetapan awal sebelum animasi (boleh juga buat dalam CSS)
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = 'all 0.6s ease-out';
        
        imageObserver.observe(box);
    });

    // 3. LOGIK BUTANG REGISTER
    const regBtn = document.querySelector('.reg-btn');
    regBtn.addEventListener('click', (e) => {
        // Contoh: Paparkan mesej sebelum ke link rasmi
        console.log("Mengarahkan pengguna ke laman rasmi Yuji Nishida...");
    });

    // 4. EFEK KLIK PADA MOMENTS (Optional)
    // Memberi maklum balas visual di konsol apabila video diklik
    imageBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const videoTitle = this.querySelector('img').alt;
            alert('Menonton: ' + videoTitle);
        });
    });

    // 5. SMOOTH SCROLL UNTUK NAV LINKS
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Hanya buat smooth scroll jika link adalah ID dalam page yang sama
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});