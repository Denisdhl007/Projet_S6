// import Boss
import {Boss} from "./modules//Instances.js";
import {Sauron} from "./modules/Instances.js";
import {Chronos} from "./modules/Instances.js";
import {Lilith} from "./modules/Instances.js";

// import Héro
import {Héros} from "./modules/Instances.js";
import {Mage} from  "./modules/Instances.js";
import {Guerrier} from "./modules/Instances.js";
import {Archer} from "./modules/Instances.js";
import {HérosArray} from "./modules/Instances.js";
import {nbFlechesArray } from "./modules/Instances.js";
import {nbManaArray} from "./modules/Instances.js";

import {ChoixHeros} from "./modules/Instances.js";
import {index} from "./modules/Instances.js";
import {chosenHero} from "./modules/Instances.js";
console.log(chosenHero);

// import Enigme
import {Enigme} from "./modules/Instances.js";
import {enigme_a} from "./modules/Instances.js";
import {enigme_b} from "./modules/Instances.js";
import {enigme_c} from "./modules/Instances.js";
import {enigme_d} from "./modules/Instances.js";
import {enigme_e} from "./modules/Instances.js";
import {enigme_f} from "./modules/Instances.js";
import {enigme_g} from "./modules/Instances.js";

// import {} from "./modules/Instances.js";

//initialisation de partie

let BossA = Math.floor(Math.random()*BossArray.length);
let nbFlechesA = Math.floor(Math.random()*nbFlechesArray.length);
let nbManaA = Math.floor(Math.random()*nbManaArray.length);

let elementBoss = BossArray[BossA];
archer.fleches = nbFlechesArray[nbFlechesAleat];
mage.nbMana = nbManaArray[nbManaAleat];

alert(`Bienvenue dans cette partie de Geek of Legends. Votre équipe sera composée de TROIS Héros. Un guerrier, un mage et un archer vont se battre contre un Boss: ${elementBoss.nom}. Vous allez maintenant nommer les membres de votre équipe`);

HérosArray.forEach(element =>
    element.nom = prompt(`Quel sera le nom de ${element.poste}?`)
);


let ptsVie = 500;

alert (`Votre Guérrier s'appelle: ${guerrier.nom}, Votre Mage s'appelle: ${mage.nom} et Votre Archer s'appelle: ${archer.nom}.  Donnez leur maintenant des points de vie.`);

HérosArray.forEach(element => {
    element.vie = prompt(`Attribuez des points de vie à votre ${element.nom},  votre ${element.poste} ? Le solde des points de vie est : ${ptVie}/1000.`);
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
















// # GeekOfLegends

// ## Consigne de travail :
// >* Créer un repository Github et Faire des commits avec des noms cohérent et explicite

// >* Utiliser la structure de dossier apprise en classe

// >* Utiliser de manière approfondie la matière c'est a dire, utiliser les class, les imports les extends.`

// >* L'histoire doit être racontée dans la console en utilisant un maximum le code pour retourner les infos par exemple :

// J'ai un objet dont le nom est "Casar" dans la console je ferais apparaitre : "Casar perd 30 de vie" je ferais
// *console.log(casar.nom + " perd " + boss.attaque + " de vie" );*  et non pas
// *console.log("Casar perd 30 de vie");*

// ## Instructions du jeu :
// #### Il te faut créer :


// ### - Trois boss(Sauron,Chronos,Lilith).
//  Chaque boss possédera les propriétés suivantes :
// >* Un nom;
// >* Un nombre de points de vie;
// >* Un nombre de points d'attaque.




////////////////////////////////////////////


// #### A Savoir sur les boss :
// >* une fois le boss à 20% de ses points de vie, il posera à tes personnages (l'utilisateur) une énigme (choisie aléatoirement entre minimum 3 énigmes) à laquelle ils devront répondre en 3 essais au maximum, s'ils échouent, ils mourront, sinon ils vaincront le boss.

// for loop

// if 
// 20% de ses points de vie
// posera aux personnages (l'utilisateur) (prompt) une énigme 
// répondre en 3 essais au maximum

// if 
// fail to answer;
// mourrir

// else
// vaincre le boss.



// #### Exemples d'énigmes traditionnelles :
// >* Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?
// >* Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?
// #### Exemples d'énigmes pouvant être obtenu via des commande Javascript :
// >* Quel heure est-il ?(écriture informatisée)
// >* Quel est l'indice du premier "i" de cette question ?
// >* Que fait retourne Math.floor(1.3 * 10) ?

// >* Le choix du type d'enigme est à votre guise cela peut même être un mix des styles


////////////////////////////////////////////


// ### - Trois héros : Un mage, Un guerrier, Un archer.
// Avec les propriétés et actions suivantes :



// ### Le guerrier
// - Propriétés :

//   >* nom
//   >* points de vie
//   >* points d'attaque
//   >* point de rage : 0

// - Actions :
//   >* defense
//   >* attaque

//   #### A Savoir sur le guerrier
//   >* Tous les tours le guerrier gagne 1 point de rage au bout de 4 points ,le guerrier gagne 25% ( * 1.25 ) d'attaque supplémentaire durant 1 tour puis retombe à 0 de rage et perd ce bonus.


// DENIS
// for each tour
// gagne 1 point de rage
// après 4 points,le guerrier gagne 25% (* 1.25 ) d'attaque supplémentaire durant 1 tour 
// >>>> DENIS --->(après que les autres aient joués? quand un tour est il terminé?)
// retombe à 0 de rage et perd ce bonus à la fin du tour.








// ### Le mage
// - Propriétés :
//   >* nom
//   >* points de vie
//   >* points d'attaque
//   >* point de mana : chiffre qui sera aléatoirement imposé entre les suivants 7 , 9 ou 11.

// - Actions : (methode?)

//   >* defense
//   >* attaque


//   #### A Savoir sur le mage
//   >* Les attaques du mage lui coute 2 points quand il n'a plus assez de point de mana pour attaquer,il passe 1 tour sans attaquer et il récupère 7 points de mana


// NOTES DENIS
// for each???

// attaque: -2 points de mana

// if points de mana <= 0
// passe un tour (c'est à dire???? quand fini le tour?)

// après un tour
// + 7 points de mana





// ### L'archer
// - Propriétés :
//   >* nom;
//   >* points de vie
//   >* points d'attaque
//   >* nombre de flêches : chiffre qui sera aléatoirement imposé entre  7, 8 , 9 ,10 ,11.

// - Actions :  (methode?)
//   >* defense
//   >* attaque

//   #### A Savoir sur l'archer
//   >* les attaques de l'archer consomme deux flèches par tour et récupère une flèche chaque tour.Quand il n'a plus de flèches il passe un tour et récupère 6 flèches.


// NOTES DENIS
// for each
// attaquer = 2 flèches (par tour)
// + 1 flèche par tour
// if flèche <=0
// il passe un tour et récupère 6 flèches.

//   #### Attaque
//   >* Augmente de deux cinquième ( * 1.4 ) ses dégats d'attaque mais diminue d'un quart ses points de vie ( * 0.75 )

// un tour = quand les héors ont tous joués?
// ils jouent l'un après l'autre.




// NOTES DENIS
// for each Defense :
//   >* Diminue de moitié( * 0.5 ) ses dégats d'attaque mais augmente de deux fois et demi ses points de vie ( * 2.5 ).
//   >* Augmente de deux les chances d'être attaqué par le boss



// ### Les actions :  (methode?)
//   #### Defense :
//   >* Diminue de moitié( * 0.5 ) ses dégats d'attaque mais augmente de deux fois et demi ses points de vie ( * 2.5 ).
//   >* Augmente de deux les chances d'être attaqué par le boss

//   #### Attaque
//   >* Augmente de deux cinquième ( * 1.4 ) ses dégats d'attaque mais diminue d'un quart ses points de vie ( * 0.75 )






// ## A Savoir en général :
// >* Un boss est choisi aléatoirement parmis les trois, c'est vous qui aurez au préalable choisis ses caractéristiques




// >* Vous attribuez des valeurs aux propriétés des boss.

// >* L'utilisateur choisi le nom de chaque héros

// >* Vous devez fixer un total de point de vies et de points d'attaques que l'utilisateur lui devra distribuer entre ses héros.(faites en sorte qu'il y ait beaucoup d'interaction)

// >* L'utilisateur pourra choisir une posture 'attaque' ou 'défense' ou le mode 'normal' rien du tout avant le début du combat.

// >* Chaque tour les trois personnages attaque une fois le boss.

// >* Chaque tour le boss attaque au hasard un des personnages




// ## Bonus :
// ... (2 lines left)