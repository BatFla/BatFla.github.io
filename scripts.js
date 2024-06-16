let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.teaser-project');
    const totalSlides = slides.length;
    const carouselInner = document.querySelector('.carousel-inner');

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;

    // Ajouter des styles pour séparer visuellement les sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.style.borderTop = '1px solid #ccc'; // Bordure en haut de chaque section
        section.style.paddingTop = '20px'; // Ajoute un espace entre la bordure et le contenu de la section
        section.style.paddingBottom = '20px'; // Ajoute un espace en bas de chaque section
    });

    // Ajouter une séparation visuelle entre la dernière section et le footer
    const lastSection = sections[sections.length - 1];
    const footer = document.querySelector('footer');
    lastSection.style.borderBottom = '1px solid #ccc'; // Bordure en bas de la dernière section
    lastSection.style.marginBottom = '50px'; // Ajoute une marge en bas de la dernière section
    footer.style.marginTop = '50px'; // Ajoute une marge en haut du footer
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the first slide
showSlide(currentIndex);


const projects = document.querySelector('.teaser-projects');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const projectImages = document.querySelectorAll('.project-image');

// Parcourez chaque image et ajoutez un gestionnaire d'événements de clic
projectImages.forEach((image) => {
    image.addEventListener('click', () => {
        window.location.href = 'projects.html'; // Redirige vers la page des projets
    });
});

// Sélectionnez la deuxième image du projet
const projectImage2 = document.querySelector('.teaser-project:nth-child(2) .project-image');

// Ajoutez un gestionnaire d'événements de clic à la deuxième image du projet
projectImage2.addEventListener('click', () => {
    window.location.href = 'projects.html'; // Redirige vers la page des projets
});


next;
