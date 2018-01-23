exports.up = function ( knex, Promise ) {
    return knex.schema.createTable( 'trips', ( table ) => {
        table.increments();
        table.integer( 'user_id' ).references( 'id' ).inTable( 'users' ).notNullable().onDelete( 'cascade' );
        table.string( 'title' );
        table.string( 'trip_description' );
        table.integer( 'flight_id' ).references( 'id' ).inTable( 'flights' ).notNullable().onDelete( 'cascade' );
        table.timestamps( true, true );
    } )
};

exports.down = function ( knex, Promise ) {
    return knex.schema.dropTable( 'trips' );
};