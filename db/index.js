// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
require("dotenv/config")

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";



  mongoose
    .connect(`mongodb+srv://${process.env.MG_USER}:${process.env.MG_PWD}@cluster0.sexab.mongodb.net/DronesLab?retryWrites=true&w=majority`)
    .then((x) => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    })
    .catch((err) => {
      console.error("Error connecting to mongo: ", err);
    });



