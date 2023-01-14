// import Boss
import * as INSTANCE from "./modules/instances.js";

//initialisation de partie

alert(`Bienvenue dans cette partie de Geek of Legends. Une partie de jeu est composée d'un Boss et de TROIS héros.`);
alert("Vous avez un Boss à défier aléatoirement. Chaque tour, le boss attaque aléatoirement un de vos personnages.");
alert("Commençons par renommer vos héros!");

// import Héro
INSTANCE.Guerrier.nom=(prompt(`Comment appelez vous votre Guerrier ?`));
INSTANCE.Mage.nom=(prompt(`Comment appelez vous votre Mage ?`));
INSTANCE.Archer.nom=(prompt(`Comment appelez vous votre Archer ?`));
// console.log(INSTANCE.Guerrier);
// console.log(INSTANCE.Mage);
// console.log(INSTANCE.Archer);

// Point de vie à attribuer auxhéros.
let vie = 500;

alert (`Votre Guérrier s'appelle: ${INSTANCE.Guerrier.nom}, Votre Mage s'appelle: ${INSTANCE.Mage.nom} et Votre Archer s'appelle: ${INSTANCE.Archer.nom}Donnez leur maintenant des points d'attaque.`);

//Guerrier
INSTANCE.Guerrier.ptVie = prompt(`Combien souhaitez vous attribuer à votre guerrier (entre 0 et 500?)`);
while (vie<=INSTANCE.Guerrier.ptVie && INSTANCE.Guerrier.ptVie>=0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${vie}`);
    INSTANCE.Guerrier.ptVie = prompt("Combien souhaitez vous attribuer à votre guerrier ?");
}
vie-=INSTANCE.Guerrier.ptVie;
alert(`Il vous reste ${vie}`);
// console.log(INSTANCE.Guerrier);

//Mage
INSTANCE.Mage.ptVie = prompt(`Combien souhaitez vous attribuer à votre Mage`);
while (vie<=INSTANCE.Mage.ptVie && INSTANCE.Mage.ptVie>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${vie}`);
    INSTANCE.Mage.ptVie = prompt(`Combien souhaitez vous attribuer à votre Mage`);
}
vie-=INSTANCE.Mage.ptVie;
alert(`Il vous reste ${vie}`);
// console.log(INSTANCE.Mage);

//Archer
INSTANCE.Archer.ptVie = vie;
alert(`votre Archer a donc ${vie} point de vie`);

// console.log(INSTANCE.Guerrier);
// console.log(INSTANCE.Mage);
// console.log(INSTANCE.Archer);
alert (`Passons à la suite`);

//Définir les points d'attaque pour chacun des Héros
let Attack = 500;

//Guerrier
INSTANCE.Guerrier.ptAttaque = prompt(`Combien souhaitez vous attribuer à votre guerrier?`);
while (Attack<=INSTANCE.Guerrier.ptAttaque && INSTANCE.Guerrier.ptAttaque>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${Attack}`);
    INSTANCE.Guerrier.ptAttaque = prompt("Combien souhaitez vous attribuer à votre guerrier ?");
}
Attack-=INSTANCE.Guerrier.ptAttaque;
alert(`Il vous reste ${Attack} points d'attaque`);
// console.log(Guerrier);

//Mage
INSTANCE.Mage.ptAttaque = prompt(`Combien souhaitez vous attribuer à votre Mage?`);
while (Attack<=INSTANCE.Mage.ptAttaque && INSTANCE.Mage.ptAttaque>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${Attack}`);
    INSTANCE.Mage.ptAttaque = prompt(`Combien souhaitez vous attribuer à votre Mage?`);
}
Attack-=INSTANCE.Mage.ptAttaque;
alert(`Il vous reste ${Attack}`);

//Archer
INSTANCE.Archer.ptAttaque = vie;
alert(`votre Archer a donc ${Attack} points d'attaque`);

// console.log(INSTANCE.Guerrier);
// console.log(INSTANCE.Mage);
// console.log(INSTANCE.Archer);

alert (`Passons à la suite`);

// choix de boss
alert(`Un Boss va maintenant être choisi aléatoirement parmi ${INSTANCE.Sauron.nom}, ${INSTANCE.Chronos.nom}, ${INSTANCE.Lilith.nom}`);

alert(`le Boss est ${INSTANCE.chosenBoss.nom}`);

let pvMaxBoss= INSTANCE.chosenBoss.ptVie;

//début d'une partie


while(INSTANCE.chosenBoss.ptVie>pvMaxBoss*0.2){
    if(INSTANCE.Guerrier.ptVie>0){
        INSTANCE.Guerrier.attaqueGuerrier(INSTANCE.chosenBoss);
    }
    if(INSTANCE.Mage.ptVie>0){
        INSTANCE.Mage.attaqueMage(INSTANCE.chosenBoss);
    }
    if(INSTANCE.Archer.ptVie>0){
        INSTANCE.Archer.attaqueArcher(INSTANCE.chosenBoss);
    }
    if(INSTANCE.Archer.ptVie<=0 && INSTANCE.Guerrier.ptVie<=0 && INSTANCE.Mage.ptVie<=0){
        alert(`Vous avez perdu contre ${INSTANCE.chosenBoss.nom}`);
        break;
    }
    INSTANCE.chosenBoss.attaqueBoss();
}
if(INSTANCE.Archer.ptVie<=0 && INSTANCE.Guerrier.ptVie<=0 && INSTANCE.Mage.ptVie<=0){
    alert(`Vous avez perdu contre ${INSTANCE.chosenBoss.nom}`);
}else{
INSTANCE.chosenBoss.enigma();
}