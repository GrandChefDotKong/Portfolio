const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

console.log('hello');

// Remove menu mobile

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(link => link.addEventListener('click', linkAction));

// Accordion skills

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    } 
} 

skillsHeader.forEach((skillHeader) => skillHeader.addEventListener('click', toggleSkills));

// Tabs qualification 

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => tab.addEventListener('click', () => { 
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach(tabContent => tabContent.classList.remove('qualification__active'));
    target.classList.add('qualification__active');
    
    tabs.forEach(tab => tab.classList.remove('qualification__active'));
    tab.classList.add('qualification__active');
}))

// Modal services

const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = (modalClick) => {
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => modal(i));
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => modalView.classList.remove('active-modal'));

    })
})

// Swiper portfolio

let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

// Scroll active

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
        } else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
        }

    });
}

window.addEventListener('scroll', scrollActive);

// Scroll header

function scrollHeader() {
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// scroll top

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 500) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);

// dark theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});


// onscroll animation

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function onScrollAnimation() {
    
    const aboutTitle = document.querySelector('.about-h2');
    if(isInViewport(aboutTitle)) {
        
        aboutTitle.classList.add('animate__animated', 'animate__fadeInRight');
        return;
    }

    const questionMark = document.querySelector('.question-mark');
    if(isInViewport(questionMark)) {
        
        questionMark.classList.add('animated');
        return;
    }

    const skillsTitle = document.querySelector('.skills-h2');
    if(isInViewport(skillsTitle)) {
        
        skillsTitle.classList.add('animate__animated', 'animate__fadeInLeft');
        return;
    }

    const servicesTitle = document.querySelector('.services-h2');
    if(isInViewport(servicesTitle)) {
        
        servicesTitle.classList.add('animate__animated', 'animate__fadeInRight');
        return;
    }

    const portfolioTitle = document.querySelector('.portfolio-h2');
    if(isInViewport(portfolioTitle)) {
        
        portfolioTitle.classList.add('animate__animated', 'animate__fadeInLeft');
        return;
    }

    const contactTitle = document.querySelector('.contact-h2');
    if(isInViewport(contactTitle)) {
        
        contactTitle.classList.add('animate__animated', 'animate__fadeInRight');
        return;
    }
}

window.addEventListener('scroll', onScrollAnimation);







