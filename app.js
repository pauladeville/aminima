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

//ACCORDEON

let clients = document.querySelectorAll('.accordeon__client');
let quotes = document.querySelectorAll('accordeon__quote');
for(let client of clients){
  client.addEventListener('click', () => {
    client.classList.toggle('accordeon__client--active');
    client.firstElementChild.classList.toggle('arrow--down');
    client.firstElementChild.classList.toggle('arrow--up');
    let quote = client.nextElementSibling;
    if(quote.style.maxHeight){
      quote.style.maxHeight = null;
    } else {
      quote.style.maxHeight = quote.scrollHeight + 'px';
    }
  })
}
