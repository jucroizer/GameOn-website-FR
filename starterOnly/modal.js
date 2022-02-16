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


/**
 * Conditions de vérification pour la modal
 */

// Tableau de booleens pour la vérification
let verifTab = [];
console.log(verifTab);
const btn_submit = document.getElementById('submit');

btn_submit.addEventListener('click', submissionForm);

function submissionForm(){
    
  check_prenom();
  check_nom();
  check_email();
  check_birthdate();
  check_quantity();
  check_location();
  check_condition();

  let countTrue = 0;

  for(let i = 0; i < verifTab.length; i++){
    console.log(verifTab[i]);
    if(verifTab[i] == true){
      countTrue++;
    }
  }

  if(countTrue == verifTab.length){
    document.getElementById('inscription').reset();
  }else{
    event.preventDefault();
    false;
  }
} 
// console.log(submissionForm());

function check_prenom(){
    /**
    * Vérification du Prénom
    */
    let prenom = document.getElementById("first").value;
    let error_first = document.getElementById('error_first');
    const verif_prenom = /^[a-zA-Zéī\ ]+$/;

    if(verif_prenom.test(prenom) && prenom.length >= 2){
      error_first.style.display = "none";
      console.log(true);
      verifTab[0] = true;
    }else{
      error_first.style.display = "block";
      console.log(false);
      verifTab[0] = false;
    }
    console.log('Le prénom est il true ou false ?' + verifTab[0]);
}
  
function check_nom(){
  /**
   * Vérification du Nom
   */
  // Récupération du nom et log
  let nom = document.getElementById('last').value;
  let error_last = document.getElementById('error_last');
  const verif_nom = /^[a-zA-Zéī\ ]+$/; // Vérifier si le nom contient bien que des lettres et les espaces

  if(verif_nom.test(nom)  && nom.length >= 2){
    error_last.style.display = "none";
    console.log(true);
    verifTab[1] = true;
  }else{
    error_last.style.display = "block";
    console.log(false);
    verifTab[1] = false;
  }
  console.log('Le nom est il true ou false ?' + verifTab[1]);
}

function check_email(){
  /**
   * Vérification de l'email
   */
  // Recuperation de l'email et log
  let email = document.getElementById('email').value;
  let error_email = document.getElementById('error_email');

  const verif_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // \w comprend toutes les lettres et underscores et comprend les - et les . Comprend en suivant le @ 
  
  if(verif_email.test(email)){
    error_email.style.display = "none";
    console.log(true);
    verifTab[2] = true;
  }else{
    error_email.style.display = "block";
    console.log(false);
    verifTab[2] = false;
    // console.error('Veuillez entrer une adresse email valide')
  }
  console.log('L\'email est il true ou false ?' + verifTab[2]);
}

function check_birthdate(){
  /**
   * Vérification de la date de naissance
   */

   let birthdate = document.getElementById('birthdate').value;
   let error_birthdate = document.getElementById('error_birthdate');
  //  console.log(birthdate);
  //  console.log(birthdate.length);
 
   const day = new Date(birthdate).getDate();
   const month = new Date(birthdate).getMonth()+1;
   const year = new Date(birthdate).getFullYear();
   let inputBirthdate = new Date (year, month, day).getTime();
 
   let thisMonth = new Date().getMonth()+1;
   let thisDay = new Date().getDate();
   let thisYear = new Date().getFullYear();
   let now = new Date (thisYear, thisMonth, thisDay).getTime();

   if((now - inputBirthdate) >= 0){
    error_birthdate.style.display = "none";
    console.log((now - inputBirthdate) >= 0);
    verifTab[3] = true;
   }else{
     error_birthdate.style.display = "block";
     console.log(false);
     verifTab[3] = false;
   }

   console.log('La date de naissance est elle true ou false ?' + verifTab[3]);
  //  console.log(thisDay + '/' + thisMonth + '/' + thisYear);
  //  console.log(day + '/' + month + '/' + year); 
  //  if(!birthdate.length > 0){
  //   error_birthdate.style.display = "block";
  //   console.log(false);
  //  }else{
  //     // is ok - pour ne pas aller dans le futur
  //     if(day > thisDay && month > thisMonth && year < thisYear){
  //       error_birthdate.style.display = "none";
  //       console.log(true);
  //     } else if(day > thisDay && month >= thisMonth && year >= thisYear){
  //       error_birthdate.style.display = "block";
  //       console.log(false);
  //     }
    
  //     // is ok - pour ne pas aller dans le futur
  //     if(month > thisMonth && year < thisYear){
  //       error_birthdate.style.display = "none";
  //       console.log(true);
  //     } else if (month > thisMonth && year >= thisYear) {
  //       error_birthdate.style.display = "block";
  //       console.log(false);
  //     }
    
  //     //is ok - pour ne pas aller dans le futur
  //     if(year > thisYear){
  //       error_birthdate.style.display = "block";
  //       console.log(false);
  //     }
  //  }
 
}

function check_quantity(){
  /**
   * Vérification du nombre de tournoi joués
   */
   let quantity = document.getElementById("quantity").value;
   let error_quantity = document.getElementById('error_quantity');
   console.log(quantity.length);
   console.log(typeof quantity);
   console.log(quantity);

   if(quantity >= 0 && quantity <= 99 && quantity != ''){
     error_quantity.style.display = "none";
     console.log(true);
     verifTab[4] = true;
   }else{
    error_quantity.style.display = "block";
    console.log(false);
    verifTab[4] = false;
   }
   console.log('Le nombre de tournoi est il true ou false ?' + verifTab[4]);
}

function check_location(){
  /**
   * Vérification checkbox - localisation
   */
   let radio_input = document.getElementsByName('location');
   let error_location = document.getElementById('error_location');
  //  console.log(radio_input);
 
   for (var i = 0; i < radio_input.length; i++) {
     // do whatever you want with the checked radio
     if(radio_input[i].checked){
       error_location.style.display = "none";
       console.log(true);
      //  console.log(radio_input[i].value);
       verifTab[5] = true;
       break;
     }else{
       error_location.style.display = "block";
      //  console.log(radio_input[i].value);
       console.log(false);
       verifTab[5] = false;
     }
   }
   console.log('La localisation du tournoi est elle true ou false ?' + verifTab[5]);
}

function check_condition(){
  /**
   * Vérificcation checkbox - conditions générales
   */
   let condition_input = document.getElementById('checkbox1');
   let error_condition = document.getElementById('error_checkbox');
 
   if(condition_input.checked){
     error_condition.style.display = "none";
     verifTab[6] = true;
     console.log(true);
   }else{
     error_condition.style.display = "block";
     console.log(false);
     verifTab[6] = false;
   }
   console.log('La condition est elle true ou false ?' + verifTab[6]);
}

console.log(verifTab);