const { response } = require("express");
const Promo = require("../models/promo");

exports.findAll = () => {
  const promos = Promo.getAll();
  console.log(promos);
}