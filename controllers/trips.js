const knex = require( "../db/knex.js" );

module.exports = {

    index: ( req, res ) => {
        knex( 'trips' )
            .join( 'flights', 'trips.flight_id', 'flights.id' )
            .where( 'trips.user_id', req.session.user )
            .then( ( tripnew ) => {
                knex( 'users' )
                    .where( 'id', req.session.user )
                    .then( ( usernew ) => {
                        knex( 'flights' )
                            .then( ( flightnew ) => {
                                res.render( 'trips', { trip: tripnew, user: usernew[ 0 ], flights: flightnew } )
                            } )
                    } )
            } )
    },
    create: ( req, res ) => {
        knex( 'trips' )
            .insert( {
                user_id: req.session.user,
                flight_id: req.body.flight_id,
                trip_description: req.body.trip_description,
                title: req.body.title
            }, '*' )
            .then( ( trip ) => {
                req.session.trip = trip[ 0 ].id
                req.session.save( () => {
                    res.redirect( '/trips' )
                } )
            } )
    }

}