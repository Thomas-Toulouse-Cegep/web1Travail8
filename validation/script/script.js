window.onload = InitialiserEvenements;
let prenom
let nom
let naissance = document.getElementById("naissance")
let ville = document.getElementById("ville")
let courriel

function InitialiserEvenements() {

    document.getElementById("envoyer").addEventListener("click", Valider);
    //. action = "pag2.html" permet de 	quand on clique sur envoyer on vas à la page
    document.getElementById("inscription").addEventListener("submit", Gardervaleur)
        //  événement blur se produit lorsqu'un champ perd le focus
        // on utilise cet événement pour utiliser les valeurs au fur et à mesure qu'elles sont inscrites
    document.getElementById("inscription").action = "page2.html"
    console.log()
    champs = document.querySelectorAll("input");
    for (i = 0; i < champs.length; i++) {
        champs[i].addEventListener("blur", Afficher);
    }
    document.getElementById("ville").addEventListener("blur", Afficher);
}

function Valider() {
    ValiderNomPrenom();
    ValiderCourriel();
    ValiderNombre();
}

//https://www.w3schools.com/js/js_validation_api.asp
function ValiderNomPrenom() {
    //.validity: vérifie les types et attributs de validation
    var erreur = false;
    nom = document.getElementById("nom");
    prenom = document.getElementById("prenom");
    //validity.valueMissing: vérifie la présence d'une valeur lorsque 'required' est indiqué comme attribut dans la balise
    if (nom.validity.valueMissing) {
        erreur = true;
    }
    MettreEnFormeLeChamp(nom, erreur);

    erreur = false;
    if (prenom.validity.valueMissing) {
        erreur = true;
    }
    MettreEnFormeLeChamp(prenom, erreur);
}

function ValiderCourriel() {
    courriel = document.getElementById("email");
    var erreur = false;
    if (courriel.validity.valueMissing || email.validity.typeMismactch) {
        erreur = true;
    }
    //validity.typeMismatch permet de vérifier si le format de la valeur inscrite correspond au type indiqué (email, date, ...)
    //si on veut qu'un courriel soit entré de façon obligatoire il faut AUSSI utiliser le required


    MettreEnFormeLeChamp(email, erreur);
}

function ValiderNombre() {
    var nombre = document.getElementById("nombre");
    var erreur = false;
    if (nombre.validity.rangeOverflow || nombre.validity.rangeUnderflow) {
        erreur = true;
    }
    //validity.rangeOverflow permet de vérifier si la valeur est plus grande que le max indiqué
    //et validity.rangeUnderflow permet de vérifier si la valeur est plus petite que le min indiqué



    MettreEnFormeLeChamp(nombre, erreur);
}

// .classList permet d'accéder à toutes les classes associées à un élément
// .classList.add permet donc d'ajouter une classe à un élément sans enlever les autres classes
// .classList.remove permet de dissocier un élément html d'une classe
function MettreEnFormeLeChamp(champAMettreEnForme, erreur) {
    if (erreur == true) {
        champAMettreEnForme.classList.add("erreur");
        champAMettreEnForme.classList.remove("valide");
    } else {
        champAMettreEnForme.classList.remove("erreur");
        champAMettreEnForme.classList.add("valide");
    }
}
let items = {};
/* Affiche les valeurs inscrites par l'usager dans le textarea */
function Afficher() {
    /*items[this.id] = this.value
    var resume = document.getElementById("resume");
    for(let i in items){
    	resume.value = ""
    	resume.value +=i + " = "  + items[i]
    }*/
    courriel = "Couriel: " + document.getElementById("email").value;
    prenom = "Prénom: " + document.getElementById("prenom").value;
    nom = "Nom: " + document.getElementById("nom").value;
    naissance = document.getElementById("naissance").value;
    ville = document.getElementById("ville").value;
    let resume = document.getElementById("resume");
    resume.value = prenom + "\n" + nom + "\n" + ville + "\n" + naissance + "\n" + courriel;
    /* l'ajout de <br> ne fonctionne pas dans un textarea */
    /* on utilise plutôt le code "\n" qui fait un retour à la ligne*/


    MettreEnFormeCasesACocher();
}

function MettreEnFormeCasesACocher() {
    var choix = document.querySelectorAll("input[type='checkbox']");
    var i = 0;
    var selecteur = "";

    for (i = 0; i < choix.length; i++) {
        //classList.add
        //on veut utiliser le label qui suit le checkbox
        //et obtenir un sélecteur sous la forme: #choix1 + label
        selecteur = "#" + choix[i].id;
        console.log(choix[i].checked)
            //"#choix1 + label"
        selecteur = selecteur + " + label";


        let choixlabel = document.querySelector(selecteur)
        console.log(choixlabel)
        if (choix[i].checked) {

            choixlabel.classList.add("choisi");
            choixlabel.classList.remove("nonChoisi");
        } else {
            choixlabel.classList.remove("choisi");
            choixlabel.classList.add("nonChoisi");
        }


    }

}

function Gardervaleur() {
    localStorage.setItem(prenom.id, prenom.value);
    localStorage.setItem(nom.id, nom.value);
    localStorage.setItem("naissance", naissance);
    localStorage.setItem("ville", ville);
    localStorage.setItem(courriel.id, courriel.value);
}