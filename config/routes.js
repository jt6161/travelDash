const users = require("../controllers/users.js")
const trips = require("../controllers/trips.js")
module.exports = function(app) {


  // HOME :
  app.get('/', users.index);

  app.post('/users', users.create)

  // TRIPS :
  app.get('/trips/', trips.index);

}