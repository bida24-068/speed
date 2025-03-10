// ================== SHOW MENU ====================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

// CHANGE THE BACKGROUND ON SCROLL =========================
function changeHeaderColor() {
  const header = document.getElementById("header");

  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);

// REMOVE MENU ON CLICK FOR MOBILE =========================
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

// ACTIVE SECTION LINK ============================
const sections = document.querySelectorAll("section[id");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/

/* ================== SWIPER JS ================= */
var swiper = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== MIXITUP ===============*/
var mixerProducts = mixitup(".product__content", {
  selectors: {
    target: ".product__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active products */
const linkProducts = document.querySelectorAll(".product__item");

function activeProduct() {
  linkProducts.forEach((link) => link.classList.remove("active-product"));
  this.classList.add("active-product");
}
linkProducts.forEach((link) => link.addEventListener("click", activeProduct));

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
// SCROLL REVEAL JS =================================
