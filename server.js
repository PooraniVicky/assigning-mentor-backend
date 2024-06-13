const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Rest of the code remains the same

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', apiRoutes);

// Connect to MongoDB
mongoose.connect(process.env.mongoURI).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    
}).catch(error => {
    console.error('Error connecting to MongoDB', error);
});