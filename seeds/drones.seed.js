// Iteration #1
const mongoose = require('mongoose');
require('../db/index');
const Drone = require('../models/Drone.model');

const drones = [
    { name: "PEDRAZO ROCK ONE", propellers: 3, maxSpeed: 12 },
    { name: "PEDRAZO ROCK TWO", propellers: 4, maxSpeed: 20 },
    { name: "PEDRAZO ROCK THREE", propellers: 6, maxSpeed: 18 }
  ];


Drone.create(drones)
.then(dronesFromDb =>{
    console.log("Created", dronesFromDb.length,"drones");    
}).catch(err => console.log(`An error occurred while creating drones: ${err}`));