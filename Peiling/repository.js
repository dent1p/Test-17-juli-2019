"use strict"

class Repository{
    constructor(){
        this.beerCollection = [];
    }

    save(beer1,beer2,beer3){
        this.beerCollection.push(beer1,beer2,beer3);
        } 

    async findall() {
       return this.beerCollection;
    }    

    
}

// const repo = new Repository();
module.exports = Repository
