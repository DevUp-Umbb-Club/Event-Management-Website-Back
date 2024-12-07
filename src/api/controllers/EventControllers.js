const Event = require('../models/Event');

const EventControllers = {
  async createEvent(req, res) {
    console.log('example controller');
  },
  async getEvents(req, res) {
    const events = await Event.find();
    res.json(events);
  },
};

module.exports = EventControllers;
