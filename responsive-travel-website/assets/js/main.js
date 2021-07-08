/* ======== SHOW MENU ======== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ======== MENU SHOWN ======== */
/* VALIDATE IF CONSTANT EXISTS */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ======== MENU HIDDEN ======== */
/* VALIDATE IF CONSTANT EXISTS */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ======== REMOVE MENU MOBILE ======== */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When clicking on each nav__link, remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ============= CHANGE BACKGROUND HEADER ============= */
function scrollHeader() {
  const header = document.getElementById("header");
  //When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ======== SWIPER DISCOVER ======== */
var swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

/*  ========== VIDEO ========== */
const videoFile = document.getElementById("video-file"),
  videoButton = document.getElementById("video-button"),
  videoIcon = document.getElementById("video-icon");

function playPause() {
  if (videoFile.paused) {
    // Play video
    videoFile.play();

    // Change icon
    videoIcon.classList.add("ri-pause-circle-line");
    videoIcon.classList.remove("ri-play-circle-line");
  } else {
    //Pause video
    videoFile.pause();
    // Change icon again
    videoIcon.classList.remove("ri-pause-circle-line");
    videoIcon.classList.add("ri-play-circle-line");
  }
}

videoButton.addEventListener("click", playPause);

function finalVideo() {
  // When the video ends, icon changes
  videoIcon.classList.remove("ri-pause-circle-line");
  videoIcon.classList.add("ri-play-circle-line");
}
videoFile.addEventListener("ended", finalVideo);
