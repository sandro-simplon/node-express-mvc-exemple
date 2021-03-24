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

exports.findOne = (request, response) => {
  const { id } = request.params;

  Promo.getOne(id, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    const students = result;
    const promoName = result[0].name;

    response.render("promo.ejs", { promoName, students });
  });
}

exports.addOne = (request, response) => {
  Promo.create(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  })
}