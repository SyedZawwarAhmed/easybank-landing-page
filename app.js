// THIS SCRIPT IS FOR THE HOVER EFFECTS ON SOCIAL ICONS IN THE FOOTER

const colorChange = (id) => {
  document.getElementById(id).style.display = "none";
  document.getElementById(id + "-2").style.display = "unset";
};

const colorUnchange = (id) => {
  document.getElementById(id + "-2").style.display = "none";
  document.getElementById(id).style.display = "unset";
};

// THIS SCRIPT IS FOR THE FUNCTIONALITY OF HAMBURGER MENU

const overlay = document.getElementById("overlay");
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    mobileNav.style.transform = "translate(-50%, 0)";
    overlay.style.opacity = "0.5";
    menuOpen = true;
  } 
  else {
    mobileNav.style.transform = "translate(-50%, -150%)";
    overlay.style.opacity = "0";
    menuOpen = false;
  }
} );

overlay.addEventListener("click", () => {
  if (menuOpen) {
    mobileNav.style.transform = "translate(-50%, -150%)";
    overlay.style.opacity = "0";
    menuOpen = false;
  }
});
