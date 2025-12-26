// creation fonction simple Hello World

function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();

// fonction avec parametre
function greetUser(name) {
    console.log("Bonjour, " + name + "!");
}
greetUser("Alice");

// fonction avec retour de valeur 

function additions (a, b) {
    return a + b;
}
let sum = additions(5, 10);
console.log("La somme de 5 et 10 est:", sum);

// fonction avec condition 

function IsMajeur(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let ageUser = 17;
if (IsMajeur(ageUser)) {
    console.log("L'utilisateur est majeur.");
} else {
    console.log("L'utilisateur est mineur.");
}

// fonction formate phrase

function presentation(nom, age, ville) {
    return "Je m'appelle " + nom + ", j'ai " + age + " ans et je vis à " + ville + ".";
}
let phrase = presentation("Stephane", 31, "Nice");
console.log(phrase);

// -------------------------------------------------------------------------------------//

// Fonction qui traite un tableau

let nombres = [1, 2, 3, 4, 5];

function nbrElementArray(arr) {
    return arr.length;
};

let nbrElement = nbrElementArray(nombres);
console.log("Nombre d'éléments dans le tableau:", nbrElement);

// Fonction qui retourne les nombres positifs d'un tableau
function getPossitifNumber(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Le paramètre fourni n'est pas un tableau.");
    }
    else {
        return arr.filter(function(num) {
            return num > 0;
        });
    }
}
nombres.push(-10, 15, -3, 22, 0, -7, 8);
let positifs = getPossitifNumber(nombres);
console.log("Nombres positifs dans le tableau:", positifs);

// Fonction qui retourne tout les items en majuscule

let fruits = ["pomme", "banane", "cerise"];

function toUpperCaseArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Le paramètre fourni n'est pas un tableau.");
    } else {
        return arr.map(function(item) {
            return item.toUpperCase();
        });
    }
}

let fruitsMajuscule = toUpperCaseArray(fruits);
console.log("Fruits en majuscules:", fruitsMajuscule);

// Fonction qui calcule la moyenne d'un tableau de nombres

function calculerMoyenne(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Le paramètre fourni n'est pas un tableau valide.");
    }   else {
        let somme = arr.reduce(function(total, num) {
            return total + num;
        }, 0);
        return somme / arr.length;
    }
}

let moyenne = calculerMoyenne(nombres);
console.log("La moyenne des nombres dans le tableau est:", moyenne);


// Fonction qui supprime les espaces multiple dans une chaine et met en minuscule



let chaine = "   Bonjour le monde! je    SUIS une CHAINE avec des ESPACE.    ";

function trimString(str) {
    if (typeof str !== 'string') {
        throw new Error("Le paramètre fourni n'est pas une chaîne de caractères.");
    } else {
        // retire les espaces au debut et a la fin
        let trimmed = str.trim();
        //met toute la chaine en minuscule
        let minuscules = trimmed.toLowerCase();
        // remplace les espaces multiples par un seul espace
        let NoEspace = minuscules.replace(/\s+/g, ' ');
        return NoEspace;
    }
}

let chaineTrimmed = trimString(chaine);
console.log("Chaîne après suppression des espaces:", '"' + chaineTrimmed + '"');

// Fonction qui compters les occurences

let texte = "Bonjour le monde. Le monde est beau. Le monde est grand.";

function countOccurrences(str, word) {
    if (typeof str !== 'string' || typeof word !== 'string') {
        throw new Error("Les paramètres fournis doivent être des chaînes de caractères.");
    } else {
        let regex = new RegExp('\\b' + word + '\\b', 'gi');
        let matches = str.match(regex);
        return matches ? matches.length : 0;
    }
}

let occurences = countOccurrences(texte, "monde");
console.log("Le mot 'monde' apparaît", occurences, "fois dans le texte.");

// Fonction qui tie un tableau par age 

let personnes = [
    { nom: "Alice", age: 30 },
    { nom: "Bob", age: 25 },
    { nom: "Charlie", age: 35 }
];

function trierParAge(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Le paramètre fourni n'est pas un tableau.");
    } else {
        return arr.sort(function(a, b) {
            return a.age - b.age;
        });
    }
}

let personnesTriees = trierParAge(personnes);
console.log("Personnes triées par âge:", personnesTriees);

// fonction qui extrais les nom d'un tableau d'objet

function extraireNoms(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Le paramètre fourni n'est pas un tableau.");
    } else {
        return arr.map(function(personne) {
            return personne.nom;
        });
    }
}

let noms = extraireNoms(personnes);
console.log("Noms extraits du tableau d'objets:", noms);