exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'flights' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'flights' ).insert( [
                { start: 'Phoenix', destination: 'Las Vegas', airline_id: 1 },
                { start: 'Cleveland', destination: 'Newark', airline_id: 2 },
                { start: 'Hawaii', destination: 'Los Angeles', airline_id: 4 },
                { start: 'Itay', destination: 'St. Louis', airline_id: 3 },
                { start: 'Houston', destination: 'Boise', airline_id: 5 }
      ] );
        } );
};