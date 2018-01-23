const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    knex('flights')
      .then((dbFlights) => {
        if (req.session.user) {
          knex('users')
            .where('id', req.session.user)
            .then((dbRes) => {
              res.render('trips', { user: dbRes[0], flights: dbFlights })
            })
        }
        res.render('trips', { user: {}, flights: dbFlights })
      })
  },
  planTrip: (req, res) => {
    knex('flights')
      .joins('airlines', 'airlines.id', 'airline_id')
      .then(() => {
        res.redirect('/trips')
      })
  }


}