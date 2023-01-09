export class Boss {
    constructor(nom,nbPtsVie,nbPtsAttaques){
        this.nom = nom;
        this.nbPtsVie = nbPtsVie;
        this.nbPtsAttaques = nbPtsAttaques;
    }
    Duel(Héros, Enigme){
        if (this.nbPtsvie <= (this.nbPtsvie*0,2)){ 
            // je ne vois pas comment ni où le nombre de point de vie va diminuer pour l'instant. il faut comparer le nombre de point de vie produit par le jeu et le nombre de point de vie initial et évaluer si le nouveau point de vie est <= à 20% du nombre de point de vie initial.
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
        let tab = [guerrier, mage, archer];
        let randomItem = tab[Math.floor(Math.random() * tab.length)];
        console.log(`${this.nom} attaque ${randomItem.nom} et inflige ${this.pointsDAttaque} points de dégâts`);
        randomItem.pointsDeVie -= this.pointsDAttaque;
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
        console.log(`${this.nom} se met en défense et il augmente ses points de vie de 250%`);
        this.pointsDeVie = 2.5;
        this.pointsDAttaque= 0.5;
    }
    attack() {
        if (this.arrows < 2) {
            console.log(`Vous n'avez Pas assez de flèches. Votre archer passe son tour.`);
            this.arrows += 6;
        } else {
            this.arrows -= 2;
            this.health -= this.attack;
        }
    }
}

export class Archer extends Héros{
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        super(nom,nbPtsVie,nbPtsAttaques,poste,mode);
        this.nbFleches = 0;
    }
    defense() {
        console.log(`${this.nom} se met en défense et gagne 1 point de rage`);
        this.pointDeRage++;
    }
    attaque(cible) {
        if (this.pointDeRage >= 4) {
            this.pointsDAttaque *= 1.25;
            this.pointDeRage = 0;
            console.log(`${this.nom} entre en mode rage et gagne 25% d'attaque supplémentaire pour ce tour`);
        }
        super.attaque(cible);
    }
}
export let nbFlechesArray = [7,8,9,10,11];


export class Mage extends Héros {
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        super(nom,nbPtsVie,nbPtsAttaques,poste,mode);
        this.Mana = 0;
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
export let HérosArray = [`Guerrier`,`Mage`,`Archer`];

/* */

export class Enigme {
    constructor(enigmeQ, enigmeA){
        this.enigmeQ = enigmeQ;
        this.enigmeA = enigmeA;
    }
    enigmeQuestion(){
        let rand = Math.floor(Math.random()*enigmeArray.length);
        let ask = prompt(enigmeArray[rand].enigmeQ);
    }
}


