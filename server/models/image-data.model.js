const mongoose = require('mongoose');

const ImageDataModel = mongoose.model('Image', {
    id: String,
    url: String,
    title: String,
    desciption: String,
    date: String,
    rate: String
});

module.exports = ImageDataModel;
