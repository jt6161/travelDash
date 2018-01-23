const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    res.render('home');
  },
  addOne: (req, res) => {
    knex('users')
      .insert(req.body)
      .then(() => {
        res.redirect('/trips')
      })
  }

}