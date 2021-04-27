const db = require("../db");

exports.getAll = (filters, callback) => {
  console.log(filters);

  let query = "SELECT * FROM promos";

  if (filters.name) {
    query = `${query} WHERE name = '${filters.name}';`
    console.log(query);
  }

  db.query(query, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.getOne = (id, callback) => {
  db.query(`SELECT * FROM promos INNER JOIN students ON promos.id = students.promo_id WHERE promos.id = ${id};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.create = (promo, callback) => {
  db.query(`INSERT INTO promos (name) VALUES ("${promo.name}");`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}