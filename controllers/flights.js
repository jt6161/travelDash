const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    res.render('airlinesLogin');
  },

  create: (req, res) => {
    knex('flights')
      .insert({
        start: req.body.start,
        destination: req.body.destination
      })
      .then(() => {
        res.redirect('/')
      })
  },

}