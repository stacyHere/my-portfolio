let char = document.querySelectorAll('.char');
let word = document.querySelectorAll('.word');

for(let i = 0; i<char.length; i++) {
  char[i].addEventListener("mouseenter", function() {
    this.classList.add("hov");
    this.addEventListener("animationend", function() {
      /* remove class so mouse can trigger again */
      this.classList.remove("hov");
    });
  });
}

/* for mobile */

for(let i = 0; i<char.length; i++) {
  char[i].addEventListener("touchstart", function() {
    this.classList.add("hov");
    this.addEventListener("touchend", function() {
      /* remove class so mouse can trigger again */
      this.classList.remove("hov");
    });
  });
}


const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav__list');
  const navLinks = document.querySelectorAll('.nav__list li');

  burger.addEventListener('click', () => {
    /*toggle nav*/
    nav.classList.toggle('nav-active');

      /*animate links*/
    navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7+.5}s`;
    }
    });

    /*burger animation*/
    burger.classList.toggle('toggle');
  });
}

navSlide();
