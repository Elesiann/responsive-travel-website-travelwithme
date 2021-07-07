/* ======== SHOW MENU ======== */
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/* ======== MENU SHOWN ======== */
/* VALIDATE IF CONSTANT EXISTS */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add('show-menu');
  });
}

/* ======== MENU HIDDEN ======== */
/* VALIDATE IF CONSTANT EXISTS */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })

}

/* ======== REMOVE MENU MOBILE ======== */

const navLink = document.querySelectorAll('.nav__link')

function linkAction (){
    const navMenu = document.getElementById('nav-menu')
    // When clicking on each nav__link, remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
