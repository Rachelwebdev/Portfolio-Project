// -----------ADD FUNCTION TO MOBILE MENU BAR------------

const hamburger = document.querySelector('.hamburger');
const mobileMenuBar = document.querySelector('.hamburger-menu-container');
const navLinks = document.querySelectorAll('.nav-link');

const mobileMenu = () => {
  hamburger.classList.toggle('active');
  mobileMenuBar.classList.toggle('show-menu');
};

hamburger.addEventListener('click', mobileMenu);

const removeMenu = () => {
  mobileMenuBar.classList.remove('show-menu');
  hamburger.classList.remove('active');
};
const navLinksArray = Array.from(navLinks);
for (let i = 0; i < navLinksArray.length; i += 1) {
  navLinksArray[i].addEventListener('click', removeMenu);
}

// -----------REFACTOR PROJECT SECTION----------------

// Store project information in array
const projectArray = [
  {
    projectHeading: 'Multi-Post Stories Gain+Glory',
    projectName: 'Keeping track of hundreds of components',
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: './images/popup-mobile-img.svg',
    projectImageDesktop: './images/popup-desktop-img.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavaScript',
    technologies4: 'Codekit',
    technologies5: 'GitHub',
    technologies6: 'Bootstrap',
    technologies7: 'Terminal',
    technologies8: 'Codepen',
    technologies9: 'html',
    liveLink: 'https://rachelwebdev.github.io/Portfolio-Project/',
    sourceLink: 'https://github.com/Rachelwebdev/Portfolio-Project',
    projectButton: 'See Project',
    btnValue: 0,
  },
  {
    projectHeading: 'Multi-Post Stories Gain+Glory',
    projectName: 'Keeping track of hundreds of components',
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: './images/popup-mobile-img.svg',
    projectImageDesktop: './images/popup-desktop-img.svg',
    technologies1: 'Ruby on rails1',
    technologies2: 'css',
    technologies3: 'JavaScript',
    technologies4: 'Codekit',
    technologies5: 'GitHub',
    technologies6: 'Bootstrap',
    technologies7: 'Terminal',
    technologies8: 'Codepen',
    technologies9: 'html',
    liveLink: 'https://rachelwebdev.github.io/Portfolio-Project/',
    sourceLink: 'https://github.com/Rachelwebdev/Portfolio-Project',
    projectButton: 'See Project',
    btnValue: 1,
  },
  {
    projectHeading: 'Multi-Post Stories Gain+Glory',
    projectName: 'Keeping track of hundreds of components',
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: './images/popup-mobile-img.svg',
    projectImageDesktop: './images/popup-desktop-img.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavaScript',
    technologies4: 'Codekit',
    technologies5: 'GitHub',
    technologies6: 'Bootstrap',
    technologies7: 'Terminal',
    technologies8: 'Codepen',
    technologies9: 'html',
    liveLink: 'https://rachelwebdev.github.io/Portfolio-Project/',
    sourceLink: 'https://github.com/Rachelwebdev/Portfolio-Project',
    projectButton: 'See Project',
    btnValue: 2,
  },
  {
    projectHeading: 'Multi-Post Stories Gain+Glory',
    projectName: 'Keeping track of hundreds of components',
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: './images/popup-mobile-img.svg',
    projectImageDesktop: './images/popup-desktop-img.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavaScript',
    technologies4: 'Codekit',
    technologies5: 'GitHub',
    technologies6: 'Bootstrap',
    technologies7: 'Terminal',
    technologies8: 'Codepen',
    technologies9: 'html',
    liveLink: 'https://rachelwebdev.github.io/Portfolio-Project/',
    sourceLink: 'https://github.com/Rachelwebdev/Portfolio-Project',
    projectButton: 'See Project',
    btnValue: 3,
  },
  {
    projectHeading: 'Multi-Post Stories Gain+Glory',
    projectName: 'Keeping track of hundreds of components',
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: './images/popup-mobile-img.svg',
    projectImageDesktop: './images/popup-desktop-img.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavaScript',
    technologies4: 'Codekit',
    technologies5: 'GitHub',
    technologies6: 'Bootstrap',
    technologies7: 'Terminal',
    technologies8: 'Codepen',
    technologies9: 'html',
    liveLink: 'https://rachelwebdev.github.io/Portfolio-Project/',
    sourceLink: 'https://github.com/Rachelwebdev/Portfolio-Project',
    projectButton: 'See Project',
    btnValue: 4,
  },
  {
    projectHeading: 'Multi-Post Stories Gain+Glory',
    projectName: 'Keeping track of hundreds of components',
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the release`,
    projectImageMobile: './images/popup-mobile-img.svg',
    projectImageDesktop: './images/popup-desktop-img.svg',
    technologies1: 'Ruby on rails',
    technologies2: 'css',
    technologies3: 'JavaScript',
    technologies4: 'Codekit',
    technologies5: 'GitHub',
    technologies6: 'Bootstrap',
    technologies7: 'Terminal',
    technologies8: 'Codepen',
    technologies9: 'html',
    liveLink: 'https://rachelwebdev.github.io/Portfolio-Project/',
    sourceLink: 'https://github.com/Rachelwebdev/Portfolio-Project',
    projectButton: 'See Project',
    btnValue: 5,
  },
];

const startingPoint = document.querySelector('.body');

// -------------MOBILE POPUP---------------------------------
const creatMobilePopup = () => {
  startingPoint.insertAdjacentHTML(
    'afterbegin',
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
</div>`,
  );
};
const projectStart = document.querySelector('.project_section');
const creatProject = () => {
  projectStart.insertAdjacentHTML(
    'afterbegin',
    `            <div class="single_project_card card-1">
    <div class="project_img_placeholder"></div>
    <div class="project_title_container">
      <h3 class="project_title project-heading"></h3>
      <ul class="technologies_container">
        <li class="ruby technology Project-technologies1 "></li>
        <li class="css technology Project-technologies2"></li>
        <li class="javascript technology Project-technologies3"></li>
        <li class="html technology Project-technologies4"></li>
      </ul>
      <a href="#popup-window"
        ><button type="button" id="" class="project-btn">See Project</button></a
      >
    </div>
  </div>`,
  );
};

// eslint-disable-next-line no-plusplus
for (let i = 5; i >= 0; i -= 1) {
  creatProject();
  const projectHeading = document.querySelector('.project-heading');
  const ProjectTechnologies1 = document.querySelector('.Project-technologies1');
  const ProjectTechnologies2 = document.querySelector('.Project-technologies2');
  const ProjectTechnologies3 = document.querySelector('.Project-technologies3');
  const ProjectTechnologies4 = document.querySelector('.Project-technologies4');
  const btnProject = document.querySelector('.project-btn');

  projectHeading.textContent = projectArray[i].projectHeading;
  ProjectTechnologies1.textContent = projectArray[i].technologies1;
  ProjectTechnologies2.textContent = projectArray[i].technologies2;
  ProjectTechnologies3.textContent = projectArray[i].technologies3;
  ProjectTechnologies4.textContent = projectArray[i].technologies9;
  btnProject.setAttribute('id', projectArray[i].btnValue);
}
creatMobilePopup();

const projectNameM = document.querySelector('.popup-project-title');
const projectImageM = document.querySelector('.project-image');
const descriptionM = document.querySelector('.project-description');
const technologies1M = document.querySelector('.ruby-technology');
const technologies2M = document.querySelector('.css-technology');
const technologies3M = document.querySelector('.javascript-technology');
const liveLinkM = document.querySelector('.live-link');
const sourceLinkM = document.querySelector('.source-link');

// -------------DESKTOP POPUP------------------------------------
const createDesktopPopup = () => {
  startingPoint.insertAdjacentHTML(
    'afterbegin',
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
      </div>`,
  );
};
createDesktopPopup();

const projectNameD = document.querySelector('.desktop-popup-project-title');
const projectImageD = document.querySelector('.popup-desktop-img');
const descriptionD = document.querySelector('.desktop-project-description');
const technologies3D = document.querySelector('.js-technology');
const technologies4 = document.querySelector('.Codekit-technology');
const technologies5 = document.querySelector('.GitHub-technology');
const technologies6 = document.querySelector('.Bootstrap-technology');
const technologies7 = document.querySelector('.Terminal-technology');
const technologies8 = document.querySelector('.Codepen-technology');
const liveLinkD = document.querySelector('.live-link-desktop');
const sourceLinkD = document.querySelector('.source-link-desktop');

const projectButton = document.querySelectorAll('.project-btn');
const modal = document.querySelector('.modal-desktop-overlay');
const modalMobile = document.querySelector('.modal-mobile-overlay');
const closeModal = document.querySelector('.cancel-icon-desktop');
const closeModalMobile = document.querySelector('.cancel-icon-mobile');

// DESKTOP OVERLAY
// mobile
const openModalMobile = () => {
  modalMobile.style.display = 'flex';
  modal.style.display = 'none';
};

const collapseMobileModal = () => {
  modalMobile.style.display = 'none';
};
// desktop
const openModalDesktop = () => {
  modal.style.display = 'flex';
  modalMobile.style.display = 'none';
};

const collapseDesktopModal = () => {
  modal.style.display = 'none';
};

collapseDesktopModal();
collapseMobileModal();

projectButton.forEach((button) => {
  button.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      collapseDesktopModal();
      openModalMobile();
    } else {
      collapseMobileModal();
      openModalDesktop();
    }
    const count = button.id;
    projectNameD.textContent = projectArray[count].projectName;
    projectImageD.setAttribute('src', projectArray[count].projectImageDesktop);
    descriptionD.textContent = projectArray[count].projectDescription;
    technologies3D.textContent = projectArray[count].technologies3;
    technologies4.textContent = projectArray[count].technologies4;
    technologies5.textContent = projectArray[count].technologies5;
    technologies6.textContent = projectArray[count].technologies6;
    technologies7.textContent = projectArray[count].technologies7;
    technologies8.textContent = projectArray[count].technologies8;
    liveLinkD.setAttribute('src', projectArray[count].liveLink);
    sourceLinkD.setAttribute('src', projectArray[count].sourceLink);

    projectNameM.textContent = projectArray[count].projectName;
    projectImageM.setAttribute('src', projectArray[count].projectImageMobile);
    descriptionM.textContent = projectArray[count].projectDescription;
    technologies1M.textContent = projectArray[count].technologies1;
    technologies2M.textContent = projectArray[count].technologies2;
    technologies3M.textContent = projectArray[count].technologies3;
    liveLinkM.setAttribute('src', projectArray[count].liveLink);
    sourceLinkM.setAttribute('src', projectArray[count].sourceLink);
  });
});
closeModalMobile.addEventListener('click', collapseMobileModal);
closeModal.addEventListener('click', collapseDesktopModal);

// FORM VALIDATION
const email = document.getElementById('email');
const error = document.getElementById('error');
const formSubmit = document.getElementById('form-button');

formSubmit.addEventListener('click', (event) => {
  if (email.validity.typeMismatch) {
    error.textContent = 'Invalid Email!';
    event.preventDefault();
    return;
  }
  if (email.validity.patternMismatch) {
    error.textContent = 'Kindly ensure your email is in lowercase letters';
    event.preventDefault();
    return;
  }
  formSubmit.submit();
});

/* Local Storage */

const fullName = document.getElementById('full-name');
const message = document.getElementById('message');

function addFormData() {
  const formDetails = document.getElementById('contact-Form');
  const contactFormData = new FormData(formDetails);
  const contactFormObject = Object.fromEntries(contactFormData.entries());
  localStorage.setItem('form', JSON.stringify(contactFormObject));
}

email.addEventListener('keydown', addFormData);
fullName.addEventListener('keydown', addFormData);
message.addEventListener('keydown', addFormData);

const storedData = JSON.parse(localStorage.getItem('form') ?? '{}');

fullName.value = storedData.name ?? '';
email.value = storedData.email ?? '';
message.value = storedData.message ?? '';
