const { response } = require("express");
const Promo = require("../models/promo");

exports.findAll = (request, response) => {
  Promo.getAll((error, promos) => {
    if (error) {
      response.send(error.message);
    }

    response.render("home.ejs", { promos });
  });
}