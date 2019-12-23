const mongoose = require('mongoose');
const express = require('express');

const app = express();

const DATABASE = 'mongodb://mymongo:27017/testup';

mongoose.connect(DATABASE)
    .then(() => {
        console.log('DB connected');
    })
    .catch(() => {
        console.log('Error in DB connection');
    });
    
app.get('/', (req, res) => {
    res.json({
         message: 'Visiting ROOT route'
    });
});
    
app.listen(8000, () => {
    console.log(`Server up: http://localhost:8000`);
});
