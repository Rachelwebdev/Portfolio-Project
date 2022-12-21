const projectButton = document.querySelectorAll(".project-btn");
const projectButtonArray = Array.from(projectButton);

const showPopup = () => {
  projectButton.classList.toggle("show-menu");
};

for (let i = 0; i < projectButtonArray.length; i++) {
  projectButtonArray[i].addEventListener("click", showPopup);
}
