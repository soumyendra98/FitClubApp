const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    services: { type: String, required: true },
    classDay: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
