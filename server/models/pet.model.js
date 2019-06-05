const mongoose = require('mongoose');

const { Schema } = mongoose;

const PetSchema = new Schema(
    {
    name: {
        type: String,
        trim: true,
        required: [true, 'Pet name is required'],
        minlength: [3, 'Name must be 3 characters or more'],
        index: true
    },
    type: {
        type: String,
        trim: true,
        required: [true, 'Type is required'],
        minlength: [3, 'Type must be 3 characters or more'],

    },
    location: {
        type: String,
        trim: true,
        required: [true, 'Location is required'],
        minlength: [3, 'Location must be 3 characters or more'],

    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
        minlength: [3, 'Description must be 3 characters or more']
    },
    skill1: {
        type: String,
        trim: true,
        required: [true, 'Please select adoption status']
    },
    skill2: {
        type: String,
        default: ""
    },
    skill3: {
        type: String,
        default: ""
    },
    imageUrl:  {
        type: String,
        default: "https://www.flagpets.com/wp-content/uploads/title.jpeg"
    }
    },
    {
    timestamps: true
    }
);

module.exports = mongoose.model('Pet', PetSchema);