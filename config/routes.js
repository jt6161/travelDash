const users = require("../controllers/users.js")
const trips = require("../controllers/trips.js")
const airlines = require("../controllers/airlines.js")
module.exports = function(app) {


  // HOME :
  app.get('/', users.index);

  app.post('/users', users.create);

  // TRIPS :
  app.get('/trips', trips.index);

  app.post('/trips', trips.create);

  // AIRLINES :
  app.get('/airlines', airlines.index);

  app.post('/airline/create', airlines.create);

}