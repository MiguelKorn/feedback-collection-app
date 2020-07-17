const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Add Models
require('./models/UserModel');

// Add Services
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

// Add Routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT);