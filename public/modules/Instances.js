// import {Boss, Guerrier, Mage, Archer, Enigma}
import * as CLASS from "./class.js";

// Boss
export let Sauron = new CLASS.boss (`Sauron`,1000,20);
export let Chronos = new CLASS.boss (`Chronos`,1000,40);
export let Lilith = new CLASS.boss (`Lilith`,1000,30);

//choix du boss
export let tabBoss= [Sauron, Chronos, Lilith];
export let index = Math.floor(Math.random() * tabBoss.length);
export let chosenBoss = tabBoss[index];

//export Héros
export let guerrier1 = new CLASS.guerrier ("guerrier", 100, 1000);
export let mage1 = new CLASS.mage ("mage", 80, 1000);
export let archer1 = new CLASS.archer ("archer", 50, 5000);

//export tableau des Héros
export let HerosTab = [guerrier1, mage1, archer1];

//export Enigme
export const EnigmesSolutions = [
    new CLASS.enigma(`Plus elle est grande, moins on la voit. Qui est-elle ?`,`L obscurité`),
    new CLASS.enigma(`Sitôt que l on me nomme je n existe plus. Qui suis-je ?`, `le silence`),
    new CLASS.enigma(`Qu'est ce qui est petit, carré et blanc ?`,`un petit carré blanc`),
    new CLASS.enigma(`J'ai la tête rouge ou rose lorsque je suis parmi mes semblables. Une fois utilisée ma tête est noire. Qui suis-je ?`, `Une allumette`),
    new CLASS.enigma(`J'apparais au début de la nuit et à la fin du matin. On me retrouve également deux fois dans une année. Qui suis-je ?`, `la lettre n`),
    new CLASS.enigma(`Sans moi "Paris" serait "pris". Qui suis je ?`, `la lettre a`),
    new CLASS.enigma(`Je suis à l'abri et cependant toujours humide. Qui suis je ?`, `la langue`)
];
