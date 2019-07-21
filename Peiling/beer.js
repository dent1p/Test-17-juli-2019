"use strict"

class Beer {
    constructor(name,size){
        this.name = name;
        this.size = size;
    }

    findBeerByName(name) {
        if(this.name === name){
            return name
        }
        else{
            throw new Error(`${name} does not exist`)
        }
    }
}



module.exports = Beer;