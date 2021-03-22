const db = require("../db");

class Promo {
  constructor(props) {
    const {name} = props;

    this.name = name;
  }

  static getAll() {
    db.query("SELECT * FROM promos", (error, result) => {
      if (error) {
        console.log("error: ", error);
        throw error;
      }

      // console.log("Les promos: ", result);
      return result;
    })
  }
}

module.exports = Promo;