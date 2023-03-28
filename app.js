//LOADER PAGE

const loader = document.querySelector(".loader");
function hideLoader() {
  setTimeout(() => {
    loader.classList.add("loader--ended");
  }, 3000);
  setTimeout(() => {
    loader.remove();
  }, 3200);
}
hideLoader();

//HAMBURGER

const burger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".menu-mobile");
const menuMobileLinks = document.querySelectorAll(".menu-mobile__item a");
burger.addEventListener("click", () => {
  burger.classList.toggle("hamburger--close");
  menuMobile.classList.toggle("menu-mobile--close");
});
for (menuMobileLink of menuMobileLinks) {
  menuMobileLink.addEventListener("click", () => {
    burger.classList.toggle("hamburger--close");
    menuMobile.classList.toggle("menu-mobile--close");
  });
}

//SCROLL NAV DESKTOP

let nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  if (scrollY > 150) {
    nav.classList.add("nav--scroll");
  } else if (scrollY <= 150 || nav.classList.contains("nav--scroll")) {
    nav.classList.remove("nav--scroll");
  }
});

//ACCORDEON CLIENTS

const accordeons = document.querySelectorAll(".accordeon");
function openAccordeon(accordeon) {
  let quote = accordeon.querySelector(".accordeon__quote");
  accordeon.classList.add("accordeon--active");
  quote.style.maxHeight = quote.scrollHeight + 25 + "px";
}
function closeAccordeon(accordeon) {
  let quote = accordeon.querySelector(".accordeon__quote");
  accordeon.classList.remove("accordeon--active");
  quote.style.maxHeight = 0;
}
for (let accordeon of accordeons) {
  accordeon.addEventListener("click", () => {
    if (accordeon.classList.contains("accordeon--active")) {
      closeAccordeon(accordeon);
    } else {
      for (let accordeon of accordeons) {
        closeAccordeon(accordeon);
      }
      openAccordeon(accordeon);
    }
  });
}
