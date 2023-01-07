// exports boss
import {Boss} from "./class.js";
export let Sauron = new Boss (`Sauron`,100,20)
export let Chronos = new Boss (`Chronos`,100,20)
export let Lilith = new Boss (`Lilith`,120,30)




//export heros
import {Héros} from "./class.js";
export let Guerrier = new Guerrier ("string","number","number","guerrier","string");
export let Mage = new Mage ("string","number","number","mage","string");
export let Archer = new Archer ("string","number","number","archer","string");

export let herosArray = [Guerrier,Mage,Archer];

export let ChoixHeros = [Mage, Guerrier, Archer];
export let index = Math.floor(Math.random() * ChoixHeros.length);
export let chosenHero = ChoixHeros[index];
console.log(chosenHero);




import {Enigme} from "./class.js";
export let enigme_a = new Enigme(`Plus elle est grande, moins on la voit. Qui est-elle ?`,`L’obscurité`);
export let enigme_b = new Enigme(`Sitôt que l’on me nomme je n’existe plus. Qui suis-je ?`, `le silence`);
export let enigme_c = new Enigme(`Qu'est ce qui est petit, carré et blanc ?`,`un petit carré blanc`);
export let enigme_d = new Enigme(`J'ai la tête rouge ou rose lorsque je suis parmi mes semblables. Une fois utilisée ma tête est noire. Qui suis-je ?`, `Une allumette`);
export let enigme_e = new Enigme(`J'apparais au début de la nuit et à la fin du matin. On me retrouve également deux fois dans une année. Qui suis-je ?`, `la lettre n`);
export let enigme_f = new Enigme(`Sans moi "Paris" serait "pris". Qui suis je ?`, `la lettre a`);
export let enigme_g = new Enigme(`Je suis à l'abri et cependant toujours humide. Qui suis je ?`, `la langue`);
export let enigmeArray = [enigme_a,enigme_b,enigme_c,enigme_d,enigme_e,enigme_f,enigme_g];