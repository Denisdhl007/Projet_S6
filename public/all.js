// import Boss
import {Boss} from "./modules/class.js";
import {BossTab, Sauron, Chronos, Lilith} from "./modules/instances.js";

// import Héro
// import {Héros} from "./modules/instances.js";
// import {HérosArray} from "./modules/class.js";
import {Mage} from  "./modules/instances.js";
import {Guerrier} from "./modules/instances.js";
import {Archer} from "./modules/instances.js";
// import {nbFlechesArray } from "./modules/class.js";
// import {nbManaArray} from "./modules/class.js";


// import Enigme
// import {Enigme} from "./modules/instances.js";
import {enigme_a} from "./modules/instances.js";
import {enigme_b} from "./modules/instances.js";
import {enigme_c} from "./modules/instances.js";
import {enigme_d} from "./modules/instances.js";
import {enigme_e} from "./modules/instances.js";
import {enigme_f} from "./modules/instances.js";
import {enigme_g} from "./modules/instances.js";

// import {} from "./modules/Instances.js";

//initialisation de partie


alert(`Bienvenue dans cette partie de Geek of Legends. Une partie de jeu est composée d'un Boss et de TROIS héros.`);

//Nommer les héros
alert(`Un guerrier, un mage et un archer vont se battre contre le Boss. Vous allez maintenant nommer les trois héros`);

Guerrier.nom = prompt("Quel est le nom de ton guerrier ?");
Mage.nom = prompt("Quel est le nom de ton mage ?");
Archer.nom = prompt("Quel est le nom de ton archer?");
console.log(Guerrier);
console.log(Mage);
console.log(Archer);


//Définir les points de vie pour chacun

let vie = Number(`500`);

alert (`Votre Guérrier s'appelle: ${Guerrier.nom}, Votre Mage s'appelle: ${Mage.nom} et Votre Archer s'appelle: ${Archer.nom}Donnez leur maintenant des points d'attaque.`);

//guerrier
Guerrier.nbPtsVie = prompt(`Combien souhaitez vous attribuer à votre guerrier (entre 0 et 500?)`);
while (vie<=Guerrier.nbPtsVie && Guerrier.nbPtsVie>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${vie}`);
    Guerrier.nbPtsVie = prompt("Combien souhaitez vous attribuer à votre guerrier ?");
}
vie-=Guerrier.nbPtsVie;
alert(`Il vous reste ${vie}`);
console.log(Guerrier);

Mage.nbPtsVie = prompt(`Combien souhaitez vous attribuer à votre Mage`);
while (vie<=Mage.nbPtsVie && Mage.nbPtsVie>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${vie}`);
    Mage.nbPtsVie = prompt(`Combien souhaitez vous attribuer à votre Mage`);
}
vie-=Mage.nbPtsVie;
console.log(Mage);


Archer.nbPtsVie = vie;
alert(`votre Archer a donc ${vie} point de vie`);

console.log(Guerrier);
console.log(Mage);
console.log(Archer);
alert (`Passons à la suite`);


//Définir les points d'attaque pour chacun des Héros
let Attack = 200;

//Guerrier
Guerrier.nbPtsAttaques = prompt(`Combien souhaitez vous attribuer à votre guerrier?`);
while (Attack<=Guerrier.nbPtsAttaques && Guerrier.nbPtsAttaques>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${Attack}`);
    Guerrier.nbPtsAttaques = prompt("Combien souhaitez vous attribuer à votre guerrier ?");
}
vie-=Guerrier.nbPtsAttaques;
alert(`Il vous reste ${Attack} points d'attaque`);
console.log(Guerrier);

//Mage
Mage.nbPtsAttaques = prompt(`Combien souhaitez vous attribuer à votre Mage?`);
while (Attack<=Mage.nbPtsAttaques && Mage.nbPtsAttaques>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${Attack}`);
    Mage.nbPtsAttaques = prompt(`Combien souhaitez vous attribuer à votre Mage?`);
}
Attack-=Mage.nbPtsAttaques;
console.log(Mage);

//Archer
Archer.nbPtsAttaques = vie;
alert(`votre Archer a donc ${Attack} points d'attaque`);

console.log(Guerrier);
console.log(Mage);
console.log(Archer);
alert (`Passons à la suite`);

// choix de boss
alert(`Un Boss va maintenant être choisi aléatoirement parmi ${Sauron.nom}, ${Chronos.nom}, ${Lilith.nom}`);
let index = Math.floor(Math.random() * BossTab.length);
let chosenBoss = BossTab[index];
console.log(chosenBoss);
alert(`le Boss est ${chosenBoss.nom}`);

//début d'une partie
while(chosenBoss.nbPtsVie>0 || Guerrier.nbPtsVie>0 && Mage.nbPtsVie>0 && Archer.nbPtsVie>0 ){}
    

if (Guerrier.nbPtsVie == 0 && Mage.nbPtsVie == 0 && Archer.nbPtsVie == 0){
    alert (`Vous avez perdu contre ${chosenBoss.nom}`);
}else if (chosenBoss.nbPtsVie == 0){
    alert (`Vous avez gangé contre ${chosenBoss.nom}`);
}





//     Guerrier.attaque(chosenBoss);
//     Mage.attaque(chosenBoss);
//     Archer.attaque(chosenBoss);

//     chosenBoss.attaque()
// }

