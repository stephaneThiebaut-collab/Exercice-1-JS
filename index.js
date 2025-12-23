// Application console stockage variable constante et boolean

let userName = "JohnDoe"; // Variable de type string
let age = 30; // Variable de type number
let ville = "Nice"; // Variable de type string
let Admin = false; // Variable de type boolean
const PI = 3.14159; // Constante de type number

console.log("Nom d'utilisateur:", userName);
console.log("Âge:", age);
console.log("Est administrateur:", Admin);
console.log("Ville:", ville);
console.log("Valeur de PI:", PI);


// Conversion d'un nombre en string
    try {
        let ageAsString = age.toString();
        console.log("Âge en string:", ageAsString);
    } catch (error) {
        console.error("Erreur lors de la conversion:", error);
    }

// Conversion d'une string en nombre
    try {
        let ageAsNumber = parseInt("42"); // Cela renverra NaN car "JohnDoe" n'est pas un nombre
        console.log("Nom d'utilisateur en nombre:", ageAsNumber);
        if (isNaN(ageAsNumber)) {
            throw new Error("La conversion a échoué: la chaîne n'est pas un nombre valide.");
        }
    } catch (error) {
        console.error("Erreur lors de la conversion:", error);
    }