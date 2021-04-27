const express = require("express");

const userController = require("../controllers/userController");

const authRouter = express.Router();

authRouter.get("/signup", userController.signup);
authRouter.post("/signup", userController.newAccount);
authRouter.get("/login", userController.login);
authRouter.post("/login", userController.authenticate);
authRouter.get("/logout", userController.logout);

module.exports = authRouter;