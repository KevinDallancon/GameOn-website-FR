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
  const formDataParent = balise.closest('.formData');

  if (balise.value === "") {
    formDataParent.dataset.error = "Le champ ne doit pas être vide";
    formDataParent.dataset.errorVisible = "true";
  } else if (balise.value.length < 2) {
    formDataParent.dataset.error = "Le champ doit contenir au moins deux caractères";
    formDataParent.dataset.errorVisible = "true";
  } else {
    formDataParent.dataset.error = "";
    formDataParent.dataset.errorVisible = "false";
  }
}

function verifierEmail(balise) {
  const formDataParent = balise.closest('.formData');

  const regexMail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

  if ( regexMail.test(balise.value)) {
    formDataParent.dataset.error = "";
    formDataParent.dataset.errorVisible = "false";
    
  } else {
    
    formDataParent.dataset.error = "Veuillez entrer une adresse email valide.";
    formDataParent.dataset.errorVisible = "true";
  }
}
function verifierBirthdate(balise) {
  
  const formDataParent = balise.closest('.formData');
  // Vérifie si une date a été entrée
  if (!balise.value) {
    formDataParent.dataset.error = "Veuillez entrer votre date de naissance.";
    formDataParent.dataset.errorVisible = "true";
  } else {
    formDataParent.dataset.error = "";
    formDataParent.dataset.errorVisible = "false";
  }

}


function verifierChampNum(balise) {

  const formDataParent = balise.closest('.formData');
  // Expression régulière qui accepte uniquement des chiffres
  const regex = /^\d+$/;

  if (regex.test(balise.value)) {
    formDataParent.dataset.error = "";
    formDataParent.dataset.errorVisible = "false";
  } else {
    formDataParent.dataset.error = "Veuillez entrer un nombre valide. Par exemple, 0, 1, 2, etc. ";
    formDataParent.dataset.errorVisible = "true";
  }
}

function verifierRadio(balise) {

  const formDataParent = balise[0].closest('.formData');
  let etatBtn = false;
  
  for (let radio of balise) {
    if (radio.checked) {
      etatBtn = true;
      break;
    }
  }

  if (etatBtn) {
    formDataParent.dataset.error = "";
    formDataParent.dataset.errorVisible = "false";
  } else {
    formDataParent.dataset.error = "Vous devez choisir une option.";
    formDataParent.dataset.errorVisible = "true";
  }
}
function verifierCg(balise) {

  const formDataParent = balise.closest('.formData');

  if (balise.checked)
  {
    formDataParent.dataset.error = "";
    formDataParent.dataset.errorVisible = "false";
  } else {
    formDataParent.dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions.";
    formDataParent.dataset.errorVisible = "true";
  }
}

// Ajout d'un ecouteur d'évenement pour l'evenement Submit
form.addEventListener('submit', (event) => {

  try {
    // On empeche le comportement par default
    event.preventDefault();

    const balisePrenom = document.getElementById('first');
    verifierChamp(balisePrenom);

    const baliseNom = document.getElementById('last');
    verifierChamp(baliseNom);

    const baliseMail = document.getElementById('email');
    verifierEmail(baliseMail);

    const balisebirthdate = document.getElementById('birthdate');
    verifierBirthdate(balisebirthdate);

    const baliseTournois = document.getElementById('quantity');
    verifierChampNum(baliseTournois);

    const baliseRadio = document.querySelectorAll('input[type="radio"]');
    verifierRadio(baliseRadio);

    const baliseCg = document.getElementById('checkbox1');
    verifierCg(baliseCg);

  } catch (error) {
    console.log("Une erreur est survenue : " + error.message);
  }


})
