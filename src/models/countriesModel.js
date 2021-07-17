const mongoose = require("mongoose")
const Country = mongoose.Schema ({
    name: String,
    capital: String, 
    population: String,
    language: String,
    volcanos: Boolean,
})

module.exports = mongoose.model("country", Country)