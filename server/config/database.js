const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/pets', {
    useCreateIndex: true,
    useNewUrlParser: true
    });

    mongoose.connection.on('connected', () =>
    console.log('MongoDB connected to pets')
    );

    fs.readdirSync(modelsPath)
    .filter(file => file.endsWith('.js'))
    .forEach(file => require(path.join(modelsPath, file))
);