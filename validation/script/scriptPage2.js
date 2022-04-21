window.onload = InitialiserEvenements;
//sert a initialiser le storage
let prenom = localStorage.getItem("prenom");
let nom = localStorage.getItem("nom");
let naissance = localStorage.getItem("naissance");
let ville = localStorage.getItem("ville");
let courriel = localStorage.getItem("email");
//sert à initialiser les inputs

function InitialiserEvenements() {
    document.getElementById("annuler").addEventListener("click", Annuler);

    RecupererEtAfficher();
}

function RecupererEtAfficher() {
    //sert à initialiser les inputs    
    let prenomInput = document.getElementById("prenom");
    let nomInput = document.getElementById("nom");
    let naissanceInput = document.getElementById("naissance");
    let villeInput = document.getElementById("ville");
    let courrielInput = document.getElementById("email");


    //empêche d'écrire dans les inputs
    prenomInput.readOnly = true;
    nomInput.readOnly = true;
    naissanceInput.readOnly = true;
    villeInput.readOnly = true;
    courrielInput.readOnly = true;
    // mets les valeurs de localStorage dans les inputs
    prenomInput.value = prenom;
    nomInput.value = nom;
    naissanceInput.value = naissance;
    villeInput.value = ville;
    courrielInput.value = courriel;
    // obliger le user à s'inscrire
    if (nom == null || prenom == 0 || courriel == 0) {
        document.getElementById("message").style.display = "block";
        document.getElementById("suiteInscription").style.display = "none";
    } else {
        document.getElementById("message").style.display = "none";
        document.getElementById("suiteInscription").style.display = "block";

    }
}

function Annuler() {
    //nettoye le localStorage
    localStorage.clear();

}