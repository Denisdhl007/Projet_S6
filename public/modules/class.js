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
}


/* */

// export class Héros {
//     constructor(nom,nbPtsVie,nbPtsAttaques,nbPtRage,nbPtMana,nbFleche){
//         this.nom = nom;
//         this.nbPtsVie = nbPtsVie;
//         this.nbPtsAttaques = nbPtsAttaques;
//         this.nbPtRage = nbPtRage;
//         this.nbPtMana = nbPtMana;
//         this.nbFleche = nbFleche;
//     }
//     defense(){
//     }
//     attaque(){
//     }
// }



class Héros {
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        this.nom = nom;
        this.nbPtsVie = nbPtsVie;
        this.nbPtsAttaques = nbPtsAttaques;
        this.mode = mode;
        this.poste = poste;
    }
}


class Guerrier extends Hero {
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        super(nom,nbPtsVie,nbPtsAttaques,poste,mode);
        this.nbPtRage = 0;
    }
    competence(){
        this.rage++;

        if (this.nbPtRage == 4) {
            this.nbPtsAttaque = this.nbPtsAttaque*1.25;
            this.nbPtRage = 0;
        }
    }
}


class Archer extends Hero{
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        super(nom,nbPtsVie,nbPtsAttaques,poste,mode);
        this.nbFleches = 0;
    }

    competence(){
        this.nbFleches -= 2;
        this.nbFleche += 1;

        while (this.nbFleche <= 0) {
            herosArray.splice(herosArray.indexOf(this));
            this.nbFleches += 6;
        }
    }
}

export let nbFlechesArray = [7,8,9,10,11];


class Mage extends Hero {
    constructor(nom,nbPtsVie,nbPtsAttaques,poste,mode){
        super(nom,nbPtsVie,nbPtsAttaques,poste,mode);
        this.nbMana = 0;
    }

    competence(){
        this.nbMana -= 2;

        while (this.nbMana <= 0){
            herosArray.splice(herosArray.indexOf(this));
            this.nbMana += 7;
        }
    }
}

export let nbManaArray = [7,9,11];





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


