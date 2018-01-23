const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    if (req.session.user) {
      knex('users')
        .where('id', req.session.user)
        .then((dbRes) => {
          res.render('trips', { user: dbRes[0] })
        })
    } else {
      res.render('trips', { user: {} })
    }
  },


}