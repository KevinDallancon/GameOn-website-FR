function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.querySelector('form[name="reserve"]');
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const balisePrenom = document.getElementById('first');
const baliseNom = document.getElementById('last');
const baliseMail = document.getElementById('email');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// code pour fermer la modale 
closeModal.addEventListener('click', () => {
  modalbg.style.display = 'none';
})


function verifierChamp(balise) {
  // Vérifie d'abord si le champ est vide
  if (balise.value === "") {
    console.log("Le champ ne doit pas être vide");
    balise.classList.add('input-erreur');

  } 
  // Ensuite, vérifie si la longueur est inférieure à 2 caractères
  else if (balise.value.length < 2) {
    console.log("Le champ doit contenir au moins deux caractères pour être correct");
    balise.classList.add('input-erreur');
  } 
  // Si aucune des conditions ci-dessus n'est vraie, alors le champ est correctement rempli
  else {
    console.log("Le champ est bien rempli");
    balise.classList.remove('input-erreur');
  }
}

function verifierEmail(balise) {
  const regexMail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
  
  if ( regexMail.test(balise.value)) {
    console.log("Le champ est bien remplis");
    balise.classList.remove('input-erreur');
  } else {
    balise.classList.add('input-erreur');
    console.log("le champ est mal remplis");
  }
}

// Ajout d'un ecouteur d'évenement pour l'evenement Submit
form.addEventListener('submit', (event) => {
// On empeche le comportement par default
event.preventDefault();

verifierChamp(balisePrenom);
verifierChamp(baliseNom);
verifierEmail(baliseMail);

})

balisePrenom.addEventListener('change', () => {
  verifierChamp(balisePrenom);
})

baliseNom.addEventListener('change', () => {
  verifierChamp(baliseNom);
})

baliseMail.addEventListener('change', () => {
 verifierEmail(baliseMail);
})