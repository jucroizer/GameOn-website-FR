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


function validate(){

}
// Récupération du prenom et log
var prenom = document.getElementById('first').value;
console.log(prenom);
// Vérifier si le nom contient bien que des lettres et les espaces
  
// Récupération du nom et log
var nom = document.getElementById('last').value;
console.log(nom);
// Vérifier si le nom contient bien que des lettres et les espaces
const verif_nom = /^[a-zA-Zéī\ ]+$/;
if(verif_nom.test(nom)  && prenom.length >= 2){
  console.log(true);
}else{
  console.error('Nom trop court')
}

  

function getValue(){
    
  /**
   * Vérification du Prénom
   */
  let prenom = document.getElementById("first").value;
  const verif_prenom = /^[a-zA-Zéī\ ]+$/;

  if(verif_prenom.test(prenom) && prenom.length >= 2){
    error_first.style.display = "none";
    console.log(true);
  }else{
    error_first.style.display = "block";
  }

  /**
   * Vérification du Nom
   */
  // Récupération du nom et log
  let nom = document.getElementById('last').value;
  const verif_nom = /^[a-zA-Zéī\ ]+$/; // Vérifier si le nom contient bien que des lettres et les espaces

  if(verif_nom.test(nom)  && prenom.length >= 2){
    error_last.style.display = "none";
    console.log(true);
  }else{
    error_last.style.display = "block";
  }

  /**
   * Vérification de l'email
   */
  // Recuperation de l'email et log
  let email = document.getElementById('email').value;
  const verif_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // \w comprend toutes les lettres et underscores et comprend les - et les . Comprend en suivant le @ 
  
  if(verif_email.test(email)){
    error_email.style.display = "none";
    console.log(true);
  }else{
    error_email.style.display = "block";
    // console.error('Veuillez entrer une adresse email valide')
  }

  /**
   * Vérification du nombre de tournoi joués
   */
  let quantity = document.getElementById("quantity").value;
  if(quantity >= 0 && quantity <= 99){
    error_quantity.style.display = "none";
    console.log(true);
  }else{
    error_quantity.style.display = "block";
  }

  /**
   * Vérification de la date de naissance
   */

  let birthdate = document.getElementById('birthdate').value;
  console.log(birthdate);

  const day = new Date(birthdate).getDate();
  const month = new Date(birthdate).getMonth()+1;
  const year = new Date(birthdate).getFullYear();

  let thisMonth = new Date().getMonth()+1;
  let thisDay = new Date().getDate();
  let thisYear = new Date().getFullYear();

  console.log(thisDay + '/' + thisMonth + '/' + thisYear);
  console.log(day + '/' + month + '/' + year); 
  
  // is ok - pour ne pas aller dans le futur
  if(day > thisDay && month > thisMonth && year < thisYear){
    error_birthdate.style.display = "none";
    console.log(true);
  } else if(day > thisDay && month >= thisMonth && year >= thisYear){
    error_birthdate.style.display = "block";
    console.log(false);
  }

  // is ok - pour ne pas aller dans le futur
  if(month > thisMonth && year < thisYear){
    error_birthdate.style.display = "none";
    console.log(true);
  } else if (month > thisMonth && year >= thisYear) {
    error_birthdate.style.display = "block";
    console.log(false);
  }

  //is ok - pour ne pas aller dans le futur
  if(year > thisYear){
    error_birthdate.style.display = "block";
    console.log(false);
  } 

  /**
   * Vérification checkbox - localisation
   */
  let radio_input = document.getElementsByName('location');
  let error_location = document.getElementById('error_location');
  console.log(radio_input);

  for (var i = 0; i < radio_input.length; i++) {
    // do whatever you want with the checked radio
    if(radio_input[i].checked){
      error_location.style.display = "none";
      console.log(radio_input[i].value);
      break;
    }else{
      error_location.style.display = "block";
    }
    
  }
  
  
  
} 
