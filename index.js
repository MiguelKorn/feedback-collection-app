const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Add Services
require('./services/passport');


// Add Routes
require('./routes/auth')(app);

app.listen(PORT);