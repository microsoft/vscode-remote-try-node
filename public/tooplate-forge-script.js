/* JavaScript Document

Tooplate 2158 Forge Reality

https://www.tooplate.com/view/2158-forge-reality

*/

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navigation background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            nav.style.background = 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.8) 100%)';
        }
    }
});

// Parallax effect for hero backgrounds
window.addEventListener('scroll', function() {
    const heroBackgrounds = document.querySelector('.hero-backgrounds');
    if (heroBackgrounds) {
        const scrolled = window.pageYOffset;
        heroBackgrounds.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks2 = document.querySelector('.nav-links');

if (menuToggle && navLinks2) {
    menuToggle.addEventListener('click', function() {
        navLinks2.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// Pricing Toggle Functionality
const pricingToggle = document.getElementById('pricing-toggle');
const monthlyLabel = document.getElementById('monthly-label');
const yearlyLabel = document.getElementById('yearly-label');
const priceAmounts = document.querySelectorAll('.price-amount');
const pricePeriods = document.querySelectorAll('.price-period');

if (pricingToggle) {
    pricingToggle.addEventListener('click', function() {
        this.classList.toggle('yearly');
        if (this.classList.contains('yearly')) {
            monthlyLabel.classList.remove('active');
            yearlyLabel.classList.add('active');
            priceAmounts.forEach(price => {
                const monthlyPrice = parseInt(price.getAttribute('data-monthly'));
                const yearlyPrice = Math.round(monthlyPrice * 12 * 0.80);
                price.textContent = yearlyPrice.toLocaleString();
            });
            pricePeriods.forEach(period => {
                period.textContent = '/anual';
            });
        } else {
            monthlyLabel.classList.add('active');
            yearlyLabel.classList.remove('active');
            priceAmounts.forEach(price => {
                const monthlyPrice = price.getAttribute('data-monthly');
                price.textContent = monthlyPrice;
            });
            pricePeriods.forEach(period => {
                period.textContent = '/mensal';
            });
        }
    });
}

// Remove loading bar after page load
window.addEventListener('load', function() {
    const loadingBar = document.querySelector('.loading-bar');
    if (loadingBar) {
        setTimeout(() => {
            loadingBar.style.display = 'none';
        }, 1200);
    }
});

const track = document.querySelector('.testimonial-track');
const slides = document.querySelectorAll('.testimonial-card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.slider-dots');

let index = 0;

if (track && dotsContainer && slides.length > 0) {
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dots span');

    function updateSlider() {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function goToSlide(i) {
        index = i;
        updateSlider();
    }

    nextBtn?.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    prevBtn?.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        updateSlider();
    }, 4000);

    updateSlider();
}

const animatedElements = document.querySelectorAll('.fade-left, .fade-right');

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;
    animatedElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);

const registrationForm = document.querySelector('#registration-form');
const registrationNotice = document.querySelector('#registration-notice');

if (registrationForm) {
    registrationForm.addEventListener('submit', async event => {
        event.preventDefault();
        const formData = new FormData(registrationForm);
        const data = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            curso: formData.get('curso'),
        };

        registrationNotice.textContent = 'Enviando...';
        registrationNotice.className = 'form-notice';

        try {
            const response = await fetch('/api/alunos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao enviar o cadastro.');
            }
            registrationNotice.textContent = 'Cadastro realizado com sucesso!';
            registrationNotice.classList.add('success');
            registrationForm.reset();
        } catch (error) {
            registrationNotice.textContent = error.message;
            registrationNotice.classList.add('error');
        }
    });
}
