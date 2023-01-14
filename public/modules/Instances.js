// import {Boss, Guerrier, Mage, Archer, Enigma}
import * as CLASS from "./class.js";

// Boss
export let Sauron = new CLASS.Boss (`Sauron`,1000,20);
export let Chronos = new CLASS.Boss (`Chronos`,1000,40);
export let Lilith = new CLASS.Boss (`Lilith`,1000,30);
console.log(Sauron);
console.log(Chronos);
console.log(Lilith);

//choix du boss
export let tabBoss= [Sauron, Chronos,Lilith];
export let index = Math.floor(Math.random() * tabBoss.length);
export let chosenBoss = tabBoss[index];


//export Héros
export let Guerrier = new CLASS.Guerrier ("guerrier", 100, 1000);
export let Mage = new CLASS.Mage ("mage", 80, 1000);
export let Archer = new CLASS.Archer ("archer", 50, 5000);
console.log(Guerrier);
console.log(Mage);
console.log(Archer);

//export tableau des Héros
export let HerosTab = [`Guerrier`, `Mage`, `Archer`];

//export Enigme
export const enigmas = [
    new CLASS.Enigma(`Plus elle est grande, moins on la voit. Qui est-elle ?`,`L obscurité`),
    new CLASS.Enigma(`Sitôt que l on me nomme je n existe plus. Qui suis-je ?`, `le silence`),
    new CLASS.Enigma(`Qu'est ce qui est petit, carré et blanc ?`,`un petit carré blanc`),
    new CLASS.Enigma(`J'ai la tête rouge ou rose lorsque je suis parmi mes semblables. Une fois utilisée ma tête est noire. Qui suis-je ?`, `Une allumette`),
    new CLASS.Enigma(`J'apparais au début de la nuit et à la fin du matin. On me retrouve également deux fois dans une année. Qui suis-je ?`, `la lettre n`),
    new CLASS.Enigma(`Sans moi "Paris" serait "pris". Qui suis je ?`, `la lettre a`),
    new CLASS.Enigma(`Je suis à l'abri et cependant toujours humide. Qui suis je ?`, `la langue`)
];
