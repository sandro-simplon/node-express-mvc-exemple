const express = require("express");

const promoController = require("../controllers/promoController");

const router = express.Router();

router.get("/", (request, response) => {
  const promos = promoController.findAll();
  response.render("home.ejs", { promos });
});

module.exports = router;