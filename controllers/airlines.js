const knex = require( "../db/knex.js" );

module.exports = {

    index: ( req, res ) => {


    },
    create: ( req, res ) => {
        knex( 'airlines' )
            .insert( {
                airline_name: req.session.airline,
                airline_description: req.session.airline_description,
            } )
            .then( ( airlinenew ) => {
                req.session.airline = airline[ 0 ].id
                req.session.save( () => {
                    res.render( 'airline/new' )
                } )
            } )

    }

}