const slides = document.querySelectorAll('.slide');
let index = 0;

function mostrarSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove('ativo');
        if (i === index) {
            slide.classList.add('ativo');
        }
    });
}

function proximoSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide();
}

setInterval(proximoSlide, 3000); // Muda o slide a cada 3 segundos
