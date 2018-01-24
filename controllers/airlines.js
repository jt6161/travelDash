const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    res.render('airlines');
  },

  create: (req, res) => {
    knex('airlines')
      .insert({
        airline_name: req.body.airline_name,
        airline_description: req.body.airline_description
      })
      .then(() => {
        res.redirect('/trips')
      })
  },

}