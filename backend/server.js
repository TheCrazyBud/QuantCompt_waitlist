const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Waitlist Schema
const waitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  role: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Waitlist = mongoose.model('Waitlist', waitlistSchema);

// Routes
app.post('/api/waitlist', async (req, res) => {
  try {
    const { name, email, role, experience } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Create new waitlist entry
    const waitlistEntry = new Waitlist({
      name,
      email,
      role,
      experience
    });

    await waitlistEntry.save();

    res.status(201).json({ 
      success: true, 
      message: 'Successfully added to waitlist',
      data: {
        id: waitlistEntry._id,
        name: waitlistEntry.name,
        email: waitlistEntry.email
      }
    });

  } catch (error) {
    console.error('Waitlist submission error:', error);
    
    if (error.code === 11000) {
      return res.status(409).json({ error: 'This email is already on our waitlist!' });
    }
    
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all waitlist entries (admin endpoint)
app.get('/api/waitlist', async (req, res) => {
  try {
    const entries = await Waitlist.find().sort({ createdAt: -1 });
    res.json({ success: true, data: entries });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'QuantCompt Waitlist API is running' });
});

// Connect to database and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`QuantCompt Waitlist Server running on port ${PORT}`);
  });
});

module.exports = app;
