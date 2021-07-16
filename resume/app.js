/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

const width = document.querySelector('.container').offsetWidth;
const height = document.querySelector('.container').offsetHeight;

let particles = document.querySelector('#particles-js');

width > 1025 ? particles.style.height = `${height}px` : particles.style.height = `1000px`;
