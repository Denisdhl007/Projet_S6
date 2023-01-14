export class Boss {
    constructor(nom,nbPtsVie,nbPtsAttaques){
        this.nom = nom;
        this.nbPtsVie = nbPtsVie;
        this.nbPtsAttaques = nbPtsAttaques;
    }
    Duel(Héros, Enigme){
        if (this.nbPtsvie <= (this.nbPtsvie*0,2)){ 
            let i = 0;
        
            do {
                i++;
                Enigme.enigmeQ();    
            } while (i = 7 || ask == enigmeArray[rand].enigmeA);
        
            switch (true){
                case i <= 2:
                    this.nbPtsvie = 0;
                    console.log(`${Héros.nom} a vaincu ${this.nom}`);
                    break;
        
                case i >= 3:
                    perso.nbPtsvie = 0;
                    console.log(`${Héros.nom} n'a plus que ${Héros.nbPtsvie} points de vie, ${Héros.nom} est mort.`);
                    break;
            }
        }
    }
    attaque(){
        // let HerosTab = [Guerrier, Mage, Archer];
        let randomItem = tab[Math.floor(Math.random() * tab.length)];
        console.log(`${this.nom} attaque ${randomItem.nom} et inflige ${this.nbPtsVie} points de dégâts de vie`);
        randomItem.nbPtsVie -= this.nbPtsAttaques;
    }
}



/* */

export class Héros {
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        this.nom = nom;
        this.nbPtsVie = nbPtsVie;
        this.nbPtsAttaques = nbPtsAttaques;
        this.mode = mode;
        this.poste = poste;
    }
}
export class Guerrier extends Héros {
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        super(nom,nbPtsVie,nbPtsAttaques,poste,mode);
        this.nbPtRage = 0;
    }
    defense() {
        console.log(`${this.nom} se met en position de défense et gagne 1 point de rage`);
        this.pointDeRage++;
    }
    attaque(cible) {
        if (this.nbPtRage >= 4) {
            this.nbPtsAttaques *= 1.25;
            this.nbPtRage = 0;
            console.log(`${this.nom} entre en rage et gagne 25% d'attaque supplémentaire pour ce tour`);
        }
        super.attaque(cible);
    }
}

export class Archer extends Héros{
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        super(nom,nbPtsVie,nbPtsAttaques,poste,mode);
        this.nbFleches = 0;
    }

    defense() {
        console.log(`${this.nom} se met en position de défense et augmente ses points de vie de 250%`);
        this.nbPtsVie = 2.5;
        this.nbPtsAttaques= 0.5;
    }
    attack() {
        if (this.arrows < 2) {
            console.log(`Pas assez de flèches. L'archer passe son tour.`);
            this.arrows += 6;
        } else {
            this.arrows -= 2;
            this.health -= this.attack;
        }
    }
}
export let nbFlechesArray = [7,8,9,10,11];


export class Mage extends Héros {
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        super(nom,nbPtsVie,nbPtsAttaques,poste,mode);
        this.mana = 0;
    }
    defense() {
        this.health -= 0.5 * this.attack;
    }
    attaque() {
    if (this.mana < 2) {
        console.log("Il n'y a paas assez de mana pour attaquer. Le mage passe son tour.");
        this.mana += 7;
    } else {
        this.mana -= 2;
        this.health -= this.attack;
        }
    }
}
export let ManaArray = [7,9,11];
export let HerosTab = [`Guerrier`,`Mage`,`Archer`];

/* */


    constructor(enigmeQ, enigmeA){
        this.enigmeQ = enigmeQ;
        this.enigmeA = enigmeA;
    }
    enigmeQuestion(){
        let rand = Math.floor(Math.random()*enigmeArray.length);
        let ask = prompt(enigmeArray[rand].enigmeQ);
    }
}

