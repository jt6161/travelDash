const knex = require("../db/knex.js");

module.exports = {

  index: (req, res) => {
    knex('trips')
      .where('user_id', req.session.user)
      .then((dbTrips) => {
        knex('flights')
          .then((dbFlights) => {
            if (req.session.user) {
              knex('users')
                .where('id', req.session.user)
                .then((dbRes) => {
                  res.render('trips', { user: dbRes[0], flights: dbFlights, trip: dbTrips })
                })
            } else {
              res.render('trips', { user: {}, flights: dbFlights, trip: dbTrips })
            }
          })
      })
  },
  create: (req, res) => {
    knex('trips')
      .insert({
        user_id: req.session.user,
        flight_id: req.body.flight_id,
        trip_description: req.body.trip_description,
        title: req.body.title
      }, '*')
      .then((trip) => {
        req.session.trip = trip[0].id
        req.session.save(() => {
          res.redirect('/trips')
        })
      })
  }


}