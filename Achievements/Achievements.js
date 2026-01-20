document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".info-card");

    cards.forEach((card) => {
        // 1. Kesan Klik (Warna kekal hitam-oren bila dipilih)
        card.addEventListener("click", function() {
            // Buang class 'active-card' daripada kotak lain (supaya hanya satu aktif)
            cards.forEach(c => c.classList.remove("selected-card"));
            
            // Tambah class pada kotak yang ditekan
            this.classList.add("selected-card");
            
            // Tambah sedikit kesan feedback (pilihan)
            console.log("Pencapaian dipilih: " + this.querySelector("h3").innerText);
        });
    });

    // 2. Animasi Skrol (Kotak muncul secara estetik bila skrol sampai ke situ)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    cards.forEach((card) => {
        // Set keadaan awal sebelum animasi
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
});