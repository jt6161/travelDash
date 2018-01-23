//Update the name of the controller below and rename the file.
const users = require( "../controllers/users.js" )
const trips = require( "../controllers/trips.js" )
module.exports = function ( app ) {


    //HOME:
    app.get( '/', users.index );

    app.post( '/users', users.addOne );

    //TRIPS:
    app.get( '/', trips.index );
}