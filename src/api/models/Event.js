const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  type: { type: String, enum: ['intern', 'extern'] },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  status: { type: String, enum: ['NotStarted', 'InProgress', 'Finished'] },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
