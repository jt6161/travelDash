exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'airlines' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'airlines' ).insert( [
                { airline_name: 'SouthWest', airline_description: 'Budget travel' },
                { airline_name: 'American', airline_description: 'Quality travel' },
                { airline_name: 'Jet Blue', airline_description: 'Low Budget travel' },
                { airline_name: 'NorthWest', airline_description: 'No Budget travel' },
                { airline_name: 'Korean Air', airline_description: 'Luxury travel' }

      ] );
        } );
};