
const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  category: {
    type: String,
    enum: ['plumber', 'electrician', 'carpenter',
           'painter', 'ac_mechanic', 'cleaner'],
    required: true
  },
  area: { type: String, required: true },
  city: { type: String, default: 'Delhi' },
  rate: { type: Number, required: true },
  available: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  totalJobs: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Worker', workerSchema);
