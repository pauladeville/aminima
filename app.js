//HAMBURGER

const burger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');
const menuMobileLinks = document.querySelectorAll('.menu-mobile__item a');
burger.addEventListener('click', () => {
    burger.classList.toggle('hamburger--close');
    menuMobile.classList.toggle('menu-mobile--close');
});
for(menuMobileLink of menuMobileLinks){
  menuMobileLink.addEventListener('click', () => {
    burger.classList.toggle('hamburger--close');
    menuMobile.classList.toggle('menu-mobile--close');
  })
}
