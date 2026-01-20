document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in-element');
    
    elements.forEach((el, index) => {
        // Memberi sedikit delay antara setiap element supaya nampak cantik
        setTimeout(() => {
            el.classList.add('show');
        }, 300 * index); 
    });
});// JavaScript Document