const HttpError = require('../models/http-error');

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Stockholm Statshuset',
    description: 'Waterside government offices completed in 1923 & made from red brick with a lantern-topped tower.',
    location: {
      lat: 59.3274533,
      lng: 18.0517707
    },
    address: 'Hantverkargatan 1, 111 52 Stockholm',
    creator: 'Charlie'
  }
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place", 404);
  };

  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  
  const place = DUMMY_PLACES.find(p => {
    return p.id === userId;
  });

  if (!place) {
    throw new HttpError("Could not find a user", 404);
  };
  
  res.json({ place });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;