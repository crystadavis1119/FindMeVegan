const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

module.exports = {
  signup
};

async function signup(req, res) {
    const user = new User(req.body);
    console.log('FOOOOOOO', user);
    try {
      console.log('before');
      await user.save();
      console.log('after')
      const token = createJWT(user);
      console.log(token);
      res.json({ token });
    } catch (err) {
      console.log(err);
      // Probably a duplicate email
      res.status(400).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
      {user}, // data payload
      SECRET,
      {expiresIn: '24h'}
    );
}