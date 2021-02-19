// THIS SCRIPT IS FOR THE HOVER EFFECTS ON SOCIAL ICONS IN THE FOOTER

const colorChange = (id) => {
  document.getElementById(id).style.display = "none";
  document.getElementById(id + "-2").style.display = "unset";
};

const colorUnchange = (id) => {
  document.getElementById(id + "-2").style.display = "none";
  document.getElementById(id).style.display = "unset";
};
