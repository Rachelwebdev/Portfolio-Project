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
const projectArray = [{
  projectName: "Multi-Post Stories Gain+Glory",
  projectDescription: "",
  projectImage: "",
  technologies: {
    one: "Ruby on rails",
    two: "css",
    three: "JavaScript",
    four: "html",
  },
  liveLink: "",
  sourceLink: "",
  projectButton: "See Project",
},
{
  projectName: "Multi-Post Stories Gain+Glory",
  projectDescription: "",
  projectImage: "",
  technologies: {
    one: "Ruby on rails",
    two: "css",
    three: "JavaScript",
    four: "html",
  },
  liveLink: "",
  sourceLink: "",
  projectButton: "See Project",
},{
  projectName: "Multi-Post Stories Gain+Glory",
  projectDescription: "",
  projectImage: "",
  technologies: {
    one: "Ruby on rails",
    two: "css",
    three: "JavaScript",
    four: "html",
  },
  liveLink: "",
  sourceLink: "",
  projectButton: "See Project",
},{
  projectName: "Multi-Post Stories Gain+Glory",
  projectDescription: "",
  projectImage: "",
  technologies: {
    one: "Ruby on rails",
    two: "css",
    three: "JavaScript",
    four: "html",
  },
  liveLink: "",
  sourceLink: "",
  projectButton: "See Project",
},{
  projectName: "Multi-Post Stories Gain+Glory",
  projectDescription: "",
  projectImage: "",
  technologies: {
    one: "Ruby on rails",
    two: "css",
    three: "JavaScript",
    four: "html",
  },
  liveLink: "",
  sourceLink: "",
  projectButton: "See Project",
},{
  projectName: "Multi-Post Stories Gain+Glory",
  projectDescription: "",
  projectImage: "",
  technologies: {
    one: "Ruby on rails",
    two: "css",
    three: "JavaScript",
    four: "html",
  },
  liveLink: "",
  sourceLink: "",
  projectButton: "See Project",
}];

const startingPoint=document.querySelector('.body')

function creatMobilePopup(){
  startingPoint.insertAdjacentHTML('afterbegin',`<div class="mobile-popup-container">
  <img
    src="./images/popup-mobile-img.svg"
    alt="project display image"
  />
  <h3 class="popup-project-title">
  </h3>
  <ul class="popup-technologies">
    <li class="ruby technology">Ruby on rails</li>
    <li class="css technology">css</li>
    <li class="javascript technology">javascript</li>
  </ul>
  <p class="project-description">
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of
    type and scrambled it 1960s with the releaLorem Ipsum is simply
    dummy text of the printing and typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it
    1960s with the relea
  </p>
  <div class="live-source-button-container">
    <button class="btn-live">
      See Live
      <span
        ><img
          class="button-icons"
          src="./images/see-live-icon.svg"
          alt="white live icon"
      /></span>
    </button>
    <button class="btn-live">
      See Source
      <span
        ><img
          src="./images/github-popup-icon.svg"
          alt="white github icon"
      /></span>
    </button>
  </div>
</div>` )
}
creatMobilePopup()


const projectName=document.querySelector('.popup-project-title')


projectName.textContent= projectArray[0].projectName


// console.log(projectArray[0]);

// for (let i = 0; i < projectArray.length; i++) {
// console.log(projectArray[i]);
// }

// Store project data in Javascript objects

// --------------------------------------------


// --------------------------------------------


// --------------------------------------------

// --------------------------------------------




// --------------------------------------------




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
