const Country = require("../models/countriesModel")

exports.createCountry = (req, res) => {
    new Country(req.body)
    .save()
    .then(() => res.status(200).send("created country."))
    .catch(err => console.error("could not create country.", err))
}

exports.updateCountry = (req, res) => {
    Country
    .findOneAndUpdate({name: req.params.name}, {$set: req.body})
    .then(() => res.status(200).send("updated country successfully."))
    .catch(err => console.error("could not update country.", err))
}

exports.deleteCountry = (req, res) => {
    Country
    .findOneAndDelete({name: req.params.name})
    .then(() => res.status(200).send("deleted country successfully."))
    .catch(err => console.error("could not delete country.", err))
}

exports.getOneCountry = (req, res) => {
    Country
    .findOne({capital: req.params.capital})
    .then(country => res.send(country))
    .catch(err => console.error("could not find country."))
}