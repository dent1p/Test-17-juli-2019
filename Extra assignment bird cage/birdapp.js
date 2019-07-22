"use strict"

const Bird = require('./module/bird.js');
const bird = require('./module/birdcage.js');

let bird1 = new Bird('Mark', 1, 'black');
let bird2 = new Bird('Jeroen', 2, 'orange');
let bird3 = new Bird('Sieneke', 3, 'blue');

bird.save(bird1, bird2, bird3);

console.log(bird.findall());

// Ik weet niet of de overige methoden in birdrepository
// dus wil dat graag samen met Raymond overleggen