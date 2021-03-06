// THIS SCRIPT IS FOR THE FUNCTIONALITY OF HAMBURGER MENU

const container = document.getElementById("container");
const hamburger = document.getElementById("hamburger");


const overlay = document.getElementById("overlay");
const mobileNav = document.getElementById("mobile-nav");
const hamburgerLinks = document.getElementsByClassName("mobile-nav-links");

let menuOpen = false;

container.addEventListener("click", () => {
  
  if (!menuOpen) {
    mobileNav.style.transform = "translate(-50%, 0)";
    overlay.style.opacity = "0.5";
    overlay.style.pointerEvents = "unset";
    menuOpen = true;
  } 
  else {
    mobileNav.style.transform = "translate(-50%, -150%)";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    menuOpen = false;
  }
  hamburger.classList.toggle("cross");
});

overlay.addEventListener("click", () => {
  if (menuOpen) {
    mobileNav.style.transform = "translate(-50%, -150%)";
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    hamburger.classList.toggle("cross");
    menuOpen = false;
  }
});

for (let i=0; i<hamburgerLinks.length; i++) {
  hamburgerLinks[i].addEventListener("click", () => {
    if (menuOpen) {
      mobileNav.style.transform = "translate(-50%, -150%)";
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      hamburger.classList.toggle("cross");
      menuOpen = false;
    }
  });
}
