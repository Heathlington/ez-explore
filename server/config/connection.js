const { connect, connection } = require('mongoose')

const connectionString =
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ezDB'

connect(connectionString);

module.exports = connection;

//Example from 21 if this doesnt work

//const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

// module.exports = mongoose.connection;
