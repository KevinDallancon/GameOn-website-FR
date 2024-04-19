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



function verifierPrenomNom(balise) {

// Définition du RegExp
let nameRegExp = new RegExp('^[A-Za-z-]{2,30}$', 'g');
// Test du RegExp
let testName = nameRegExp.test(balise.value);
// Résultat conditionnel
if (testName) {
  balise.nextElementSibling.innerText = "Champ valide.";
  balise.nextElementSibling.style.color = "green";
  return true;
} else {
  balise.nextElementSibling.innerText = "Champ vide ou incorrect.";
  balise.nextElementSibling.style.color = "red";
  return false;
};
}

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
    balise.nextElementSibling.innerText = "Champ vide ou incorrect.";
    balise.nextElementSibling.style.color = "red";
    return false;
  }
}
// function verifierBirthdate(balise) {

//   const formDataParent = balise.closest('.formData');
//   const dateFormat = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
//   // Vérifie si une date a été entrée
//   if (!balise.value) {
//     formDataParent.dataset.error = "Veuillez entrer votre date de naissance.";
//     formDataParent.dataset.errorVisible = "true";
//   } else if (!dateFormat.test(balise.value)) {
//     formDataParent.dataset.error = "Cette date de naissance semble incorrecte. Assurez-vous d'utiliser le format JJ/MM/AAAA";
//     formDataParent.dataset.errorVisible = "true";
//   } else {
//     formDataParent.dataset.error = "";
//     formDataParent.dataset.errorVisible = "false";
//   }

// }

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

function verifierRadio(balise) {

  let etatBtn = false;
  let errorElement = document.getElementById('error-radio'); 
  console.log(errorElement);

  for (let radio of balise) {
    if (radio.checked) {
      console.log(radio);
      etatBtn = true;
      break;
    }
  };

  if (etatBtn) {
    console.log(etatBtn);
    errorElement.innerText = "Champ valide.";
    errorElement.style.color = "green";
    return true;
  } else {
    errorElement.innerText = "Champ vide ou incorrect.";
    errorElement.style.color = "red";
    return false;
  }
}
function verifierCg(balise) {

  if (balise.checked)
  {
    balise.nextElementSibling.innerText = "Champ valide.";
    balise.nextElementSibling.style.color = "green";
    return true;
  } else {
    balise.nextElementSibling.innerText = "Champ vide ou incorrect.";
    balise.nextElementSibling.style.color = "red";
    return false;
  }
}

// Ajout d'un ecouteur d'évenement pour l'evenement Submit
form.addEventListener('submit', (event) => {

  function validate() {
    try {
      // On empeche le comportement par default
      event.preventDefault();
  
      const balisePrenom = document.getElementById('first');
      verifierPrenomNom(balisePrenom);
  
      const baliseNom = document.getElementById('last');
      verifierPrenomNom(baliseNom);
  
      const baliseMail = document.getElementById('email');
      verifierEmail(baliseMail);
  
      // const balisebirthdate = document.getElementById('birthdate');
      // verifierBirthdate(balisebirthdate);
  
      const baliseTournois = document.getElementById('quantity');
      verifierChampNum(baliseTournois);
  
      const baliseRadio = document.querySelectorAll('input[type="radio"]');
      verifierRadio(baliseRadio);
  
      const baliseCg = document.getElementById('checkbox1');
      verifierCg(baliseCg);
  
  
    } catch (error) {
      console.log("Une erreur est survenue : " + error.message);
    }
  
  }
  validate()

})
