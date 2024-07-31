document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        if (index >= slides.length) {
            carouselContainer.style.transition = 'none'; // Desativa a transição para o salto
            carouselContainer.style.transform = `translateX(0%)`; // Move para a primeira imagem
            currentIndex = 0;
            setTimeout(() => {
                carouselContainer.style.transition = 'transform 0.5s ease'; // Reativa a transição
                showSlide(currentIndex + 1); // Mostra a segunda imagem
            }, 50); // Tempo mínimo para garantir que a transição foi desativada
        } else if (index < 0) {
            currentIndex = slides.length - 1;
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else {
            currentIndex = index;
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 3000);
    }

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    carouselContainer.addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });

    carouselContainer.addEventListener('mouseout', () => {
        startAutoSlide();
    });

    showSlide(currentIndex);
    startAutoSlide();

    // Formulário
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        console.log(`Nome: ${nome}, Email: ${email}, Mensagem: ${mensagem}`);
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
});
