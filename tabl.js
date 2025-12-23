// traitement des arrays 

// creation d'un tableau
let fruits = ["pomme", "banane", "cerise"];
console.log("Tableau initial des fruits:", fruits);

// ajout d'un élément à la fin du tableau
fruits.push("orange");
console.log("Après ajout d'une orange:", fruits);

// suppression du dernier élément du tableau
let dernierFruit = fruits.pop();
console.log("Après suppression du dernier fruit (" + dernierFruit + "):", fruits);

// accès à un élément par son index
let premierFruit = fruits[0];
console.log("Premier fruit du tableau:", premierFruit);

// itération sur les éléments du tableau
console.log("Itération sur les fruits:");   
fruits.forEach(function(fruit, index) {
    console.log("Fruit " + index + ": " + fruit);
});
// recherche d'un élément dans le tableau
let indexBanane = fruits.indexOf("cerise");
if (indexBanane !== -1) {
    console.log("La cerise se trouve à l'index:", indexBanane);
} else {
    console.log("La cerise n'est pas dans le tableau.");
}
// longueur du tableau
console.log("Longueur du tableau des fruits:", fruits.length);

// tri du tableau
fruits.sort();
console.log("Tableau trié des fruits:", fruits);

// fusion de deux tableaux
let legumes = ["carotte", "brocoli"];
let aliments = fruits.concat(legumes);
console.log("Tableau fusionné des fruits et légumes:", aliments);

// recherche d'un élément avec une condition
let fruitCherche = aliments.find(function(item) {
    return item.startsWith("b");
}); 

console.log("Premier aliment commençant par 'b':", fruitCherche);

// filtrage des éléments selon une condition
let fruitsAvecE = aliments.filter(function(item) {
    return item.includes("e");
});
console.log("Aliments contenant la lettre 'e':", fruitsAvecE);

// transformation des éléments du tableau en majuscules
let alimentsMajuscules = aliments.map(function(item) {
    return item.toUpperCase();
});
console.log("Aliments en majuscules:", alimentsMajuscules);

// vérification si tous les éléments respectent une condition
let tousFruits = aliments.every(function(item) {
    return item.length > 2;
});
console.log("Tous les aliments ont plus de 2 lettres:", tousFruits);

// vérification si au moins un élément respecte une condition
let auMoinsUnLegume = aliments.some(function(item) {
    return item === "carotte";
});
console.log("Au moins un légume est 'carotte':", auMoinsUnLegume);

// réduction du tableau pour obtenir une chaîne unique
let chaineAliments = aliments.reduce(function(accumulateur, item) {
    return accumulateur + ", " + item;
}); 
console.log("Chaîne des aliments:", chaineAliments);

// recherche de l'index d'un élément selon une condition
let indexLegume = aliments.findIndex(function(item) {
    return item === "brocoli";
});

console.log("Index du légume 'brocoli':", indexLegume);

// Creation tableau numerique*
let nombres = [10, 5, 8, 1, 7];
console.log("Tableau initial des nombres:", nombres);

// tri des nombres en ordre croissant
nombres.sort(function(a, b) {
    return a - b;
});
console.log("Nombres triés en ordre croissant:", nombres);

// tri des nombres en ordre décroissant
nombres.sort(function(a, b) {
    return b - a;
});
console.log("Nombres triés en ordre décroissant:", nombres);

// somme de tous les nombres dans le tableau
let sommeNombres = nombres.reduce(function(accumulateur, nombre) {
    return accumulateur + nombre;
}, 0);
console.log("Somme des nombres:", sommeNombres);

// moyenne des nombres dans le tableau
let moyenneNombres = sommeNombres / nombres.length;
console.log("Moyenne des nombres:", moyenneNombres);

// recherche du nombre maximum dans le tableau
let maxNombre = Math.max.apply(null, nombres);
console.log("Nombre maximum:", maxNombre);

// recherche du nombre minimum dans le tableau
let minNombre = Math.min.apply(null, nombres);
console.log("Nombre minimum:", minNombre);

// filtrage des nombres pairs
let nombresPairs = nombres.filter(function(nombre) {
    return nombre % 2 === 0;
}); 
console.log("Nombres pairs:", nombresPairs);

// filtrage des nombres impairs
let nombresImpairs = nombres.filter(function(nombre) {
    return nombre % 2 !== 0;
});
console.log("Nombres impairs:", nombresImpairs);

// multiplication de chaque nombre par 2
let nombresMultipliés = nombres.map(function(nombre) {
    return nombre * 2;
});
console.log("Nombres multipliés par 2:", nombresMultipliés);

// vérification si tous les nombres sont positifs
let tousPositifs = nombres.every(function(nombre) {
    return nombre > 0;
}); 
console.log("Tous les nombres sont positifs:", tousPositifs);

// vérification si au moins un nombre est supérieur à 5
let auMoinsUnSup5 = nombres.some(function(nombre) {
    return nombre > 5;
});
console.log("Au moins un nombre est supérieur à 5:", auMoinsUnSup5);


// tri des nombres en ordre croissant sans modifier le tableau original
let nombresTries = [...nombres].sort(function(a, b) {
    return a - b;
});
console.log("Nombres triés (sans modifier l'original):", nombresTries);
console.log("Tableau original des nombres reste inchangé:", nombres);

// recherche du premier nombre supérieur à 5
let premierSup5 = nombres.find(function(nombre) {
    return nombre > 5;
});
console.log("Premier nombre supérieur à 5:", premierSup5);

// calcul du produit de tous les nombres dans le tableau
let produitNombres = nombres.reduce(function(accumulateur, nombre) {
    return accumulateur * nombre;
}, 1);

console.log("Produit des nombres:", produitNombres);

// création d'un tableau multidimensionnel
let tableau2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Tableau 2D initial:", tableau2D);

// accès à un élément spécifique dans le tableau 2D
let element = tableau2D[1][2]; // Accès à l'élément 6
console.log("Élément à la position [1][2]:", element);

// itération sur les éléments du tableau 2D
console.log("Itération sur le tableau 2D:");
tableau2D.forEach(function(ligne, indexLigne) {
    ligne.forEach(function(valeur, indexColonne) {
        console.log("Élément à [" + indexLigne + "][" + indexColonne + "]: " + valeur);
    });
});

// ajout d'une nouvelle ligne au tableau 2D
tableau2D.push([10, 11, 12]);
console.log("Après ajout d'une nouvelle ligne:", tableau2D);

// suppression de la dernière ligne du tableau 2D
let derniereLigne = tableau2D.pop();
console.log("Après suppression de la dernière ligne (" + derniereLigne + "):", tableau2D);

// flattening du tableau 2D en un tableau 1D
let tableau1D = tableau2D.flat();
console.log("Tableau 2D aplati en 1D:", tableau1D);

// recherche d'un élément dans le tableau 2D
let trouve = false;
for (let i = 0; i < tableau2D.length; i++) {
    for (let j = 0; j < tableau2D[i].length; j++) {
        if (tableau2D[i][j] === 5) {
            trouve = true;
            console.log("Élément 5 trouvé à la position [" + i + "][" + j + "]");
        }
    }
}
if (!trouve) {
    console.log("Élément 5 non trouvé dans le tableau 2D.");
}

// calcul de la somme de chaque ligne dans le tableau 2D
tableau2D.forEach(function(ligne, indexLigne) {
    let sommeLigne = ligne.reduce(function(accumulateur, valeur) {  
        return accumulateur + valeur;
    }, 0);
    console.log("Somme de la ligne " + indexLigne + ": " + sommeLigne);
});

// transposition du tableau 2D
let transposé = tableau2D[0].map((_, colIndex) => tableau2D.map(row => row[colIndex]));
console.log("Tableau 2D transposé:", transposé);

// recherche du maximum dans chaque colonne du tableau 2D
transposé.forEach(function(colonne, indexColonne) {
    let maxColonne = Math.max.apply(null, colonne);
    console.log("Maximum de la colonne " + indexColonne + ": " + maxColonne);
});

// fusion de deux tableaux 2D
let autreTableau2D = [
    [13, 14, 15],
    [16, 17, 18],
    [19, 20, 21]
];
let fusionné2D = tableau2D.concat(autreTableau2D);
console.log("Tableau 2D fusionné:", fusionné2D);

// création d'un tableau d'objets
let personnes = [
    { nom: "Alice", âge: 25 },
    { nom: "Bob", âge: 30 },
    { nom: "Charlie", âge: 35 }
];
console.log("Tableau initial des personnes:", personnes);

// ajout d'une nouvelle personne au tableau
personnes.push({ nom: "David", âge: 28 });
console.log("Après ajout de David:", personnes);

// recherche d'une personne par son nom
let personneCherchée = personnes.find(function(personne) {
    return personne.nom === "David";
});
if (personneCherchée) {
    console.log("Personne trouvée:", personneCherchée);
} else {
    console.log("Personne non trouvée.");
}

// filtrage des personnes âgées de plus de 28 ans
let personnesPlus28 = personnes.filter(function(personne) {
    return personne.âge > 28;
});
console.log("Personnes âgées de plus de 28 ans:", personnesPlus28);

// calcul de l'âge moyen des personnes
let âgeTotal = personnes.reduce(function(accumulateur, personne) {
    return accumulateur + personne.âge;
}, 0);
let âgeMoyen = âgeTotal / personnes.length;
console.log("Âge moyen des personnes:", âgeMoyen);

// tri des personnes par âge
personnes.sort(function(a, b) {
    return a.âge - b.âge;
});
console.log("Personnes triées par âge:", personnes);

// mise à jour de l'âge d'une personne
let personneÀMettreÀJour = personnes.find(function(personne) {
    return personne.nom === "Alice";
});
if (personneÀMettreÀJour) {
    personneÀMettreÀJour.âge = 26;
    console.log("Après mise à jour de l'âge d'Alice:", personnes);
} else {
    console.log("Personne à mettre à jour non trouvée.");
}

// suppression d'une personne du tableau
personnes = personnes.filter(function(personne) {
    return personne.nom !== "Bob";
});
console.log("Après suppression de Bob:", personnes);

// création d'un tableau à partir d'une chaîne de caractères
let chaine = "rouge,vert,bleu,jaune";
let couleurs = chaine.split(",");
console.log("Tableau des couleurs:", couleurs);

// création d'une chaîne de caractères à partir d'un tableau
let nouvelleChaine = couleurs.join(" - ");
console.log("Chaîne des couleurs:", nouvelleChaine);