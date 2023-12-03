const mongoose = require('mongoose');





mongoose.connect('mongodb+srv://tspeed848:nayandeb@cluster0.zig0k46.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.once('open', function(){
    console.log('database connected to the server successfully!');
});

module.exports = db;