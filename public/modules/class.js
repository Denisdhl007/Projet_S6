export class Boss {
    constructor(nom,nbPtsVie,nbPtsAttaques){
        this.nom = nom;
        this.nbPtsVie = nbPtsVie;
        this.nbPtsAttaques = nbPtsAttaques;
    }
    Duel(Héros, Enigme){
        if (this.vie <= (this.vie/20)*100){
            let i = 0;
        
            do {
                i++;
        
                Enigme.enigmeQ();
        
            } while (i = 7 || ask == enigmeArray[rand].enigmeA);
        
            switch (true){
                case i <= 2:
                    this.vie = 0;
                    console.log(`${Héros.nom} a vaincu ${this.nom}`);
                    break;
        
                case i >= 3:
                    perso.vie = 0;
                    console.log(`${Héros.nom} n'a plus que ${Héros.vie} points de vie, ${Héros.nom} est mort.`);
                    break;
            }
        }
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
