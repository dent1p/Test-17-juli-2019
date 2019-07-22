
"use strict"


class BirdRepository{

    constructor(){
        this.birdcollection = [];

    }

    save(bird1, bird2, bird3){
        return this.birdcollection.push(bird1, bird2, bird3);
    }

    findAll(){
        return this.birdcollection;
    }

    findById(id){
        if (this.birdcollection.id === id){
            return id;
        }
        else{
            throw new Error(`${id} does not exist in birdcollection`)
        }
    }

    count(){
        return this.birdcollection++;
    }

    findbyColor(color){
        for(let bird of this.birdcollection){
                if (bird.color === color){
                return color;
            }
        }
    }   
}

const birdrepo = new BirdRepository;
module.exports = birdrepo;