const hamburger = document.querySelector(".hamburger");
const mobileMenuBar = document.querySelector(".hamburger-menu-container");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  mobileMenuBar.classList.toggle("show-menu");
}

function removeMenu() {
  mobileMenuBar.classList.remove("show-menu");
  hamburger.classList.remove("active");
}

const navLinksArray = Array.from(navLinks);

for (let i = 0; i < navLinksArray.length; i++) {
  navLinksArray[i].addEventListener("click", removeMenu);
}
