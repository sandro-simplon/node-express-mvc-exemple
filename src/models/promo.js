const db = require("../db");

exports.getAll = (callback) {
  db.query("SELECT * FROM promos;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}