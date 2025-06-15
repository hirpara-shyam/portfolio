document.addEventListener("DOMContentLoaded", function () {
  const phrases = [
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "Quick Learner",
    "Problem Solver"
  ];
  
  const typedText = document.getElementById("typed-text");
  const cursor = document.querySelector(".cursor");

  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;

  function type() {
    currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typedText.textContent = currentPhrase.substring(0, letterIndex--);
    } else {
      typedText.textContent = currentPhrase.substring(0, letterIndex++);
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
  }

  type(); // start typing
});

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY || window.pageYOffset;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) {
      const top = section.offsetTop - 85; // navbar height offset
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

const navLinks2 = document.querySelectorAll('.nav-link');
const navToggle = document.querySelector('.navbar-toggler'); // or your menu button
const navbarCollapse = document.querySelector('.navbar-collapse'); // or your mobile menu div

navLinks2.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse.classList.contains('show')) {
      navToggle.click(); // simulate a click to close menu
    }
  });
});
