"use strict"

const Bird = require('./bird.js');
const birdrepo = require('./birdcage.js');

let bird1 = new Bird('Mark', 1, 'orange');
let bird2 = new Bird('Jeroen', 2, 'black');
let bird3 = new Bird('Sieneke', 3, 'black');

birdrepo.save(bird1, bird2, bird3);
console.log(birdrepo.findAll());

// const findID = birdrepo.findById(4);
// console.log(findID);

const countSize = birdrepo.count() 
console.log(countSize);

birdrepo.findbyColor('black');


