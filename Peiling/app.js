"use strict"

const Beer = require('./beer.js');
const Repository = require('./repository.js');

let beer1 = new Beer('Amstel', 250)
let beer2 = new Beer('Heineken', 330)
let beer3 = new Beer('Warsteiner', 220)

const repo = new Repository();
let beercollection = repo.save(beer1, beer2, beer3)
beercollection = repo.findall()


async function print () {
	for (let beer of await beercollection){
		console.log(beer.name)
	}
}

(async () => {
	await print();
})()

