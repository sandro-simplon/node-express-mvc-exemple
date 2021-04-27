const express = require("express");

const authRouter = require("./auth");
const promoRouter = require("./promo");

const router = express.Router();

router.get("/", (request, response) => {
  response.redirect("/promos");
});

router.use("/promos", promoRouter);
router.use(authRouter);

router.use("*", (request, response) => {
  response.status(404).json({
    message: "La ressource demandée est introuvable."
  })
});

module.exports = router;