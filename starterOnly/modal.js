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
const btn_submit = document.getElementById('submit');

// au click sur le bouton "C'est parti" on appelle la fonction submissionForm
btn_submit.addEventListener('click', submissionForm);

function submissionForm(){

  const modal_body = document.getElementById('modal_body');

  // Appels de toutes les fonctions de vérification
  check_prenom();
  check_nom();
  check_email();
  check_birthdate();
  check_quantity();
  check_location();
  check_condition();

  // vérification que tous les champs des formulaires sont true
  let countTrue = 0;

  for(let i = 0; i < verifTab.length; i++){
    console.log(verifTab[i]);
    if(verifTab[i] == true){
      countTrue++;
    }
  }
  
  if(countTrue == verifTab.length){
    const inscription = document.getElementById('inscription');

    // reset le formulaire d'inscription après inscription réussie
    document.getElementById('inscription').reset();
    // ferme la modal suite a la soumission du formulaire
    inscription.style.display = "none";
    // initialise le nouveau texte de la modal
    modal_body.innerHTML = '<div class="valid-inscription"><p class="valid-inscription-p">Merci pour votre inscription</p></div><input id="fermer" class="btn-submit button" type="submit" value="Fermer"/>';
    // rouvre la modal avec le mot de validation de l'inscription
    modal_body.style.display = "block";
    
  }else{
    // en cas d'erreur trouvé dans le formulaire on ne ferme pas la modale et on affiche les messages d'erreurs
    event.preventDefault();
    false;
  }

  // Ferme la modal après affichage du mot de validation d'inscription
  const fermerModal = document.getElementById('fermer');
  fermerModal.addEventListener("click", valideModal);

  function valideModal(){
    modalbg.style.display = "none";
  }
}

/**
*  Vérification du Prénom
*/
function check_prenom(){
    
    let prenom = document.getElementById("first").value;
    let error_first = document.getElementById('error_first');
    const verif_prenom = /^[a-zA-Zéī\ ]+$/; // ne prend en compte que les lettres et les espaces

    // si la regex du prénom est correct et que le prenom est supérieur ou égale à 2 caractères
    if(verif_prenom.test(prenom) && prenom.length >= 2){
      // je n'affiche pas d'erreur et j'incrémente à true verifTab pour la vérification
      error_first.style.display = "none";
      
      verifTab[0] = true;
    }else{
      // sinon j'affiche l'erreur et j'incrémente à false verifTab pour la vérification
      error_first.style.display = "block";
      document.getElementById('first').style.border = "solid 1px #FE142F";
      verifTab[0] = false;
    }
}
  
/**
  * Vérification du Nom
  */
function check_nom(){
  
  let nom = document.getElementById('last').value;
  let error_last = document.getElementById('error_last');
  const verif_nom = /^[a-zA-Zéī\ ]+$/; // Vérifier si le nom contient bien que des lettres et les espaces

   // si la regex du nom est correct et que le nom est supérieur ou égale à 2 caractères
  if(verif_nom.test(nom)  && nom.length >= 2){
    // je n'affiche pas d'erreur et j'incrémente à true verifTab pour la vérification
    error_last.style.display = "none";
    verifTab[1] = true;
  }else{
    // sinon j'affiche l'erreur et j'incrémente à false verifTab pour la vérification
    error_last.style.display = "block";
    document.getElementById('last').style.border = "solid 1px #FE142F";
    verifTab[1] = false;
  }
}

/**
  * Vérification de l'email
  */
function check_email(){
  
  let email = document.getElementById('email').value;
  let error_email = document.getElementById('error_email');

  const verif_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // \w comprend toutes les lettres et underscores et comprend les - et les . Comprend en suivant le @ 
  
  // si la regex du mail est correct
  if(verif_email.test(email)){
    // je n'affiche pas d'erreur et j'incrémente à true verifTab pour la vérification
    error_email.style.display = "none";
    verifTab[2] = true;
  }else{
    // sinon j'affiche l'erreur et j'incrémente à false verifTab pour la vérification
    error_email.style.display = "block";
    document.getElementById('email').style.border = "solid 1px #FE142F";
    verifTab[2] = false;
  }
}

/**
  * Vérification de la date de naissance
  */
function check_birthdate(){
  
   let birthdate = document.getElementById('birthdate').value;
   let error_birthdate = document.getElementById('error_birthdate');
 
   // récupération de la date entrée par l'utilisateur
   const day = new Date(birthdate).getDate();
   const month = new Date(birthdate).getMonth()+1;
   const year = new Date(birthdate).getFullYear();
   let inputBirthdate = new Date (year, month, day).getTime();
 
   // récupération de la date du jour
   let thisMonth = new Date().getMonth()+1;
   let thisDay = new Date().getDate();
   let thisYear = new Date().getFullYear();
   let now = new Date (thisYear, thisMonth, thisDay).getTime();

   // si la date actuelle moins la date entrée est supérieur ou égale à 0 
   if((now - inputBirthdate) >= 0){
     // je n'affiche pas d'erreur et j'incrémente à true verifTab pour la vérification
    error_birthdate.style.display = "none";
    verifTab[3] = true;
   }else{
     // sinon j'affiche l'erreur et j'incrémente à false verifTab pour la vérification
     error_birthdate.style.display = "block";
     document.getElementById('birthdate').style.border = "solid 1px #FE142F";
     verifTab[3] = false;
   }
}

/**
  * Vérification du nombre de tournoi joués
  */
function check_quantity(){
  
   let quantity = document.getElementById("quantity").value;
   let error_quantity = document.getElementById('error_quantity');

   // si le nombre de tournoi est conpris entre 0 et 99 et qu'il n'est pas null
   if(quantity >= 0 && quantity <= 99 && quantity != ''){
    // je n'affiche pas d'erreur et j'incrémente à true verifTab pour la vérification
     error_quantity.style.display = "none";
     verifTab[4] = true;
   }else{
     // sinon j'affiche l'erreur et j'incrémente à false verifTab pour la vérification
    error_quantity.style.display = "block";
    document.getElementById('quantity').style.border = "solid 1px #FE142F";
    verifTab[4] = false;
   }
}

 /**
  * Vérification checkbox - localisation
  */
function check_location(){
 
  let radio_input = document.getElementsByName('location');
  let error_location = document.getElementById('error_location');
  
  // pour chaque radio bouton je vérifie 
   for (let i = 0; i < radio_input.length; i++) {

    // si un radio bouton est selectionné
     if(radio_input[i].checked){
       // je n'affiche pas d'erreur et j'incrémente à true verifTab pour la vérification
       error_location.style.display = "none";
       verifTab[5] = true;
       // je stop la boucle ici
       break;
     }else{
       // sinon j'affiche l'erreur et j'incrémente à false verifTab pour la vérification
       error_location.style.display = "block";
       verifTab[5] = false;
     }
   }
}

function check_condition(){
  /**
   * Vérificcation checkbox - conditions générales
   */
   let condition_input = document.getElementById('checkbox1');
   let error_condition = document.getElementById('error_checkbox');
 
   // si ma checkbox est sélectionnée 
   if(condition_input.checked){
      // je n'affiche pas d'erreur et j'incrémente à true verifTab pour la vérification
     error_condition.style.display = "none";
     verifTab[6] = true;
   }else{
     // sinon j'affiche l'erreur et j'incrémente à false verifTab pour la vérification
     error_condition.style.display = "block";
     verifTab[6] = false;
   }
}