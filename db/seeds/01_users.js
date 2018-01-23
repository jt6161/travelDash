exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'users' ).del()
        .then( function () {
            // Inserts seed entries
            return knex( 'users' ).insert( [
                { user_name: 'Nick D', email: 'nickd@aol.com', password: 'nickrulez' },
                { user_name: 'Nick G', email: 'nickg@aol.com', password: 'donny' },
                { user_name: 'Carlos A', email: 'carlos@aol.com', password: 'ballallday' },
                { user_name: 'Jenn T', email: 'jennT@aol.com', password: 'photoqueen' },
                { user_name: 'Troy A', email: 'troya@aol.com', password: 'pingpongwizard' }
      ] );
        } );
};