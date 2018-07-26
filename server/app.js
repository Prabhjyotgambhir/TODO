
const express = require('express');
const app = express();
const port = 1100 || PROCESS.ENV.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const morgan = require('morgan');
const taskRoute = require('./routes/task');
const userRoute = require('./routes/user');

app.use(morgan('dev'));

app.use(express.static('dist'));

// Used for cross origin ports
app.use(cors());

// User to parser all incoming body as jsons
app.use(bodyParser.json());

// Connection for mongodb
mongoose.connect(config.url, () => {
    console.log('Connected to database: ', config.url);
});

// Error connecting mongodb
mongoose.connection.on('error', (error) => {
    console.log('Error Connecting database: ', error);
});


app.use('/tasks', taskRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log('Server running at port: ', port);
});
