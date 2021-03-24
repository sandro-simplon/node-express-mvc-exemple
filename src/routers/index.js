const express = require("express");

const promoController = require("../controllers/promoController");

const router = express.Router();

router.get("/", promoController.findAll);
router.get("/promos/:id", promoController.findOne);
router.post("/promos", promoController.addOne);

module.exports = router;