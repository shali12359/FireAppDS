const router = require('express').Router();
const nodemailer = require('nodemailer');

// REQUIRE MODEL CLASS
let FireSensor = require('../models/FireSensor');

// GET ALL FIRESENSOR
router.route('/').get((req, res) => {
  FireSensor.find()
    .then(sensor => res.json(sensor))
      .catch(err => res.status(400).json('Error: ' + err));
});

// ADD NEW FIRESENSOR
router.route('/add').post((req, res) => {
  const state = req.body.state;
  const location = req.body.location;
  const smoke = Number(req.body.smoke);
  const co2 = Number(req.body.co2);

  // NEW FIRESENSOR INSTENCE
  const newSensor = new FireSensor({
    state,
    location,
    smoke,
    co2,
  });

  // SAVE NEW FIRESENSOR
  newSensor.save()
    .then(() => res.json('FireSensor added..'))
      .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE A FIRESENSOR
router.route('/update/:id').post((req, res) => {
  FireSensor.findById(req.params.id)
    .then(sensor => {
      sensor.state = req.body.state;
      sensor.location = req.body.location;
      sensor.smoke = Number(req.body.smoke);
      sensor.co2 = Number(req.body.co2);

      sensor.save()
        .then(() => res.json('FireSensor Updated..'))
          .catch(err => res.status(400).json('Error: ' + err));
    })
      .catch(err => res.status(400).json('Error: ' + err));
});

// SEND EMAILS
router.route('/send/:email/:body').post((req, res) => {
  let email = req.params.email;
  let body = req.params.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 25,
    secure: false,
    auth: {
      user: 'prabathshalithads@gmail.com',
      pass: 'kjksz263ds'
    }
  });

  let mailOptions = {
    from: 'prabathshalithads@gmail.com',
    to: email,
    subject: 'Fire App Alert Email',
    text: body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

// SEND SMS
router.route('/sms/:phone/:text').post((req, res) => {
  let phone = req.params.phone;
  let text = req.params.text;

  console.log("Phone : " + phone + " Text : " + text);
});

module.exports = router;
