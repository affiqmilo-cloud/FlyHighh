// Menunggu sehingga semua elemen HTML dimuatkan sepenuhnya
document.addEventListener("DOMContentLoaded", function() {

    // 1. KESAN POP-UP UNTUK BUTANG REGISTER
    const regBtn = document.querySelector('.reg-btn');
    regBtn.addEventListener('click', function(e) {
        // Jika href masih lagi "PAUTAN_BORANG_ANDA_DI_SINI", tunjukkan mesej
        if (this.getAttribute('href') === "PAUTAN_BORANG_ANDA_DI_SINI") {
            e.preventDefault(); // Menghalang link daripada dibuka
            alert("Pendaftaran akan dibuka tidak lama lagi! Sila pastikan anda mengikuti perkembangan kami di media sosial.");
        }
    });

    // 2. KESAN MUNCUL (REVEAL) PADA SKROL
    // Elemen akan muncul secara perlahan bila pengguna skrol ke bawah
    const observerOptions = {
        threshold: 0.1 // 10% elemen masuk skrin baru kesan bermula
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Hanya buat sekali sahaja
            }
        });
    }, observerOptions);

    // Pilih elemen yang mahu diberi kesan muncul
    const sections = document.querySelectorAll('.info-section, .facts-card, .image-container, .quote-box');
    
    sections.forEach(section => {
        // Tetapan awal sebelum muncul
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        
        revealOnScroll.observe(section);
    });

    // 3. NAVIGASI NAVBAR (EFEK SEMASA SKROL)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.padding = '15px 6%';
            navbar.style.transition = '0.3s ease';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '30px 6%';
        }
    });

    // 4. LOGIK UNTUK MENGESAHKAN PAUTAN SOSIAL
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', () => {
            console