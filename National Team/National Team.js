document.addEventListener('DOMContentLoaded', () => {
    // 1. INTERAKTIF NAVIGASI
    // Menambah kesan visual apabila menu diklik
    const navItems = document.querySelectorAll('nav ul li');
    
    navItems.forEach(item => {
        item.style.cursor = 'pointer'; // Tukar cursor kepada pointer
        
        item.addEventListener('click', function() {
            // Buang gaya tebal/warna dari semua item
            navItems.forEach(i => {
                i.style.color = 'white';
                i.style.textDecoration = 'none';
            });
            
            // Tambah gaya pada item yang diklik
            this.style.textDecoration = 'underline';
            this.style.fontWeight = 'bold';
            
            console.log("Navigasi ke: " + this.innerText);
        });
    });

    // 2. KESAN PADA "THE BIG THREE"
    // Apabila kotak pemain diklik, ia akan menunjukkan info ringkas
    const playerBoxes = document.querySelectorAll('.player-box');
    
    playerBoxes.forEach(box => {
        box.style.cursor = 'pointer';
        
        box.addEventListener('click', () => {
            const playerName = box.querySelector('.name-tag').innerText;
            // Kesan animasi kecil semasa klik
            box.style.transform = 'scale(0.95)';
            setTimeout(() => {
                box.style.transform = 'scale(1)';
                alert("Profil Pemain: " + playerName + "\nStatus: Key Player (Ryujin Nippon)");
            }, 100);
        });
    });

    // 3. HOVER PADA SENARAI PEMAIN LAIN (OTHER PLAYERS)
    // Memberi kesan warna apabila tetikus lalu di atas senarai
    const listItems = document.querySelectorAll('.list-item');
    
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.dataset.originalBg = item.style.backgroundColor; // Simpan warna asal
            item.style.backgroundColor = '#ff6600'; // Tukar jadi oren
            item.style.color = 'white';
            item.style.transition = '0.3s';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = ''; // Kembali kepada warna CSS asal
            item.style.color = 'black';
        });
    });

    // 4. FOOTER INTERACTION (FLY HIGH)
    const hoverText = document.querySelector('.hover-text');
    if(hoverText) {
        hoverText.addEventListener('mouseover', () => {
            hoverText.style.letterSpacing = '5px';
            hoverText.style.transition = '0.5s';
        });
        hoverText.addEventListener('mouseout', () => {
            hoverText.style.letterSpacing = 'normal';
        });
    }

    console.log("JavaScript Ryujin Nippon telah diaktifkan!");
});