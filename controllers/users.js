const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    res.render('home');

  },
  create: (req, res) => {
    knex('users')
      .insert(req.body, '*')
      .then((user) => {
        req.session.user = user[0].id
        req.session.save(() => {
          res.redirect('/trips')
        })
      })
  }

}