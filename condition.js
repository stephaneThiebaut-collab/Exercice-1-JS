let age = 16;

if (age < 18) {
    console.log("Mineur");
}   else {
    console.log("Majeur");
}

// Utilisation de l'opérateur ternaire
let statut = (age < 18) ? "Mineur" : "Majeur";
console.log("Statut (opérateur ternaire):", statut);

// Vérification de la majorité avec une fonction
function verifierMajorite(age) {
    return age >= 18 ? "Majeur" : "Mineur";
}   
console.log("Statut (fonction):", verifierMajorite(age));

// Utilisation de switch pour afficher un message selon l'âge
switch (true) {
    case (age < 13):
        console.log("Enfant");
        break;
    case (age >= 13 && age < 18):
        console.log("Adolescent");      
        break;
    case (age >= 18 && age < 65):
        console.log("Adulte");
        break;
    default:
        console.log("Senior");
        break;
}

// Vérification de l'âge avec gestion des erreurs
try {
    if (typeof age !== 'number' || isNaN(age)) { 
        throw new Error("Âge invalide");
    } else if (age < 0) {
        throw new Error("Âge ne peut pas être négatif");
    }
    console.log("Âge valide:", age);
} catch (error) {
    console.error("Erreur:", error.message);
}

// Comparaison stricte et non stricte
let ageString = "16";
if (age == ageString) {
    console.log("Comparaison non stricte: Âge égal à la chaîne '16'");
}
if (age === ageString) {
    console.log("Comparaison stricte: Âge égal à la chaîne '16'");
} else {
    console.log("Comparaison stricte: Âge n'est pas égal à la chaîne '16'");
}

// Utilisation de l'opérateur logique AND et OR
let estEtudiant = true;
if (age < 18 && estEtudiant) {
    console.log("L'utilisateur est un étudiant mineur.");
}   else if (age >= 18 || !estEtudiant) {
    console.log("L'utilisateur est soit majeur, soit non étudiant.");
}   
// Vérification de l'appartenance à une tranche d'âge
if (age >= 13 && age <= 19) {
    console.log("L'utilisateur est un adolescent.");
}   else {
    console.log("L'utilisateur n'est pas un adolescent.");
}

// Utilisation de l'opérateur NOT
let aEteInvite = false;
if (!aEteInvite) {
    console.log("L'utilisateur n'a pas été invité.");
} else {
    console.log("L'utilisateur a été invité.");
}
// Vérification de l'âge avec opérateur ternaire et gestion des erreurs
try {
    let statutAge = (typeof age !== 'number' || isNaN(age)) ?   
        (() => { throw new Error("Âge invalide"); })() :
        (age < 0 ? (() => { throw new Error("Âge ne peut pas être négatif"); })() :
        (age < 18 ? "Mineur" : "Majeur"));  
    console.log("Statut de l'âge:", statutAge);
} catch (error) {
    console.error("Erreur:", error.message);
}

// verification de l'age avec elseif
if (age < 0) {
    console.log("Âge ne peut pas être négatif");
} else if (age < 18) {
    console.log("Mineur");
} else {
    console.log("Majeur");
}