const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  schedule: { type: String, required: true },
  teacher: { type: String, required: true },
});

module.exports = mongoose.model('Class', classSchema);
