// import Boss
import {Boss} from "./modules/class.js";
// import {BossArray} from "./modules/class.js";
import {Sauron} from "./modules/instances.js";
import {Chronos} from "./modules/instances.js";
import {Lilith} from "./modules/instances.js";

// import Héro
// import {Héros} from "./modules/instances.js";
import {HérosArray} from "./modules/class.js";
import {Mage} from  "./modules/instances.js";
import {Guerrier} from "./modules/instances.js";
import {Archer} from "./modules/instances.js";
import {nbFlechesArray } from "./modules/class.js";
import {nbManaArray} from "./modules/class.js";

/*
import {ChoixHeros} from "./modules/instances.js";
import {index} from "./modules/instances.js";
import {chosenHero} from "./modules/instances.js";
console.log(chosenHero);
*/

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

alert(`Bienvenue dans cette partie de Geek of Legends. Une partie de jeu est composée d'un Boss et de TROIS Héros.`);

alert(`Un Boss va maintenant être choisi aléatoirement parmi ${Boss.Lilith}, ${Boss.Lilith}, ${Boss.Lilith}`);
let ChoixBoss = [Sauron,Chronos,Lilith];
let index = Math.floor(Math.random() * ChoixBoss.length);
let chosenBoss = ChoixBoss[index];
console.log(chosenBoss);
alert(`le Boss est ${chosenBoss.nom}`);

alert(`Un guerrier, un mage et un archer vont se battre contre le Boss : ${chosenBoss.nom}. Vous allez maintenant nommer les trois héros`);



// HérosArray.forEach(element =>
//     element.nom = prompt(`Quel sera le nom de ${element.poste}?`)
// );


// let globalInput;

// function getInput() {
//     globalInput = prompt('Enter some data:');
// }

// getInput();

// // Use the globalInput value
// console.log(globalInput);
// document.write(globalInput);



/*

let BossA = Math.floor(Math.random()*BossArray.length);
let nbFlechesA = Math.floor(Math.random()*nbFlechesArray.length);
let nbManaA = Math.floor(Math.random()*nbManaArray.length);

let elementBoss = BossArray[BossA];
archer.fleches = nbFlechesArray[nbFlechesA];
mage.nbMana = nbManaArray[nbManaAleat];

alert(`Bienvenue dans cette partie de Geek of Legends. Votre équipe sera composée de TROIS Héros. Un guerrier, un mage et un archer vont se battre contre un Boss: ${elementBoss.nom}. Vous allez maintenant nommer les membres de votre équipe`);

HérosArray.forEach(element =>
    element.nom = prompt(`Quel sera le nom de ${element.poste}?`)
);


*/

/*


let ptsVie = 500;

alert (`Votre Guérrier s'appelle: ${guerrier.nom}, Votre Mage s'appelle: ${mage.nom} et Votre Archer s'appelle: ${archer.nom}.  Donnez leur maintenant des points de vie.`);

HérosArray.forEach(element => {
    element.vie = prompt(`Attribuez des points de vie à votre ${element.nom},  votre ${element.poste} ? Le solde des points de vie est : ${ptVie}/(500.`);
    ptVie -= element.vie;
});

if (ptsVie !== 0){
    let ajoutVie = prompt(`Ìl reste ${ptsVie} points de vie. Maintenant, à qui voulez vous donner des points de vie?`)

    switch(true){
        case(ajoutVie == "Guerrier"):
            Guerrier.vie += ptVie;
            break;

        case(ajoutVie == "Mage"):
            Mage.vie += ptVie;
            break;

        case(ajoutVie == "Archer"):
            Archer.vie += ptVie;
            break;
        }

} else {
    alert (`Passons à la suite`);
}




let ptAttaque = 500;

alert (`Distirbuez maintenant ${ptAttaque} points d'attaque`);

HérosArray.forEach(element => {
    element.attaque = prompt(`Distribuez des points d'attaque à ${element.nom}, votre ${element.poste}`);
    alert(`Il reste ${ptAttaque}/500`);
    ptAttaque -= element.attaque;

    if(element.attaque !== "number"){
        alert(`Veuillez introduire un nombre en chiffre`);
        element.attaque = prompt(`Distribuez des points d'attaque à ${element.nom}, votre ${element.poste} ?`);
        alert(`Il reste ${ptAttaque}/500`);
        
    } else if (element.attaque > ptAttaque){
        alerte(`nombre de points restants insuffisant`);
        element.attaque = prompt(`Distribuez des points d'attaque à ${element.nom}, votre ${element.poste}?`);
        alert(`Il reste ${ptAttaque}/500`);
    }
});


if (ptAttaque !== 0) {
    let ajoutAttaque = prompt(`Il reste ${ptAttaque} points d'attaque. A qui voulez vous les donner: au Guerrier, auMage ou à l'Archer ?`);

    switch(true){
        case(ajoutAttaque == "Guerrier"):
            Guerrier.attaque += ptAttaque;
            break;

        case(ajoutAttaque == "Mage"):
            Mage.attaque += ptAttaque;
            break;

        case(ajoutAttaque == "Archer"):
            Archer.attaque += ptAttaque;
            break;
    }

    alert(` Il reste ${ptAttaque} point d'attaque à distribuer`);
} else {
    alert (`Débutons maintenant la partie`);
}





// Créer un switch entre les trois modes
// attaque
// defense
// normal
// default: comande introuvable




// 1 TOUR
// 1. mage attaque Boss
// 2. guerrier attaque Boss
// 3. archer attaque Boss
// 4. Boss attaque au hasard soit mage soit guerrier soit archer
// while
// boss attack

*/