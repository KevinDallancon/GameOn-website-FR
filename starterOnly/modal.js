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
const baliseTournois = document.getElementById('quantity');
const baliseRadio = document.querySelectorAll('input[type="radio"]');
const baliseCg = document.getElementById('checkbox1');


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
  } 
  // Ensuite, vérifie si la longueur est inférieure à 2 caractères
  else if (balise.value.length < 2) {
    console.log("Le champ doit contenir au moins deux caractères pour être correct");
  } 
  // Si aucune des conditions ci-dessus n'est vraie, alors le champ est correctement rempli
  else {
    console.log("Le champ est bien rempli");
  }
}


function verifierEmail(balise) {
  const regexMail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

  if ( regexMail.test(balise.value)) {
    console.log("Le champ est bien remplis");
    
  } else {
    console.log("le champ est mal remplis");
  }
}

function verifierChampNum(balise) {
// Expression régulière qui accepte uniquement des chiffres
const regex = /^\d+$/;

if (regex.test(balise.value)) {
    console.log("La valeur est numérique");
} else {
    console.log("La valeur n'est pas numérique");
}
}

function verifierRadio(balise) {

  let etatBtn = false;

  for (let radio of balise) {
    if (radio.checked) {
      etatBtn = true;
      break;
    }
  }

  if (etatBtn) 
    {console.log("Au moins une option est sélectionnée.");
  } else {
    console.log("Aucune option n'est sélectionnée.");
  }
}
function verifierCg(balise) {

  if (balise.checked)
  {
    console.log("Les conditions générales sont acceptées.");
  } else {
    console.log("Les conditions générales doivent être acceptées.");
  }
}

// Ajout d'un ecouteur d'évenement pour l'evenement Submit
form.addEventListener('submit', (event) => {
// On empeche le comportement par default
event.preventDefault();

verifierChamp(balisePrenom);
verifierChamp(baliseNom);
verifierEmail(baliseMail);
verifierChampNum(baliseTournois);
verifierRadio(baliseRadio);
verifierCg(baliseCg);
})
