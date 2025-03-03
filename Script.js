const buttons = document.querySelectorAll('.toggle-description');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const description = this.nextElementSibling;
        const isVisible = description.style.display === 'block';
        description.style.display = isVisible ? 'none' : 'block';
        this.textContent = isVisible ? 'Show Responsibilities' : 'Hide Responsibilities';
    });
});

// Smooth scrolling
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in effect for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// Scroll progress indicator
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercentage + '%';

    // Show or hide back-to-top button
    const backToTopButton = document.getElementById('backToTop');
    backToTopButton.style.display = scrollTop > 300 ? 'block' : 'none';
});

// Animate skill circles and percentages
const skillCircles = document.querySelectorAll('.skill-circle');
skillCircles.forEach(circle => {
    const skillValue = circle.getAttribute('data-skill');
    const fill = circle.querySelector('.fill');
    const percentageText = circle.querySelector('.skill-percentage');
    const degree = (parseInt(skillValue) / 100) * 360;
    fill.style.transform = `rotate(${degree}deg)`;
    let currentPercentage = 0;
    const interval = setInterval(() => {
        if (currentPercentage < parseInt(skillValue)) {
            currentPercentage++;
            percentageText.textContent = currentPercentage + '%';
            percentageText.style.opacity = 1;
        } else {
            clearInterval(interval);
        }
    }, 20);
});

// Modal functionality
const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('contactModal');
const closeModal = document.querySelector('.close');

contactBtn.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Back to top functionality
const backToTopButton = document.getElementById('backToTop');
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing effect for header
const typedHeader = document.getElementById('typed-header');
const text = "Ashley Lalican";
let index = 0;

function type() {
    if (index < text.length) {
        typedHeader.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

type();