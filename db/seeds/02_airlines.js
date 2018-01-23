exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airlines').del()
    .then(function() {
      // Inserts seed entries
      return knex('airlines').insert([
        { airline_name: 'American', airline_description: 'We are American!' },
        { airline_name: 'Delta', airline_description: 'The Comfort Inn of airlines' },
        { airline_name: 'United', airline_description: 'United we crash...but hopefully not' },
        { airline_name: 'JetBlue', airline_description: "We're an airline?" },
        { airline_name: 'Frontier', airline_description: 'Our seats may be uncomfortable but we will get you there for about the same cost as other airlines' },
      ]);
    });
};