const hamburger = document.querySelector('.hamburger');
const mobileMenuBar = document.querySelector('.hamburger-menu-container');
const navLinks = document.querySelectorAll('.nav-link');

function mobileMenu() {
  hamburger.classList.toggle('active');
  mobileMenuBar.classList.toggle('show-menu');
}

hamburger.addEventListener('click', mobileMenu);

function removeMenu() {
  mobileMenuBar.classList.remove('show-menu');
  hamburger.classList.remove('active');
}
const navLinksArray = Array.from(navLinks);
// eslint-disable-next-line no-plusplus
for (let i = 0; i < navLinksArray.length; i++) {
  navLinksArray[i].addEventListener('click', removeMenu);
}
