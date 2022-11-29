const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')

const realtorAuth = require("../middleware/realtorAuth");
const Realtor = require('../models/Realtor')
const cloudinary = require("cloudinary");



// @route     GET api/realtors
// @desc      Get all Realtors
// @access    Public
router.get("/", async (req, res) => {
    try {
      const realtors = await Realtor.find().sort({
        date: -1, 
      });
      res.json(realtors);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
});


// @route    GET api/realtors
// @desc     Get single realtor
// @access   Public
router.get("/:id", async (req, res) => {
    try { 
      let realtor = await Realtor.findById(req.params.id);
      if (!realtor) return res.status(404).json({ msg: req.params.id });
      res.json(realtor);
    } catch (err) { 
      console.error(err.message);
      res.status(500).send("Server Error");
    } 
});


// @route       POST api/realtors
// @desc        register a realtor
// @access      public
router.post(
    '/',
    [
        check("name", "please add name").not().isEmpty(),
        check("email", "please include a valid email!").isEmail(),
        check("password", "please enter a password with 6 or more characters")
        .isLength({min:6}),
        check("phone", "please add phone and phone can not be greater than 10 diigit")
            .not()
            .isEmpty()
            .isLength({min:10}),
        
    ],
    async (req, res) => { 
        const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} 

      const { 
        name, 
        email, 
        password, 
        phone,
        description,
        experienceYear,
        location,
        specializations,
        activityRange,
        realtorImage,
      } = req.body;

		try {
			let realtor = await Realtor.findOne({ email: email });

			if (realtor) {
				return res.status(400).json({ msg: 'realtor already exists' });
			}

			realtor = new Realtor({
				name,
				email,
				password,
				phone,
        description,
        experienceYear,
        location,
        specializations,
        activityRange,
        realtorImage
			});

			const salt = await bcrypt.genSalt(10);

			realtor.password = await bcrypt.hash(password, salt);

			await realtor.save();

            const payload = {
				realtor: {
					id: realtor.id
				}
			};

			jwt.sign(
				payload,
				config.get('jwtSecret'),
				{ expiresIn: 360000 },
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
			
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
    }
);

    // @route     PUT api/house/:id
    // @desc      Update house
    // @access    Private
    router.put("/:id", realtorAuth, async (req, res) => {
        const {
          _id,
          name, 
          email, 
          password, 
          phone,
          description,
          experienceYear,
          location,
          specializations,
          activityRange,
        } = req.body;
    
        // Build realtor object
        const realtorFields = {};
        if (name) realtorFields.name = name;
        if (email) realtorFields.email = email;
        if (password) realtorFields.password = password;
        if (phone) realtorFields.phone = phone;
        if (description) realtorFields.description = description;
        if (experienceYear) realtorFields.experienceYear = experienceYear;
        if (location) realtorFields.location = location;
        if (specializations) realtorFields.specializations = specializations;
        if (activityRange) realtorFields.activityRange = activityRange;
    
        try {
        let realtor = await Realtor.findById(req.params.id);
    
        if (!realtor) return res.status(404).json({ msg: "realtor not found" });
    
        realtor = await Realtor.findByIdAndUpdate(
            _id,
            { $set: realtorFields }, 
            { new: true }
        );
    
        res.json(realtor);
        } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        }
    });


  router.put("/favourite/:id", async (req, res) => {
    try {
      
      let realtor = await Realtor.findOneAndUpdate (
        { _id: req.params.id},
        { $addToSet: { favourites: req.body  } }
      ) 

      realtor = await realtor.save()
      res.json(realtor);

    } catch (err) {
      console.error(err.message); 
      res.status(500).send("Server Error");
    }
  });
 

  router.put("/removefavourite/:id", async (req, res) => {
    try {
      
      let realtor = await Realtor.updateOne (
        { _id: req.params.id }, 
        { $pull: { favourites: { houseId: req.body.favouriteId } } }
      )
      
      res.json(realtor);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }     
  })

  
  // @route     DELETE api/realtors/:id
  // @desc      Delete realtor
  // @access    Private
  router.delete("/:id", realtorAuth, async (req, res) => {
    try {
      const realtor = await Realtor.findById(req.params.id);
  
      if (!realtor) return res.status(404).json({ msg: "realtor not found" });
      await Realtor.findByIdAndRemove(req.params.id);
  
      res.json({ msg: "Realtor removed" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  

  cloudinary.config({
    cloud_name: config.get("cloud_name"),
    api_key: config.get("api_key"),
    api_secret: config.get("api_secret"),
  });
  
  
  router.post("/image", async (req, res) => {
    const { public_id } = req.body;
    try {
      await cloudinary.uploader.destroy(public_id);
      res.json({ msg: "Image removed" });
    } catch (err) {
      console.error(err.message);
      res.status(400).send("server Error");
    }
  });


module.exports = router;