// //initialisation de partie

// const originalText = document.getElementById("originalText");
// function changeText() {
//     originalText.innerHTML = "Bienvenue dans cette partie de Geek of Legends. Une partie de jeu est composée d'un Boss et de TROIS héros";
// }
// setTimeout(changeText, 2000);


// const originalText1 = document.getElementById("originalText1");
// function changeText1() {
//     originalText.innerHTML = "Vous avez un Boss à défier aléatoirement. Chaque tour, le boss attaque aléatoirement un de vos personnages";
// }
// setTimeout(changeText1, 8000);

// const originalText2 = document.getElementById("originalText2");
// function changeText2() {
//     originalText.innerHTML = "Commençons par renommer vos héros!";
// }
// setTimeout(changeText2, 13000);

alert(`Bienvenue dans cette partie de Geek of Legends. Une partie de jeu est composée d'un Boss et de TROIS héros.`);
alert("Vous avez un Boss à défier aléatoirement. Chaque tour, le boss attaque aléatoirement un de vos personnages.");
alert("Commençons par renommer vos héros!");





// // import Instances
import * as INSTANCE from "./modules/instances.js";


// setTimeout(function(){
//     document.getElementById("div2_1").style.visibility = "visible";
//   }, 15000);

// const questionnaire1_1 = document.getElementById("questionnaire1_1");
// function questionnaire1() {
//     questionnaire1_1.innerHTML = "Comment appelez vous votre Guerrier ?";
// }
// setTimeout(questionnaire1, 15000);

// let submitButton = document.getElementById("mySubmit");
// let inputValue = document.getElementById("questionnaire2_1").value;

// submitButton.addEventListener("click", function() {
//   console.log(inputValue);
//   alert(inputValue);
// });


// setTimeout(function(){
//     document.getElementById("div2_2").style.visibility = "visible";
//   }, 18000);

// const questionnaire1_2 = document.getElementById("questionnaire1_2");
// function questionnaire2() {
//     questionnaire1_2.innerHTML = "Comment appelez vous votre Mage ?";
// }
// setTimeout(questionnaire2, 18000);


// setTimeout(function(){
//     document.getElementById("div2_3").style.visibility = "visible";
//   }, 21000);

// const questionnaire1_3 = document.getElementById("questionnaire1_3");
// function questionnaire3() {
//     questionnaire1_3.innerHTML = "Comment appelez vous votre Archer ?";
// }
// setTimeout(questionnaire3, 21000);


// // import Héro
INSTANCE.guerrier1.nom=(prompt(`Comment appelez vous votre Guerrier ?`));
INSTANCE.mage1.nom=(prompt(`Comment appelez vous votre Mage ?`));
INSTANCE.archer1.nom=(prompt(`Comment appelez vous votre Archer ?`));
console.log(INSTANCE.guerrier1);
console.log(INSTANCE.mage1);
console.log(INSTANCE.archer1);

// Point de vie à attribuer auxhéros.
let vie = Number(`500`);

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