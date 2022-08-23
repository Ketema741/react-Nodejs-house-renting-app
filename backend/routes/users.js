const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator')

// @route       POST api/users
// @desc        register a user
// @access      public
router.post (
    '/',
    [
        check("name", "please add name").not().isEmpty(),
        check("email", "please include a valid email!").isEmail(),
        check("password", "please enter a password with 6 or more characters")
            .isLength({min:6}),
		check("phone", "please add valid phone, phone can't be less than 10 digit").not()
			.isEmpty()
			.isLength({min:10}),
    ],
    async (req, res) => { 
        const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} 

        const { name, email, password, phone } = req.body;

		try {
			let user = await User.findOne({ email:email });

			if (user) {
				return res.status(400).json({ msg: 'User already exists' });
			}

			user = new User({
				name,
				email,
				password,
				phone
			});

			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

            const payload = {
				user: {
					id: user.id
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