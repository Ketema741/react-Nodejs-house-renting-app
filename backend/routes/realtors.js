const express = require('express')
const router = express.Router()
const Realtor = require('../models/Realtor')
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')

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
            .isLength({max:10}),
        check("description", "please add description").not().isEmpty(),
        check("experienceYear", "please add experience Year").not().isEmpty(),
        check("location", "please add location").not().isEmpty(),
        check("Specializations", "please add Specializations").not().isEmpty(),
        
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
                Specializations,
                activityRange,
            } = req.body;

		try {
			let realtor = await Realtor.findOne({ email:email });

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
                Specializations,
                activityRange,
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

module.exports = router;