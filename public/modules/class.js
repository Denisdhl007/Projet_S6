import {EnigmesSolutions, guerrier1, mage1, archer1} from "./instances.js"

//création de Personnage
export class personnage {
    constructor(nom, ptVie, ptAttaque) {
        this.nom = nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque; 
    }
    defense() {
        console.log(`${this.nom} se met en position de défense, il n'attaque pas. ${this.nom} gagne des points de vie et des points d'attaque.`);
        this.ptVie *= 2.5;
        this.ptAttaque*=0.5;
    }
}
//Boss{
export class boss extends personnage {
    constructor(nom, ptVie, ptAttaque, enigmes) {
        super(nom, ptVie, ptAttaque);
        this.enigmes = enigmes;
    }
    enigme() {
        let randomEnigma = EnigmesSolutions[Math.floor(Math.random() * EnigmesSolutions.length)];
        for (let i = 0; i < 3; i++) {
            let attempt = prompt(`Essai n°${i+1}: ${randomEnigma.prompt}`);
            if (attempt == randomEnigma.solution) {
                alert(`Bonne réponse! vos héros ont gagnés et ${this.nom} est mort.`);
                return true;
            } else {
                alert(`Mauvaise réponse. Nouvel essai`);
            }
        }
        alert(`Malgré trois essais, la partie est terminée`);
        
// reset des points de vie pour une nouvelle partie
        guerrier.ptVie==0;
        mage.ptVie==0;
        archer.ptVie==0;
        return false;
    }
    attaqueBoss(){
        let tab = [guerrier1, mage1, archer1];
        let randomHero = tab[Math.floor(Math.random() * tab.length)];
        console.log(`${this.nom} attaque ${randomHero.nom} et inflige ${this.ptAttaque} points de dégâts`);
        console.log(`Il reste ${randomHero.ptVie} point de vie à ${randomHero.nom}`);
        randomHero.ptVie -= this.ptAttaque;
        
    }
}

export class enigma {
    constructor(prompt, solution) {
        this.prompt = prompt;
        this.solution = solution;
    }
}

export class guerrier extends personnage{
    constructor(nom, ptVie, ptAttaque, defense) {
        super(nom, ptVie, ptAttaque, defense);
        this.PtRage = 0;
    }
    attaqueGuerrier(cible){
        if (this.ptRage == 4) {
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

export class mage extends personnage {
    constructor(nom,ptVie,ptAttaque, defense){
        super(nom, ptVie, ptAttaque,defense);
        this.mana = [7, 9, 11][Math.floor(Math.random() * 3)];
    }    
    attaqueMage(cible) {
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

export class archer extends personnage{
    constructor(nom, ptVie, ptAttaque, defense) {
        super(nom, ptVie, ptAttaque, defense);
        this.arrows = [7, 8, 9, 10, 11][Math.floor(Math.random() * 5)];
    }
    attaqueArcher(cible) {
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