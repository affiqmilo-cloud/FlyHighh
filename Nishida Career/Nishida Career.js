// Menunggu sehingga semua elemen DOM dimuatkan
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ANIMASI SKROL (FADE-IN)
    // Mencari semua kad kerjaya
    const careerItems = document.querySelectorAll('.career-item');

    const observerOptions = {
        threshold: 0.2 // Animasi bermula apabila 20% kad muncul di skrin
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    careerItems.forEach(item => {
        // Tetapkan gaya asal sebelum animasi
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "all 0.6s ease-out";
        
        observer.observe(item);
    });

    // 2. INTERAKSI KLIK (FEEDBACK)
    // Menambah logik untuk memberi kesan visual tambahan semasa kad ditekan
    careerItems.forEach(item => {
        item.addEventListener('mousedown', () => {
            item.style.backgroundColor = "#000000";
        });

        item.addEventListener('mouseup', () => {
            // Kembali ke warna asal selepas klik dilepaskan (atau biarkan jika mahu kekal)
            setTimeout(() => {
                item.style.backgroundColor = "#fff";
            }, 200);
        });

        // Jika mahu kad ini boleh diklik untuk maklumat lanjut (Contoh: Popup/Alert)
        item.addEventListener('click', () => {
            const title = item.querySelector('h3').innerText;
            console.log("Melihat butiran untuk: " + title);
            // Anda boleh tambah modal/popup di sini pada masa hadapan
        });
    });

    // 3. LOGIK NAVIGATION (MOCKUP)
    // Memberi kesan visual apabila menu navigasi diklik
    const navLinks = document.querySelectorAll('nav ul li');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert("Anda akan dibawa ke bahagian: " + link.innerText);
        });
    });

});// JavaScript Document