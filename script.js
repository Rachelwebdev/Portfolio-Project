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

// -------------MOBILE POPUP---------------------------------
function creatMobilePopup() {
  startingPoint.insertAdjacentHTML(
    "afterbegin",
    `<div id="popup-window" class="modal-mobile-overlay popup">
    <div id="popup-window" class="mobile-popup-container">
    <div class="mobile-image-icon-container">
      <img
          class="cancel-icon-mobile"
          src="./images/cross-X-btn-mobile.svg"
          alt="project display image"
        />
      <img
          class="project-image"
          src="./images/popup-mobile-img.svg"
          alt="project display image"
        />
    </div>
  
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
</div>
</div>`
  );
}
creatMobilePopup();

const projectNameM = document.querySelector(".popup-project-title");
const projectImageM = document.querySelector(".project-image");
const descriptionM = document.querySelector(".project-description");
const technologies1M = document.querySelector(".ruby-technology");
const technologies2M = document.querySelector(".css-technology");
const technologies3M = document.querySelector(".javascript-technology");
const liveLinkM = document.querySelector(".live-link");
const sourceLinkM = document.querySelector(".source-link");

projectNameM.textContent = projectArray[0].projectName;
projectImageM.setAttribute("src", projectArray[0].projectImageMobile);
descriptionM.textContent = projectArray[0].projectDescription;
technologies1M.textContent = projectArray[0].technologies1;
technologies2M.textContent = projectArray[0].technologies2;
technologies3M.textContent = projectArray[0].technologies3;
liveLinkM.setAttribute("src", projectArray[0].liveLink);
sourceLinkM.setAttribute("src", projectArray[0].sourceLink);

// -------------DESKTOP POPUP------------------------------------
function createDesktopPopup() {
  startingPoint.insertAdjacentHTML(
    "afterbegin",
    `<div id="popup-window" class="modal-desktop-overlay popuphide">
    <div class="desktop-popup-container">
        <img
          class="cancel-icon-desktop"
          src="./images/cross-X-btn-desktop.svg"
          alt="project display image"
        />
        <img
          class="popup-desktop-img"
          src="./images/popup-desktop-img.svg"
          alt="project display image"
        />
        <div class="heading-button-container">
          <h3 class="desktop-popup-project-title">            
          </h3>
          <div class="live-source-button-container">
            <a
              class="btn-live-desktop live-link-desktop"
              href="https://rachelwebdev.github.io/Portfolio-Project/"
              >See Live
              <span>
                <img
                  class="button-icons-desktop"
                  src="./images/see-live-icon.svg"
                  alt="white live icon" /></span
            ></a>
            <a
              class="btn-live-desktop source-link-desktop"
              href="https://github.com/Rachelwebdev/Portfolio-Project"
              >See Source
              <span>
                <img
                  class="button-icons-desktop"
                  src="./images/github-popup-icon.svg"
                  alt="white github icon" /></span
            ></a>
          </div>
        </div>
        <ul class="popup-technologies">
          <li class="Codekit-technology"></li>
          <li class="GitHub-technology"></li>
          <li class="js-technology"></li>
          <li class="Bootstrap-technology"></li>
          <li class="Terminal-technology"></li>
          <li class="Codepen-technology"></li>
        </ul>
        <p class="desktop-project-description"></p>
      </div>
      </div>`
  );
}
createDesktopPopup();

const projectNameD = document.querySelector(".desktop-popup-project-title");
const projectImageD = document.querySelector(".popup-desktop-img");
const descriptionD = document.querySelector(".desktop-project-description");
const technologies3D = document.querySelector(".js-technology");
const technologies4 = document.querySelector(".Codekit-technology");
const technologies5 = document.querySelector(".GitHub-technology");
const technologies6 = document.querySelector(".Bootstrap-technology");
const technologies7 = document.querySelector(".Terminal-technology");
const technologies8 = document.querySelector(".Codepen-technology");
const liveLinkD = document.querySelector(".live-link-desktop");
const sourceLinkD = document.querySelector(".source-link-desktop");

projectNameD.textContent = projectArray[0].projectName;
projectImageD.setAttribute("src", projectArray[0].projectImageDesktop);
descriptionD.textContent = projectArray[0].projectDescription;
technologies3D.textContent = projectArray[0].technologies3;
technologies4.textContent = projectArray[0].technologies4;
technologies5.textContent = projectArray[0].technologies5;
technologies6.textContent = projectArray[0].technologies6;
technologies7.textContent = projectArray[0].technologies7;
technologies8.textContent = projectArray[0].technologies8;
liveLinkD.setAttribute("src", projectArray[0].liveLink);
sourceLinkD.setAttribute("src", projectArray[0].sourceLink);

const projectButton = Array.from(document.querySelectorAll(".project-btn"));
const modal = document.querySelector(".modal-desktop-overlay");
const modalMobile = document.querySelector(".modal-mobile-overlay");
const modal2 = document.querySelector(".desktop-popup-container");
const modalMobile2 = document.querySelector(".mobile-popup-container");
const background = document.querySelector(".body");
const closeModal = document.querySelector(".cancel-icon-desktop");
const closeModalMobile = document.querySelector(".cancel-icon-mobile");
const hideDesktopPopup = document.querySelector(".popuphide");
const hideMobilePopup = document.querySelector(".popup");

// const minWidth = startingPoint.offsetWidth;
// const minWidth = startingPoint.offsetWidth;
//   if (minWidth < 768)
// DESKTOP OVERLAY

// mobile
function openModalMobile() {
  modalMobile.style.display = "flex";
  modal.style.display = "none";
}

function collapseMobileModal() {
  modalMobile.style.display = "none";
}
// desktop
function openModalDesktop() {
  modal.style.display = "flex";
  modalMobile.style.display = "none";
}

function collapseDesktopModal() {
  modal.style.display = "none";
}

collapseDesktopModal();
collapseMobileModal();

projectButton.forEach((project) => {
  project.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      collapseDesktopModal();
      openModalMobile();
    } else {
      collapseMobileModal();
      openModalDesktop();
    }
  });
});
closeModalMobile.addEventListener("click", collapseMobileModal);
closeModal.addEventListener("click", collapseDesktopModal);
