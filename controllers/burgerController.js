const express = require("express");
const router = express.Router();// Import the model to use its db functions for burger.js
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});