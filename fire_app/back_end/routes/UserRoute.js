const router = require('express').Router();

let User = require('../models/user');

// GET ALL USERS
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
});

// ADD NEW USER
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // NEW USER INSTENCE
  const newUser = new User({
    username,
    password
  });

  // SAVE NEW USER
  newUser.save()
    .then(() => res.json('User added..'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
