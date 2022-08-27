const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const realtorAuth = require('../middleware/realtorAuth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Realtor = require('../models/Realtor');
const User = require('../models/User');

// @route    GET api/auth
// @desc     Get logged realtor
// @access   Private
router.get('/', realtorAuth, async (req, res) => {
	try {
		const realtor = await Realtor.findById(req.requester.id).select('-password');
		res.json(realtor);

	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});


// @route     POST api/auth
// @desc      Auth realtor & get token
// @access    Public
router.post(
	'/',
	check('email', 'Please include a valid email').isEmail(),
	check('password', 'Password is required').exists(),
	async (req, res) => {
	  const errors = validationResult(req);
	  if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	  }
  
	  const { email, password } = req.body;
  
	  try {

		let realtor = await Realtor.findOne({ email });
		
		if (!realtor) {
		  return res.status(400).json({ msg: 'Invalid Credentials' });
		}
  
		const isMatch = await bcrypt.compare(password, realtor.password);
  
		if (!isMatch) {
		  return res.status(400).json({ msg: 'Invalid Credentials' });
		}
  
		const payload = {
		  realtor: {
			id: realtor.id
		  }
		};
  
		jwt.sign(
		  payload,
		  config.get('jwtSecret'),
		  {
			expiresIn: 360000
		  },
		  (err, token) => {
			if (err) throw err;
			res.json({ token });
		  }
		);
	  } catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	  }
	}
);

module.exports = router;