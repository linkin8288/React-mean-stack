const express = require('express');

const router = express.Router();

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

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new Error("Error happened!");
    error.code = 404;
    throw error;
  };

  res.json({place});
});

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  
  const place = DUMMY_PLACES.find(p => {
    return p.id === userId;
  });

  if (!place) {
    const error = new Error("Error happened!");
    error.code = 404;
    throw error;
  };
  
  res.json({place});
});

module.exports = router;