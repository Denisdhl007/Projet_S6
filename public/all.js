// import Boss
import * as INSTANCE from "./modules/instances.js";

//initialisation de partie

alert(`Bienvenue dans cette partie de Geek of Legends. Une partie de jeu est composée d'un Boss et de TROIS héros.`);
alert("Vous avez un Boss à défier aléatoirement. Chaque tour, le boss attaque aléatoirement un de vos personnages.");
alert("Commençons par renommer vos héros!");


// import Héro
INSTANCE.guerrier1.nom=(prompt(`Comment appelez vous votre Guerrier ?`));
INSTANCE.mage1.nom=(prompt(`Comment appelez vous votre Mage ?`));
INSTANCE.archer1.nom=(prompt(`Comment appelez vous votre Archer ?`));
console.log(INSTANCE.guerrier1);
console.log(INSTANCE.mage1);
console.log(INSTANCE.archer1);

// Point de vie à attribuer auxhéros.
let vie = 500;

alert (`Votre Guérrier s'appelle: ${INSTANCE.guerrier1.nom}, Votre Mage s'appelle: ${INSTANCE.mage1.nom} et Votre Archer s'appelle: ${INSTANCE.archer1.nom}Donnez leur maintenant des points d'attaque.`);

//Guerrier
INSTANCE.guerrier1.ptVie = prompt(`Combien souhaitez vous attribuer à votre guerrier (entre 0 et 500?)`);
while (vie<=INSTANCE.guerrier1.ptVie && INSTANCE.guerrier1.ptVie>=0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${vie}`);
    INSTANCE.guerrier1.ptVie = prompt("Combien souhaitez vous attribuer à votre guerrier ?");
}
vie-=INSTANCE.guerrier1.ptVie;
alert(`Il vous reste ${vie}`);
// console.log(INSTANCE.Guerrier);

//Mage
INSTANCE.mage1.ptVie = prompt(`Combien souhaitez vous attribuer à votre Mage`);
while (vie<=INSTANCE.mage1.ptVie && INSTANCE.mage1.ptVie>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${vie}`);
    INSTANCE.mage1.ptVie = prompt(`Combien souhaitez vous attribuer à votre Mage`);
}
vie-=INSTANCE.mage1.ptVie;
alert(`Il vous reste ${vie}`);
// console.log(INSTANCE.Mage);

//Archer
INSTANCE.archer1.ptVie = vie;
alert(`votre Archer a donc ${vie} point de vie`);
console.log(INSTANCE.guerrier1);
console.log(INSTANCE.mage1);
console.log(INSTANCE.archer1);
alert (`Passons à la suite`);

//Définir les points d'attaque pour chacun des Héros
let Attack = 500;

//Guerrier
INSTANCE.guerrier1.ptAttaque = prompt(`Combien souhaitez vous attribuer à votre guerrier?`);
while (Attack<=INSTANCE.guerrier1.ptAttaque && INSTANCE.guerrier1.ptAttaque>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${Attack}`);
    INSTANCE.guerrier1.ptAttaque = prompt("Combien souhaitez vous attribuer à votre guerrier ?");
}
Attack-=INSTANCE.guerrier1.ptAttaque;
alert(`Il vous reste ${Attack} points d'attaque`);
// console.log(Guerrier);

//Mage
INSTANCE.mage1.ptAttaque = prompt(`Combien souhaitez vous attribuer à votre Mage?`);
while (Attack<=INSTANCE.mage1.ptAttaque && INSTANCE.mage1.ptAttaque>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${Attack}`);
    INSTANCE.mage1.ptAttaque = prompt(`Combien souhaitez vous attribuer à votre Mage?`);
}
Attack-=INSTANCE.mage1.ptAttaque;
alert(`Il vous reste ${Attack}`);

//Archer
INSTANCE.archer1.ptAttaque = Attack;
alert(`votre Archer a donc ${Attack} points d'attaque`);

console.log(INSTANCE.guerrier1);
console.log(INSTANCE.mage1);
console.log(INSTANCE.archer1);

alert (`Passons à la suite`);

// choix de boss
alert(`Un Boss va maintenant être choisi aléatoirement parmi ${INSTANCE.Sauron.nom}, ${INSTANCE.Chronos.nom}, ${INSTANCE.Lilith.nom}`);

alert(`le Boss est ${INSTANCE.chosenBoss.nom}`);

let pvMaxBoss= INSTANCE.chosenBoss.ptVie;

//début d'une partie
while(INSTANCE.chosenBoss.ptVie>pvMaxBoss*0.2){
    if(INSTANCE.guerrier1.ptVie>0){
        INSTANCE.guerrier1.attaqueGuerrier(INSTANCE.chosenBoss);
    }
    if(INSTANCE.mage1.ptVie>0){
        INSTANCE.mage1.attaqueMage(INSTANCE.chosenBoss);
    }
    if(INSTANCE.archer1.ptVie>0){
        INSTANCE.archer1.attaqueArcher(INSTANCE.chosenBoss);
    }
    if(INSTANCE.archer1.ptVie<=0 && INSTANCE.guerrier1.ptVie<=0 && INSTANCE.mage1.ptVie<=0){
        alert(`Vous avez perdu contre ${INSTANCE.chosenBoss.nom}`);
        break;
    }
    INSTANCE.chosenBoss.attaqueBoss();
}
if(INSTANCE.archer1.ptVie<=0 && INSTANCE.guerrier1.ptVie<=0 && INSTANCE.mage1.ptVie<=0){
    alert(`Vous avez perdu contre ${INSTANCE.chosenBoss.nom}`);
}else{
INSTANCE.chosenBoss.enigme();
}