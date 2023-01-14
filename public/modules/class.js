import {enigmas,guerrier,mage,archer} from "./instance.js";

//création de Personnage
export class Personnage {
    constructor(nom, ptVie, ptAttaque) {
        this.nom = nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque; 
    }
}
//Boss{
export class Boss extends Personnage {
    constructor(nom, ptVie, ptAttaque, enigmes) {
        super(nom, ptVie, ptAttaque);
        this.enigmes = enigmes;
    }
    enigmea() {
        let enigma = enigmas[Math.floor(Math.random() * enigmas.length)];
        for (let i = 0; i < 3; i++) {
            let attempt = prompt(`Essai n°${i+1}: ${enigma.prompt}`);
            if (attempt == enigma.solution) {
                alert(`Bonne réponse! vos héros ${Héros.nom}, ${Héros.nom}, ${Héros.nom}, ont gagnés et ${cible} est mort.`);
                return true;
            } else {
                alert(`Mauvaise réponse. Nouvel essai`);
            }
        }
        alert(`Malgré trois essais, la partie est terminée`);
        
// reset des points de vie poru une nouvelle partie
        guerrier.pointsDeVie==0;
        mage.pointsDeVie==0;
        archer.pointsDeVie==0;
        return false;
    }
    attaqueBoss(){
        let tab = [guerrier, mage, archer];
        let randomHero = tab[Math.floor(Math.random() * tab.length)];
        console.log(`${this.nom} attaque ${randomHero.nom} et inflige ${this.ptAttaque} points de dégâts`);
        console.log(`Il reste ${randomHero.ptVie} point de vie à ${randomHero.nom}`);
        randomHero.ptVie -= this.ptAttaque;
        
    }
}

// constructor(enigmeQ, enigmeA){
//     this.enigmeQ = enigmeQ;
//     this.enigmeA = enigmeA;
// }
// enigmeQuestion(){
//     let rand = Math.floor(Math.random()*enigmeArray.length);
//     let ask = prompt(enigmeArray[rand].enigmeQ);
// }
// }

export class Enigma {
    constructor(prompt, solution) {
        this.prompt = prompt;
        this.solution = solution;
    }
}

export class Guerrier extends Personnage{
    constructor(nom, ptVie, ptAttaque) {
        super(nom, ptVie, ptAttaque);
        this.PtRage = 0;
    }
    defenseGuerrier() {
        console.log(`${this.nom} se met en position de défense et gagne 1 point de rage`);
        this.ptVie *= 2.5;
        this.ptAttaque*=0.5;
    }

    AttaqueGuerrier(cible){
        if (this.pteRage == 4) {
            cible.ptVie-=this.ptAttaque*1.25;
            this.ptRage=0;
            console.log(`${this.nom} entre en rage et inflige ${this.ptAttaque*1.25} point de dégat à son adversaire`);
            console.log(`${cible.nom} a encore ${cible.ptVie} point de vie.`);
        }else{
            cible.ptVie-=this.ptAttaque;
            console.log(`${this.nom} a infligé ${this.ptAttaque} point de dégat.`);
            console.log(`${cible.nom} a encore ${cible.ptVie} point de vie.`);
            this.ptRage++;
        }
    }
}

export class Mage extends Personnage {
    constructor(nom,ptVie,ptAttaque){
        super(nom,ptVie,ptAttaque);
        this.mana = [7, 9, 11][Math.floor(Math.random() * 3)];
    }
    defense() {
        console.log(`${this.nom} se met en position de défense, il n'attaque pas. ${this.nom} gagne des points de vie et des points d'attaque.`);
        this.ptVie *= 2.5;
        this.ptAttaque*=0.5;
    }
    
    AttaqueMage(cible) {
    if (this.mana < 2) {
        console.log(`${this.nom} n'a pas assez de mana pour attaquer. ${this.nom} passe son tour.`);
        this.mana += 7;
    } else {
        this.mana -= 2;
        cible.ptVie-=this.ptAttaque;
        console.log(`${this.nom} a infligé ${this.ptAttaque} point de dégat.`);
        console.log(`${cible.nom} a encore ${cible.ptVie} point de vie.`);
        }
    }
}

/* */

export class Archer extends Personnage{
    constructor(nom, ptVie, ptAttaque) {
        super(nom, ptVie, ptAttaque);
        this.arrows = [7, 8, 9, 10, 11][Math.floor(Math.random() * 5)];
    }

    defense() {
        console.log(`${this.nom} se met en défense`);
        this.ptVie = 2.5;
        this.ptAttaque= 0.5;
    }
    AttaqueArcher(cible) {
        if (this.arrows < 2) {
            console.log(`Pas assez de flèches. L'archer passe son tour.`);
            this.arrows += 6;
        } else {
            this.arrows -= 2;
            cible.ptVie -= this.ptAttaque;
            this.arrows++;
            console.log(`${this.nom} a infligé ${this.ptAttaque} au boss`);
            console.log(`${cible.nom} a encore ${cible.ptVie} point de vie.`);
        }
    }
}