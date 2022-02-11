const express = require('express');
const app = require("../app");
const router = express.Router();
require("../db/index")
const Drone = require('../models/Drone.model')


// require the Drone model here
require("../models/Drone.model")




router.get('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id
  Drone.findById(id)
  .then((drone)=>{
    
    res.render("../views/drones/update-form", drone)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  const id = req.params.id
  const name = req.body.name;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;
  Drone.findOneAndUpdate(id, {name,propellers,maxSpeed})
    .then(()=>{
      res.redirect("/drones")
    })
});

router.post('/drones/:id/delete', (req, res, next) => {
  const id = req.params.id
  Drone.findByIdAndDelete(id)
  .then(()=>{
    res.redirect("/drones")
  })
  // Iteration #5: Delete the drone
  // ... your code here
});

router.get('/drones/create', (req, res, next) => {
  res.render("../views/drones/create-form")
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {

  const name = req.body.name;
  const propellers = req.body.propellers;
  const maxSpeed = req.body.maxSpeed;
  
    Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect("/drones"))
    .catch((error) => `Error while creating a new drone: ${error}`);
 
});






router.get('/drones', (req, res, next) => {
  Drone.find()
  .then(drones=>{
    res.render("../views/drones/list.hbs", {drones})
  })
});


module.exports = router;
