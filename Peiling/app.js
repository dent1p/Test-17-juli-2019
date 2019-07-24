"use strict";



const Beer = require('./beer.js');
const repo = require('./repository.js')


let beer1 = new Beer('Leffe', 250);
let beer2 = new Beer('Heineken', 330);
let beer3 = new Beer(warsteiner, 220);

repo.save(beer1,beer2,beer3);
let beercollection = repo.findall();
console.log(beercollection)

async function print () {
	for (let beer of beercollection){
		console.log(beer.name)
	}
}

(async () => {
	await print();
})();

let biertje = await repo.findBeerByName(warsteiner);
 console.log(biertje);







