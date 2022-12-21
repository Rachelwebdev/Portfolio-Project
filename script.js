// -----------ADD FUNCTION TO MOBILE MENU BAR------------

// const hamburger = document.querySelector(".hamburger");
// const mobileMenuBar = document.querySelector(".hamburger-menu-container");
// const navLinks = document.querySelectorAll(".nav-link");

// function mobileMenu() {
//   hamburger.classList.toggle("active");
//   mobileMenuBar.classList.toggle("show-menu");
// }

// hamburger.addEventListener("click", mobileMenu);

// function removeMenu() {
//   mobileMenuBar.classList.remove("show-menu");
//   hamburger.classList.remove("active");
// }
// const navLinksArray = Array.from(navLinks);
// // eslint-disable-next-line no-plusplus
// for (let i = 0; i < navLinksArray.length; i++) {
//   navLinksArray[i].addEventListener("click", removeMenu);
// }

// -----------REFACTOR PROJECT SECTION----------------

// Store project information in array
const projectArray = [
  {
    projectName: "Keeping track of hundreds of components",
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: "./images/popup-mobile-img.svg",
    projectImageDesktop: "./images/popup-desktop-img.svg",
    technologies1: "Ruby on rails",
    technologies2: "css",
    technologies3: "JavaScript",
    technologies4: "Codekit",
    technologies5: "GitHub",
    technologies6: "Bootstrap",
    technologies7: "Terminal",
    technologies8: "Codepen",
    liveLink: "https://rachelwebdev.github.io/Portfolio-Project/",
    sourceLink: "https://github.com/Rachelwebdev/Portfolio-Project",
    projectButton: "See Project",
  },
  {
    projectName: "Keeping track of hundreds of components",
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: "./images/popup-mobile-img.svg",
    projectImageDesktop: "./images/popup-desktop-img.svg",
    technologies1: "Ruby on rails",
    technologies2: "css",
    technologies3: "JavaScript",
    technologies4: "Codekit",
    technologies5: "GitHub",
    technologies6: "Bootstrap",
    technologies7: "Terminal",
    technologies8: "Codepen",
    liveLink: "https://rachelwebdev.github.io/Portfolio-Project/",
    sourceLink: "https://github.com/Rachelwebdev/Portfolio-Project",
    projectButton: "See Project",
  },
  {
    projectName: "Keeping track of hundreds of components",
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: "./images/popup-mobile-img.svg",
    projectImageDesktop: "./images/popup-desktop-img.svg",
    technologies1: "Ruby on rails",
    technologies2: "css",
    technologies3: "JavaScript",
    technologies4: "Codekit",
    technologies5: "GitHub",
    technologies6: "Bootstrap",
    technologies7: "Terminal",
    technologies8: "Codepen",
    liveLink: "https://rachelwebdev.github.io/Portfolio-Project/",
    sourceLink: "https://github.com/Rachelwebdev/Portfolio-Project",
    projectButton: "See Project",
  },
  {
    projectName: "Keeping track of hundreds of components",
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: "./images/popup-mobile-img.svg",
    projectImageDesktop: "./images/popup-desktop-img.svg",
    technologies1: "Ruby on rails",
    technologies2: "css",
    technologies3: "JavaScript",
    technologies4: "Codekit",
    technologies5: "GitHub",
    technologies6: "Bootstrap",
    technologies7: "Terminal",
    technologies8: "Codepen",
    liveLink: "https://rachelwebdev.github.io/Portfolio-Project/",
    sourceLink: "https://github.com/Rachelwebdev/Portfolio-Project",
    projectButton: "See Project",
  },
  {
    projectName: "Keeping track of hundreds of components",
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: "./images/popup-mobile-img.svg",
    projectImageDesktop: "./images/popup-desktop-img.svg",
    technologies1: "Ruby on rails",
    technologies2: "css",
    technologies3: "JavaScript",
    technologies4: "Codekit",
    technologies5: "GitHub",
    technologies6: "Bootstrap",
    technologies7: "Terminal",
    technologies8: "Codepen",
    liveLink: "https://rachelwebdev.github.io/Portfolio-Project/",
    sourceLink: "https://github.com/Rachelwebdev/Portfolio-Project",
    projectButton: "See Project",
  },
  {
    projectName: "Keeping track of hundreds of components",
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: "./images/popup-mobile-img.svg",
    projectImageDesktop: "./images/popup-desktop-img.svg",
    technologies1: "Ruby on rails",
    technologies2: "css",
    technologies3: "JavaScript",
    technologies4: "Codekit",
    technologies5: "GitHub",
    technologies6: "Bootstrap",
    technologies7: "Terminal",
    technologies8: "Codepen",
    liveLink: "https://rachelwebdev.github.io/Portfolio-Project/",
    sourceLink: "https://github.com/Rachelwebdev/Portfolio-Project",
    projectButton: "See Project",
  },
];

const startingPoint = document.querySelector(".body");

// -------------MOBILE POPUP-----------
function creatMobilePopup() {
  startingPoint.insertAdjacentHTML(
    "afterbegin",
    `<div class="mobile-popup-container">
  <img
    class="project-image"
    src="./images/popup-mobile-img.svg"
    alt="project display image"
  />
  <h3 class="popup-project-title">
  </h3>
  <ul class="popup-technologies">
    <li class="ruby-technology"></li>
    <li class="css-technology"></li>
    <li class="javascript-technology"></li>
  </ul>
  <p class="project-description"></p>
  <div class="live-source-button-container">
      <a
        class="btn-live live-link"
        href="https://rachelwebdev.github.io/Portfolio-Project/"
        >See Live
        <span>
          <img
            class="button-icons"
            src="./images/see-live-icon.svg"
            alt="white live icon" /></span
      ></a>
      <a
        class="btn-live source-link"
        href="https://github.com/Rachelwebdev/Portfolio-Project"
        >See Live
        <span>
          <img
            class="button-icons"
            src="./images/github-popup-icon.svg"
            alt="white github icon" /></span
      ></a>
    </div>
</div>`
  );
}
creatMobilePopup();

// -------------DESKTOP POPUP-----------
function createDesktopPopup() {
  startingPoint.insertAdjacentHTML(
    "afterbegin",
    `<div class="desktop-popup-container">
        <img
          class="popup-desktop-img"
          src="./images/popup-desktop-img.svg"
          alt="project display image"
        />
        <div class="heading-button-container">
          <h3 class="popup-project-title">
            Keeping track of hundreds of components
          </h3>
          <div class="live-source-button-container">
            <a
              class="btn-live live-link"
              href="https://rachelwebdev.github.io/Portfolio-Project/"
              >See Live
              <span>
                <img
                  class="button-icons"
                  src="./images/see-live-icon.svg"
                  alt="white live icon" /></span
            ></a>
            <a
              class="btn-live source-link"
              href="https://github.com/Rachelwebdev/Portfolio-Project"
              >See Live
              <span>
                <img
                  class="button-icons"
                  src="./images/github-popup-icon.svg"
                  alt="white github icon" /></span
            ></a>
          </div>
        </div>
        <ul class="popup-technologies">
          <li class="Codekit-technology">Codekit</li>
          <li class="GitHub-technology">GitHub</li>
          <li class="Javascript-technology">Javascript</li>
          <li class="Bootstrap-technology">Bootstrap</li>
          <li class="Terminal-technology">Terminal</li>
          <li class="Codepen-technology">Codepen</li>
        </ul>
        <p class="project-description"></p>
      </div>`
  );
}
createDesktopPopup();

const projectName = document.querySelector(".popup-project-title");
const projectImageMobile = document.querySelector(".project-image");
const projectImageDesktop = document.querySelector(".popup-desktop-img");
const description = document.querySelector(".project-description");
const technologies1 = document.querySelector(".ruby-technology");
const technologies2 = document.querySelector(".css-technology");
const technologies3 = document.querySelector(".javascript-technology");
const technologies4 = document.querySelector(".Codekit-technology");
const technologies5 = document.querySelector(".GitHub-technology");
const technologies6 = document.querySelector(".Bootstrap-technology");
const technologies7 = document.querySelector(".Terminal-technology");
const technologies8 = document.querySelector(".Codepen-technology");
const liveLink = document.querySelector(".live-link");
const sourceLink = document.querySelector(".source-link");

projectName.textContent = projectArray[0].projectName;
projectImageMobile.setAttribute("src", projectArray[0].projectImageMobile);
projectImageDesktop.setAttribute("src", projectArray[0].projectImageDesktop);
description.textContent = projectArray[0].projectDescription;
technologies1.textContent = projectArray[0].technologies1;
technologies2.textContent = projectArray[0].technologies2;
technologies3.textContent = projectArray[0].technologies3;
technologies4.textContent = projectArray[0].technologies4;
technologies5.textContent = projectArray[0].technologies5;
technologies6.textContent = projectArray[0].technologies6;
technologies7.textContent = projectArray[0].technologies7;
technologies8.textContent = projectArray[0].technologies8;
liveLink.setAttribute("src", projectArray[0].liveLink);
sourceLink.setAttribute("src", projectArray[0].sourceLink);

// -----------ITERATE OVER THE MAIN PROJECT ARRAY--------------
// for (let i = 0; i < projectArray.length; i++) {
// -----------ITERATE OVER EACH PROJECT CONTENT----------
// for (let i = 0; i < projectTitleArray.length; i++) {
//   projectTitleArray[i].innerHTML = projectArray[i].projectName;
// }
// for (let i = 0; i < rubyTechnologyArray.length; i++) {
//   rubyTechnologyArray[i].innerHTML = projectArray[i].technologies.one;
// }
// console.log(projectArray[i].technologies.one);
// for (let i = 0; i < cssTechnologyArray.length; i++) {
//   cssTechnologyArray[i].innerHTML = projectArray[i].technologies.two;
// }
// for (let i = 0; i < javascriptTechnologyArray.length; i++) {
//   javascriptTechnologyArray[i].innerHTML = projectArray[i].technologies.three;
// }
// for (let i = 0; i < htmlTechnologyArray.length; i++) {
//   htmlTechnologyArray[i].innerHTML = projectArray[i].technologies.four;
// }
// for (let i = 0; i < projectButtonArray.length; i++) {
//   projectButtonArray[i].innerHTML = projectArray[i].projectButton;
// }
// }
