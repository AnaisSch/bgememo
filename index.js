console.log('hello world !');
let nbOfScreenColumns = 2;
nbOfScreenColumns = "two"
    //variable2 = "J'ai changé de contenu";
const nbOfTry = 3;
// On ne réaffecte pas une variable constante (cette ligne va lamentablement échouer...)
// variable3 = "vais-je réussir à changer le contenu ? ";
/*
Commentaires
sur plusieurs
lignes
*/
console.log("variable 2 : ", nbOfScreenColumns);
console.log("variable 3 : ", nbOfTry);

//Types de variables 

const strVariable = "chaine de caractère";
// const strVariableBis = 'chaine de caractère entre apostrophes';
const numberVariable = 3.14;
const booleanVariable = true;
const arrayVariable = [
    "chaine",
    3310,
    true, [],
]; // tableau dans lequel on ne sait pas ce qu'on a stocké.
console.log("3310", arrayVariable[1]);
const objectVariable = {
    favoriteBiscuit: "cookies",
    favoriteNokia: 3310,
    haveGoodJokes: true,
    friends: [],
}; // différentes clés n'ont pas les mêmes valeurs. Utile quand on a des choses complexes 
//et pas sur un pied d'égalité. Inutile avec un tableau contenant des éléves. 
console.log("favorite Nokia", objectVariable.favoriteNokia);

// Amener à prendre des décisions, au moyen de portes logiques et blocs conditionnels.
// Si ça alors ça sinon ça. SI...SINON...
if (numberVariable === "3.14") {
    console.log("C'est vrai !");
} else {
    console.log("C'est faux !");
}
// SI... SINON SI... SINON SI...
if (numberVariable === "blablabla") {
    console.log("condition 1 est vraie");
} else if (strVariable === "Blobloblo") {
    console.log("condition 1 est fausse, mais condition 2 est vraie");
} else {
    console.log("toutes les conditions sont fausses")
}

switch (numberVariable) {
    case "str1": // if (numberVariable === "str1") {
        console.log("condition 1 est vraie");
        break;
    case "blablabla": // } else if (numberVariable === "blablabla") {
        console.log("la condition 1 est fausse, mais la 2 est vraie");
        break;
    default: // } else {
        console.log("toutes les conditions sont fausses");
        break;
}
// TANT QUE 
while (numberVariable === 3.24) {
    console.log("c'est encore vrai");
}

do {
    console.log("c'est la première foois, ou c'est encore vrai");
} while (numberVariable === 3.24); // On test à la fin de l'exécution et non pas au début comme While.

// POUR .... VARIANT DE ... A ... EN PAS DE ...
// Un nombre précis de fois. Peu dépendre d'une valeur. Mais des qu'on commence la boucle
//On peut prévoir où on s'arrête. 
for (let i = 0; i < 100; i++) { // on écrit toujours i puis j, etc. 
    console.log(i);
}

// LES FONCTIONS 
const percentage = 5 / 100 * 80;
console.log(percentage);

/* function percentOf(nbOfPercent, total) {
    const result = nbOfPercent / 100 * total;
    return result;
}
const percentageWithFn = percentOf(5, 80); */

// CREER UNE FONCTION ANONYME 
this.attribute = "global";
console.log("attribute 1", this.attribute);
const percentOf = function(nbOfPercent, total) {
    console.log("attribute 2", this.attribute);
    const result = nbOfPercent / 100 * total;
    return result;
}
console.log("attribute 3", this.attribute);
const percentageWithFn = percentOf(5, 80);

const percentOfBis = (nbOfPercent, total) => {
    this.attribute = "value";
    console.log("attribute 4", this.attribute);
    const result = nbOfPercent / 100 * total;
    return result;
}
console.log("attribute 5", this.attribute);
const percentageWithFn = percentOf(5, 80);
const percentageWithFnBis = percentOfBis(5, 100);
console.log("attribute 6", this.attribute);