// import Boss
import {Boss} from "./modules/class.js";
import {BossTab, Sauron, Chronos, Lilith} from "./modules/instances.js";

// import Héro
// import {Héros} from "./modules/instances.js";
import {Mage} from  "./modules/instances.js";
import {Guerrier} from "./modules/instances.js";
import {Archer} from "./modules/instances.js";
import {HerosTab} from "./modules/instances.js";
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

//Guerrier
Guerrier.nbPtsVie = prompt(`Combien souhaitez vous attribuer à votre guerrier (entre 0 et 500?)`);
while (vie<=Guerrier.nbPtsVie && Guerrier.nbPtsVie>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${vie}`);
    Guerrier.nbPtsVie = prompt("Combien souhaitez vous attribuer à votre guerrier ?");
}
vie-=Guerrier.nbPtsVie;
alert(`Il vous reste ${vie}`);
console.log(Guerrier);

//Mage
Mage.nbPtsVie = prompt(`Combien souhaitez vous attribuer à votre Mage`);
while (vie<=Mage.nbPtsVie && Mage.nbPtsVie>0) {
    alert(`Veuillez ré-attribuer un nombre entre 0 et ${vie}`);
    Mage.nbPtsVie = prompt(`Combien souhaitez vous attribuer à votre Mage`);
}
vie-=Mage.nbPtsVie;
console.log(Mage);

//Archer
Archer.nbPtsVie = vie;
alert(`votre Archer a donc ${vie} point de vie`);

console.log(Guerrier);
console.log(Mage);
console.log(Archer);
alert (`Passons à la suite`);



//Définir les points d'attaque pour chacun des Héros
let Attack = Number(`200`);

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


    // le guerrier joue selon une position à demander au joueur.Archer

    // le Mage joue selon une position à demander au joueur.
    
    // l'archer joue selon une position à demander au joueur.

    // Le boss joue son tour en position déjà définie

let i = 0;

// FAUT IL METTRE LES HEORS EN ARRAY?

do{
    i++;

    alert(`commencons le tour numéro ${i} de la partie! Elle se terminera lorsque soit le Boss est mort, soit vos trois héros sont morts `);

    let posture = prompt(`Choisissez une posture pour ${Guerrier.nom} votre guerrier : attaque ou défense`);

    if (posture == defense){
    Guerrier.defense
    console.log(`${Guerrier.nom} attacked the ${selectedBoss} with extra damage!`);

    } else if (posture == attaque){
    Guerrier.attaque(chosenBoss);
    console.log(`${Guerrier.nom} did not attack the ${selectedBoss}.`);

    } else if (posture !== "attaque" && posture !== "défense"){
        posture = prompt(`Entrez une posture valide : attaque ou défense`)
    }

    

//     prompt: quelle posture voulez vous appliquer à votre Mage?
//     Mage.attaque(chosenBoss);

//     prompt: quelle posture voulez vous appliquer à votre Archer?
//     Archer.attaque(chosenBoss);


  // chosenBoss.attaque() aléatoirement un des trois héros.
        let bossAttack = () => {
        let heroToAttack = HerosTab[Math.floor(Math.random() * HerosTab.length)];
        console.log(`${selectedBoss} attacked ${heroToAttack}.`);
    };
};

// La boucle avec l'énégime devrait elle venir se placer ici plutot que dans la classe?????



switch (true) {
    case chosenBoss.nbPtsVie <= 0:
        alert (`Vous avez gagné contre ${chosenBoss.nom}`);
    case Guerrier.nbPtsVie <= 0  && Mage.nbPtsVie <= 0 && Archer.nbPtsVie <= 0:
        alert(`Vous avez perdu la bataillecontre ${chosenBoss.nom}, tous vos héros sont morts !`);
}






























// Possibility:


// // array of boss names
// const bosses = ["boss1", "boss2", "boss3"];

// // randomly select a boss
// const selectedBoss = bosses[Math.floor(Math.random() * bosses.length)];

// // array of hero names
// const heroes = ["hero1", "hero2", "hero3"];

// // object to store heroes' posture
// const heroesPosture = {
//   hero1: "normal",
//   hero2: "normal",
//   hero3: "normal"
// };

// // function to set heroes' posture
// const setPosture = (hero, posture) => {
//   if (heroesPosture.hasOwnProperty(hero) && (posture === "attack" || posture === "defense" || posture === "normal")) {
//     heroesPosture[hero] = posture;
//   }
// };

// // function to perform heroes' attack on boss


// const heroesAttack = () => {
//   heroes.forEach(hero => {
//     if (heroesPosture[hero] === "attack") {
//       console.log(`${hero} attacked the ${selectedBoss} with extra damage!`);
//     } else if (heroesPosture[hero] === "defense") {
//       console.log(`${hero} attacked the ${selectedBoss} with reduced damage.`);
//     } else {
//       console.log(`${hero} attacked the ${selectedBoss}.`);
//     }
//   });
// };


// // function to perform boss' attack on heroes
// const bossAttack = () => {
//   const heroToAttack = heroes[Math.floor(Math.random() * heroes.length)];
//   console.log(`${selectedBoss} attacked ${heroToAttack}.`);
// };

// // example usage
// setPosture("hero1", "attack");
// setPosture("hero2", "defense");
// heroesAttack();
// bossAttack();



