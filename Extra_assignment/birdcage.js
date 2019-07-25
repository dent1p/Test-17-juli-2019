
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
        for (let bird of this.birdcollection) {
            if (bird.id === id) {
                return id;
            }
        }        
            throw new Error(`${id} does not exist in birdcollection`);
    }

    count(){
        
        return this.birdcollection.length;
    }

    findbyColor(color){
        for (let bird of this.findAll()) {
            if (bird.color === color){
               console.log(bird);
            }
        }
    }
}

const birdrepo = new BirdRepository;
module.exports = birdrepo;