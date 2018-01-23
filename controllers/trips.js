const knex = require( "../db/knex.js" );

module.exports = {

    index: ( req, res ) => {
        knex( 'flights' )
            .then( ( dbFlights ) => {
                if ( req.session.user ) {
                    knex( 'users' )
                        .where( 'id', req.session.user )
                        .then( ( dbRes ) => {
                            res.render( 'trips', { user: dbRes[ 0 ], flights: dbFlights } )
                        } )
                } else {
                    res.render( 'trips', { user: {}, flights: dbFlights } )
                }

            } )
    },
    create: ( req, res ) => {
        knex( 'trips' )
            .insert( req.body, '*' )
            .then( () => {
                res.redirect( '/trips' )
            } )
    }
}