const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fireSensorSchema = new Schema ({
  state: {
    // Validations
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  smoke: {
    type: Number,
    required: true,
  },
  co2: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const FireSensor = mongoose.model('FireSensor', fireSensorSchema);

module.exports = FireSensor;
