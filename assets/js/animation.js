///// ANIMATION /////
const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-100%', duration: 1 }, "-=1" );

tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1" );

///// TYPING //////

const words = ['Front-End ', 'Back-End ', 'Application ', 'Software '];
let countLetter = 0;
let countWord = 0;

let currentWord = '';
let letter = '';

(function type() {
    if(countWord === words.length) {
        document.querySelector('.typing').innerHTML = '';
        letter = '';
        countWord = 0;
    }

    currentWord = words[countWord];
    letter = currentWord.slice(countLetter, ++countLetter);
    document.querySelector('.typing').innerHTML += letter;

    if(countLetter === currentWord.length) {
        countWord++;
        countLetter = 0;
        if(countWord < words.length) {
            document.querySelector('.typing').innerHTML = '';
        }
    }

    setTimeout(type, 300);
}());

