const express = require('express')
const router = express.Router()

//Home Page Route
router.get("/", function(req, res) {
    res.send("Wiki home page")
})

//About Page Route
router.get("/about", function(req, res){
    res.send("About this wiki")
})

module.exports = router