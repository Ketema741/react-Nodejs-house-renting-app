const express = require('express');
const router = express.Router();
const realtorAuth = require('../middleware/realtorAuth');
const { check, validationResult } = require('express-validator');
const cloudinary = require('cloudinary')
const config = require('config');



const House = require('../models/House');

// @route     GET api/Houses
// @desc      Get all Houses
// @access    Public
router.get('/', async (req, res) => {
  try {
    const houses = await House.find().sort({
      date: -1
    });
    res.json(houses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET api/realtor/Houses
// @desc      Get all Houses
// @access    Private
router.get('/realtor', realtorAuth, async (req, res) => {
  try {
    const houses = await House.find({ realtor: req.realtor.id }).sort({
      date: -1
    });
    res.json(houses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/houses
// @desc      Add new houses
// @access    Private
router.post(
  '/',
  realtorAuth,
  check('title', 'title is required').not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { 
      title, 
      files,
      description, 
      location, 
      area, 
      bed,
      bath, 
      price, 
      propertyType,
      garage,
      yearBuilt,
      image,
      
     } = req.body;
    
     const encodedImage = JSON.stringify({image})
     try {
      const uploadResponse = await cloudinary.uploader.upload(encodedImage, {
        upload_preset: 'house-renting',
        overwrite: true,
        invalidate: true,
        width: 810, height: 456, crop: "fill"
      });
      console.log(uploadResponse);
      res.json({ msg: 'yaya' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
    }
    // try {
    //   const newHouse = new House({
    //     title,
    //     description, 
    //     location, 
    //     area, 
    //     bed,
    //     bath, 
    //     price, 
    //     propertyType,
    //     garage,
    //     yearBuilt,
    //     realtor: req.realtor.id
    //   });
      
    //   const house = await newHouse.save();

    //   res.json(house);
    // } catch (err) {
    //   console.error(err.message);
    //   res.status(500).send('Server Error');
    // }
  }
);



// @route     PUT api/house/:id
// @desc      Update house
// @access    Private
router.put('/:id', realtorAuth, async (req, res) => {
  const { 
    title, 
    description, 
    location, 
    area, 
    bed,
    bath, 
    price, 
    propertyType,
    garage,
    yearBuilt,
    Neighborhood
   } = req.body;

  // Build house object
  const houseFields = {};
  if (title) houseFields.title = title;
  if (description) houseFields.description = description;
  if (location) houseFields.location = location;
  if (area) houseFields.area = area;
  if (bed) houseFields.bed = bed;
  if (bath) houseFields.bath = bath;
  if (price) houseFields.price = price;
  if (propertyType) houseFields.propertyType = propertyType;
  if (garage) houseFields.garage = garage;
  if (yearBuilt) houseFields.yearBuilt = yearBuilt;
  if (Neighborhood) houseFields.Neighborhood = Neighborhood;

  try {
    let house = await House.findById(req.params.id);

    if (!house) return res.status(404).json({ msg: 'house not found' });

    // Make sure realtor owns the house
    if (house.realtor.toString() !== req.realtor.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    house = await House.findByIdAndUpdate(
      req.params.id,
      { $set: houseFields },
      { new: true }
    );

    res.json(house);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/house/:id
// @desc      Delete house
// @access    Private
router.delete('/:id', realtorAuth, async (req, res) => {
  try {
    const house = await House.findById(req.params.id);

    if (!house) return res.status(404).json({ msg: 'house not found' });

    // Make sure realtor owns house
    if (house.realtor.toString() !== req.realtor.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await House.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


cloudinary.config ({
  cloud_name: config.get("cloud_name"),
  api_key: config.get("api_key"),
  api_secret: config.get("api_secret"),
})
router.post('/image', async (req, res) => {
  const { public_id } = req.body
  try {
    await cloudinary.uploader.destroy(public_id);
    res.status(200).send();
  } catch (err) {
    console.error(err.message);
    res.status(400).send('server Error');
  }
});

module.exports = router;