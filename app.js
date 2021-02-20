// THIS SCRIPT IS FOR THE HOVER EFFECTS ON SOCIAL ICONS IN THE FOOTER

const colorChange = (id) => {
  document.getElementById(id).style.display = "none";
  document.getElementById(id + "-2").style.display = "unset";
};

const colorUnchange = (id) => {
  document.getElementById(id + "-2").style.display = "none";
  document.getElementById(id).style.display = "unset";
};

// THIS SCRIPT IS FOR THE FUNCTIONALITY OF HAMBURGER

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
let menuOpen = false;

hamburger.addEventListener("click", () => {
  mobileNav.style.transform = !menuOpen
    ? "translate(-50%, 0)"
    : "translate(-50%, -150%)";
  menuOpen = !menuOpen ? true : false;
});
