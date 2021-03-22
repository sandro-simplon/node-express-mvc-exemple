const express = require("express");

const promoController = require("../controllers/promoController");

const router = express.Router();

router.get("/", promoController.findAll);

module.exports = router;