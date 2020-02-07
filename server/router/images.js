const express = require('express');
const router = express.Router();
const ImageDataModel = require('../models/image-data.model');

router.get('/', (req, res) => {
  ImageDataModel.find({}, (err, images) => {
    if (err) {
      res.status(500).send({'error': 'Error retrieving images'})
    }
    res.send(images);
  });
});

router.post('/', (req, res) => {
  const image = new ImageDataModel(req.body);
  image.save(err => {
    if (err) {
			res.status(500).send({'error': 'Problem with storing the data'});
    }
		res.status(200).send(null);
  });
})

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const rate = req.body.rate;

  ImageDataModel.findByIdAndUpdate(id, {rate: rate}, {new: true}, (err, document) => {
    if (err) {
      console.log('Error with updating the DB');
      res.status(500).send({'error': 'Error with updating the DB'});
      return;
    }
    // Does a save to DB and retreives data
    res.status(200).send(document);
  });
});

module.exports = router;
