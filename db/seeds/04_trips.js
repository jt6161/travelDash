exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function() {
      // Inserts seed entries
      return knex('trips').insert([
        { user_id: 1, title: 'vacation', trip_description: 'trip with the lady', flight_id: 2 },
        { user_id: 2, title: 'vacation', trip_description: 'trip', flight_id: 1 },
        { user_id: 4, title: 'vacation', trip_description: 'trip', flight_id: 3 },
        { user_id: 3, title: 'vacation', trip_description: 'trip', flight_id: 5 },
        { user_id: 5, title: 'vacation', trip_description: 'trip', flight_id: 4 },
      ]);
    });
};