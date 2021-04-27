const express = require("express");

const promoController = require("../controllers/promoController");

const promoRouter = express.Router();

promoRouter.get("/", promoController.findAll);
promoRouter.get("/:id", promoController.findOne); //isAuth
promoRouter.post("/", promoController.addOne);

module.exports = promoRouter;