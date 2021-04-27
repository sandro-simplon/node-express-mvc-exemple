const express = require("express");

const isAuth = require('../middlewares/isAuth');

const promoController = require("../controllers/promoController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", promoController.findAll);
router.get("/promos/:id", isAuth, promoController.findOne);
router.post("/promos", promoController.addOne);

router.get("/signup", userController.signup);
router.post("/signup", userController.newAccount);
router.get("/login", userController.login);
router.post("/login", userController.authenticate);
router.get("/logout", userController.logout);

router.use("*", (request, response) => {
  response.status(404).json({
    message: "La ressource demandée est introuvable."
  })
});

module.exports = router;