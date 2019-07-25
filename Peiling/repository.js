"use strict"

class Repository {
    constructor() {
        this.beerCollection = [];
    }

     save(beer1, beer2, beer3) {
         this.beerCollection.push(beer1, beer2, beer3);
    }

    async findall() {
        return this.beerCollection;
    }


     findBeerByName(name) {
        for (let beer of this.beerCollection) {
            if (beer.name === name) {
                return beer;
            }
        }

        throw new Error(`${name} does not exist`)
    }
}



const repo = new Repository();
module.exports = repo;
