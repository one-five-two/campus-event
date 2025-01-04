const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
const port = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/events', eventRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API is working',
    dbStatus: mongoose.connection.readyState === 1 ? 'Connected' : 'Not connected'
  });
});

// Add this route handler
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sharon's Event API" });
    // or if you have a frontend:
    // res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// MongoDB Connection with better logging
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000
})
.then(() => {
  console.log('✅ MongoDB Connection Status:');
  console.log('   Database:', mongoose.connection.name);
  console.log('   Host:', mongoose.connection.host);
  console.log('   State:', mongoose.connection.readyState === 1 ? 'Connected' : 'Not connected');
  
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
})
.catch((error) => {
  console.log('❌ MongoDB connection error details:', {
    message: error.message,
    code: error.code,
    name: error.name
  });
  process.exit(1);
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;