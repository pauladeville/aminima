//ENTRY ANIMATIONS

const loader = document.querySelector(".loader");
const navElements = document.querySelectorAll(".menu-desktop__item");
const arrows = document.querySelectorAll("#welcome p");

const introTimeline = gsap.timeline({
  defaults: {
    ease: "Power-2",
  },
});
introTimeline
  .to(loader, {
    y: -1000,
    duration: 0.5,
    delay: 3,
    display: "none",
  })
  .to(navElements, {
    y: 0,
    autoAlpha: 1,
    stagger: 0.2,
  })
  .to(arrows, {
    y: 0,
    autoAlpha: 1,
    stagger: 0.2,
  });

//SCROLL ANIMATIONS

const aboutTL = gsap.timeline({
  scrollTrigger: "#clients",
});
aboutTL
  .to(".stack p", {
    x: 20,
    autoAlpha: 1,
    ease: "power-4",
    duration: 1,
  })
  .from(
    ".mobile-portrait",
    {
      autoAlpha: 0,
    },
    "<"
  );

gsap.from(".accordeon__client p", {
  scrollTrigger: {
    trigger: "#work",
  },
  y: 50,
  autoAlpha: 0,
});

for (let card of document.querySelectorAll(".desktop-card--right")) {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play reset play restart",
    },
    translateX: 100,
    duration: 1,
    autoAlpha: 0,
  });
}
for (let card of document.querySelectorAll(".desktop-card--left")) {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play reset play restart",
    },
    translateX: -100,
    duration: 1,
    autoAlpha: 0,
  });
}

gsap.from(".mobile-card:nth-child(1)", {
  scrollTrigger: {
    trigger: ".mobile-card:nth-child(1)",
    scrub: true,
    end: "bottom center",
  },
  autoAlpha: 0,
});

gsap.from("#wordpress", {
  scrollTrigger: {
    trigger: "#wordpress",
    scrub: 1,
  },
  autoAlpha: 0,
  duration: 1,
});

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
