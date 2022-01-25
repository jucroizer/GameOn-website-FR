function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modale event
closeBtn.addEventListener("click", closeModal);

function closeModal(){
  modalbg.style.display = "none";
}

// Récupération du nom et log
var nom = document.getElementById('last').value;
console.log(nom);
// Vérifier si le nom contient bien que des lettres et les espaces
const verif_nom = /^[a-zA-Zéī\ ]+$/;
if(verif_nom.test(nom)){
  console.log(true);
}else{
  console.log(false);
}
