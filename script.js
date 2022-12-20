// -----------ADD FUNCTION TO MOBILE MENU BAR------------

const hamburger = document.querySelector(".hamburger");
const mobileMenuBar = document.querySelector(".hamburger-menu-container");
const navLinks = document.querySelectorAll(".nav-link");

function mobileMenu() {
  hamburger.classList.toggle("active");
  mobileMenuBar.classList.toggle("show-menu");
}

hamburger.addEventListener("click", mobileMenu);

function removeMenu() {
  mobileMenuBar.classList.remove("show-menu");
  hamburger.classList.remove("active");
}
const navLinksArray = Array.from(navLinks);
// eslint-disable-next-line no-plusplus
for (let i = 0; i < navLinksArray.length; i++) {
  navLinksArray[i].addEventListener("click", removeMenu);
}

// -----------REFACTOR PROJECT SECTION----------------

// Store project information in array
const projectArray = [];

// Store project data in Javascript objects
const projectObject1 = {
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
};

projectArray.push(projectObject1);

// --------------------------------------------
const projectObject2 = {
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
};

projectArray.push(projectObject2);

// --------------------------------------------

const projectObject3 = {
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
};

projectArray.push(projectObject3);

// --------------------------------------------

const projectObject4 = {
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
};

projectArray.push(projectObject4);

// --------------------------------------------

const projectObject5 = {
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
};

projectArray.push(projectObject5);

// --------------------------------------------

const projectObject6 = {
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
};

projectArray.push(projectObject6);

// ----------CLASS AND ID SELECTORS----------------
const projectTitle = document.querySelectorAll(".project_title");
const rubyTechnology = document.querySelectorAll(".ruby");
const cssTechnology = document.querySelectorAll(".css");
const javascriptTechnology = document.querySelectorAll(".javascript");
const htmlTechnology = document.querySelectorAll(".html");

// ----CONVERT NODELIST TO ARRAY ------------
const projectTitleArray = Array.from(projectTitle);
const rubyTechnologyArray = Array.from(rubyTechnology);
const cssTechnologyArray = Array.from(cssTechnology);
const javascriptTechnologyArray = Array.from(javascriptTechnology);
const htmlTechnologyArray = Array.from(htmlTechnology);

// -----------ITERATE OVER THE MAIN PROJECT ARRAY--------------
for (let i = 0; i < projectArray.length; i++) {
  // -----------ITERATE OVER EACH PROJECT CONTENT----------
  for (let i = 0; i < projectTitleArray.length; i++) {
    projectTitleArray[i].innerHTML = projectArray[i].projectName;
  }
  for (let i = 0; i < rubyTechnologyArray.length; i++) {
    rubyTechnologyArray[i].innerHTML = projectArray[i].technologies.one;
  }
  for (let i = 0; i < cssTechnologyArray.length; i++) {
    cssTechnologyArray[i].innerHTML = projectArray[i].technologies.one;
  }
  for (let i = 0; i < javascriptTechnologyArray.length; i++) {
    javascriptTechnologyArray[i].innerHTML = projectArray[i].technologies.one;
  }
  for (let i = 0; i < htmlTechnologyArray.length; i++) {
    htmlTechnologyArray[i].innerHTML = projectArray[i].technologies.one;
  }
}
