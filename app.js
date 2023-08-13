const express = require('express');
const bodyParser = require('body-parser');
const placesRoutes = require('./routes/places-routes');
const HttpError = require('./models/http-error');

const app = express();

// handle data sent in the body of HTTP POST requests. 
// parse the body before it reachs the route
// If the client sends JSON data in the body of a POST request, you can use body-parser to parse and convert the 
// JSON data into a JavaScript objec
app.use(bodyParser.json());

app.use('/api/places', placesRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

// Handling error message
app.use((error, req, res, next) => {
  if(res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});