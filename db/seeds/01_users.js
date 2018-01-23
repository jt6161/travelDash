exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { user_name: 'Nick D', email: 'nickd@gmail.com', password: 'nickrules' },
        { user_name: 'Nick G', email: 'nickg@hotmail.com', password: '123456789' },
        { user_name: 'Carlos A', email: 'carlosa@gmail.com', password: 'ballallday' },
        { user_name: 'Jen T', email: 'jent@hotmail.com', password: 'photoqueen' },
        { user_name: 'Troy A', email: 'troya@yahoo.com', password: 'pingpongwizard' },
      ]);
    });
};