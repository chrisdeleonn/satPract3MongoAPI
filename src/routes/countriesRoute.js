const express = require("express")
const router = express.Router()
const countryController = require("../controllers/countriesController")

router.post("/addCountry", countryController.createCountry)
router.patch("/updateCountry/:name", countryController.updateCountry)
router.delete("/deleteCountry/:name", countryController.deleteCountry)
router.get("/getCapital/:capital", countryController.getOneCountry)

module.exports = router