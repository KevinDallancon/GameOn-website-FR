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

// Fonction pour valider les prénoms et les noms avec une expression régulière
function verifierPrenomNom(balise) {

// Définition du RegExp
let nameRegExp = new RegExp('^[A-Za-z-]{2,30}$');
// Test du RegExp
let testName = nameRegExp.test(balise.value);
// Résultat conditionnel
if (testName) {
  balise.nextElementSibling.innerText = "Champ valide.";
  balise.nextElementSibling.style.color = "green";
  return true;
} else {
  balise.nextElementSibling.innerText = "Veuillez entrer 2 caractères ou plus dans ce champ.";
  balise.nextElementSibling.style.color = "red";
  return false;
};
}
// Fonction pour valider les adresses e-mail
function verifierEmail(balise) {
  
  // Définition du regexMail
  let regexMail = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
  // Test du regexMail
  let testMail = regexMail.test(balise.value)

  if (testMail) {
    balise.nextElementSibling.innerText = "Champ valide.";
    balise.nextElementSibling.style.color = "green";
    return true;
  } else {
    balise.nextElementSibling.innerText = "Champ vide ou adresse mail incorrect.";
    balise.nextElementSibling.style.color = "red";
    return false;
  }
}
// Fonction pour valider la date de naissance
function verifierBirthdate(balise) {
  // Expression régulière pour valider le format de la date (JJ/MM/AAAA)
  const dateRegex = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;


  if (!dateRegex.test(balise.value)) {
    balise.nextElementSibling.innerText = "Vous devez entrer votre date de naissance.";
    balise.nextElementSibling.style.color = "red";
    return false;
  } else {
    balise.nextElementSibling.innerText = "Champ valide.";
    balise.nextElementSibling.style.color = "green";
    return true;
  }
}
// Fonction pour valider des champs numériques
function verifierChampNum(balise) {

  // Expression régulière qui accepte uniquement des chiffres
  let regexChampNum = /^\d+$/;
  // Test du regex
  let testRegexChamp = regexChampNum.test(balise.value);

  if (testRegexChamp) {
    balise.nextElementSibling.innerText = "Champ valide.";
    balise.nextElementSibling.style.color = "green";
    return true;
  } else {
    balise.nextElementSibling.innerText = "Champ vide ou incorrect.";
    balise.nextElementSibling.style.color = "red";
    return false;
  }
}
// Fonction pour valider la sélection d'une option radio
function verifierRadio(balise) {

  let etatBtn = false;
  const errorElement = document.getElementById('error-radio');
  
  for (let radio of balise) {
    if (radio.checked) {
      etatBtn = true;
      break;
    }
  };

  if (etatBtn) {
    errorElement.innerText = "Champ valide.";
    errorElement.style.color = "green";
    return true;
  } else {
    errorElement.innerText = "Vous devez choisir une option.";
    errorElement.style.color = "red";
    return false;
  }
}

// Fonction pour valider l'acceptation des conditions générales
function verifierCg(balise) {

const errorElementTwo = document.getElementById('error-radio2'); 

  if (balise.checked)
  {
    errorElementTwo.innerText = "Champ valide.";
    errorElementTwo.style.color = "green";
    return true;
  } else {
    errorElementTwo.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorElementTwo.style.color = "red";
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function() {

  const form = document.querySelector('form[name="reserve"]');
  const balisePrenom = document.getElementById('first');
  const baliseNom = document.getElementById('last');
  const baliseMail = document.getElementById('email');
  const balisebirthdate = document.getElementById('birthdate');
  const baliseTournois = document.getElementById('quantity');
  const baliseRadio = document.querySelectorAll('input[type="radio"]');
  const baliseCg = document.getElementById('checkbox1');

  // Attacher les écouteurs d'événements pour la validation en temps réel
  balisePrenom.addEventListener('change', () => verifierPrenomNom(balisePrenom));
  baliseNom.addEventListener('change', () => verifierPrenomNom(baliseNom));
  baliseMail.addEventListener('change', () => verifierEmail(baliseMail));
  balisebirthdate.addEventListener('change', () => verifierBirthdate(balisebirthdate));
  baliseTournois.addEventListener('change', () => verifierChampNum(baliseTournois));
 
  // Écouteur pour la soumission du formulaire
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    function ctrlForm() {
      // Appel des fonctions de validation
      const isValid = verifierPrenomNom(balisePrenom) &&
                      verifierPrenomNom(baliseNom) &&
                      verifierEmail(baliseMail) &&
                      verifierBirthdate(balisebirthdate) &&
                      verifierChampNum(baliseTournois) &&
                      verifierRadio(baliseRadio) &&
                      verifierCg(baliseCg);
  
      // Validation finale du formulaire
      if (isValid) {
        const baliseModalBody = document.querySelector(".modal-body")
        baliseModalBody.innerText = "Merci ! Votre réservation a été reçue."
        baliseModalBody.style.color = "green";

      } else {
        console.log("La validation n'est pas correcte");
      }
    }
    ctrlForm();
  });

});

// // Ajout d'un ecouteur d'évenement pour l'evenement Submit
// form.addEventListener('submit', (event) => {
// // On empeche le comportement par default
// event.preventDefault();

// function ctrlForm() {

//     // Test
//   const balisePrenom = document.getElementById('first');
//   const baliseNom = document.getElementById('last');
//   const baliseMail = document.getElementById('email');
//   const balisebirthdate = document.getElementById('birthdate');
//   const baliseTournois = document.getElementById('quantity');
//   const baliseRadio = document.querySelectorAll('input[type="radio"]');
//   const baliseCg = document.getElementById('checkbox1');


//   // Appel des fonctions de validation
//   const isValid = verifierPrenomNom(balisePrenom) &&
//                   verifierPrenomNom(baliseNom) &&
//                   verifierEmail(baliseMail) &&
//                   verifierBirthdate(balisebirthdate) &&
//                   verifierChampNum(baliseTournois) &&
//                   verifierRadio(baliseRadio) &&
//                   verifierCg(baliseCg);

//   // Validation finale du formulaire
//   if (isValid) {
//     console.log("La validation est réussie");
//     // Code pour traiter les données du formulaire
//   } else {
//     console.log("La validation n'est pas correcte");
//   }
  
// }
// ctrlForm();
// });
