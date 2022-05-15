//-------------------- creating responsive navbar component--------

const mobile_nav = document.querySelector(".mobile-menu-btn"); //targeting hamburger menu and close nav icon
const navbarEle = document.querySelector(".navbar"); // targeting responsive navbar
// apply the click event to the menu and close nav icon
mobile_nav.addEventListener("click", () => {
  navbarEle.classList.toggle("active"); // as soon as you click on menu or close nav icon its add or remove active class from navbar div
});

let features = document.querySelectorAll(" .nav-items-left > li")[0]; // targeting features link from navbar list
// adding click event on a features link
features.addEventListener("click", function () {
  features.classList.toggle("drop"); // as soon as you click on freatures link it will add "drop" class into the features div
});
let company = document.querySelectorAll(" .nav-items-left > li")[1]; // targeting company link from navbar list

company.addEventListener("click", function () {
  // adding click event on a company link
  company.classList.toggle("drop"); // as soon as you click on company link it will add "drop" class into the company div
});

// targeting mouseup event into dom
document.addEventListener("mouseup", function (e) {
  // wen you click outside the features or compnay link it will remove "drop" class from it whicth close the list tab from it
  if (e.target !== features || e.target !== company) {
    features.classList.remove("drop");
    company.classList.remove("drop");
  }
});
