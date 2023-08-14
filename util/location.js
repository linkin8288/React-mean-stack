const axios = require('axios');
const HttpError = require('../models/http-error');

const API_KEY = 'abc';

async function getCoordsForAddress(address) {
  return {
    lat: 59.3274533,
    lng: 18.0517707
  };
  // If you want to make an API call

  // const response = await axios.get(`${encodeURIComponent(address)}`)
  // const data = response.data;
  // if (!data || data.status === 'ZERO_RESULTS') {
  //   const error = new HttpError(
  //     'Could not find location for the specified address.', 
  //     422)
  //   throw error;
  // }

  // const coordinates = data.results[0].geometry.location;
  // return coordinates;
};

module.exports = getCoordsForAddress;