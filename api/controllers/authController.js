// controllers/authController.js
const User = require('../models/user');

exports.signup = async (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password, // This will be the hashed password
      });
  
      await user.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };