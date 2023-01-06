export class Boss extends Héros {
    constructor(nom,nbPtsVie,nbPtsAttaques){
        this.nom = nom;
        this.nbPtsVie = nbPtsVie;
        this.nbPtsAttaques = nbPtsAttaques;
    }
    question(){

    }
}

export class Héros {
    constructor(nom,nbPtsVie,nbPtsAttaques,nbPtRage,nbPtMana,nbFleche){
        this.nom = nom;
        this.nbPtsVie = nbPtsVie;
        this.nbPtsAttaques = nbPtsAttaques;
        this.nbPtRage = nbPtRage;
        this.nbPtMana = nbPtMana;
        this.nbFleche = nbFleche;
    }
    defense(){
    }
    attaque(){
    }
}


export class Enigme {
    constructor(enigmeIntitu, enigmeRep){
        this.enigmeQ = enigmeQ;
        this.enigmeA = enigmeA;
    }
    enigmeQuestion(){
        let rand = Math.floor(Math.random()*enigmeArray.length);
        let ask = prompt(enigmeArray[rand].enigmeQ);
    }
}
