const knex = require( "../db/knex.js" );

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
    index: function ( req, res ) {
        res.render( 'home' );
    },
    addOne: ( req, res ) => {
        knex( 'users' )
            .insert( req.body, '*' )
            .then( ( user ) => {
                req.session.user = user[ 0 ].id
                req.session.save( () => {
                    res.redirect( '/trips' )
                } )

            } )
    }
}