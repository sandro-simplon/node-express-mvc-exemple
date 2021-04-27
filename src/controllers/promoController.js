const Promo = require("../models/promo");

exports.findAll = (request, response) => {
  const { user, query } = request;

  Promo.getAll(query, (error, promos) => {
    if (error) {
      response.status(500).json({
        message: "Le serveur est cassé."
      });
    } else {
      response.status(200).json({
        promos
      });
    }
  });
}

exports.findOne = (request, response) => {
  const { id } = request.params;
  const { user } = request;

  Promo.getOne(id, (error, result) => {
    if (error) {
      response.send(error.message);
    } else {
      const students = result;

      const promoObject = {
        id: students[0].promo_id,
        name: students[0].name,
        students: students.map((student) => {
          const { id, first_name, last_name } = student;
          return {
            id,
            first_name,
            last_name
          };
        })
      };
      response.status(200).json(promoObject);
    }
  });
}

exports.addOne = (request, response) => {
  Promo.create(request.body, (error, result) => {
    if (error) {
      response.status(500).json({
        message: "Le serveur est cassé."
      });
    } else {
      response.status(201).json(result);
    }
  })
}