const express = require('express');
const router = express.Router();
const { Event } = require('../models');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'fullName email');
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ message: error.message });
  }
});

// Create event
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
