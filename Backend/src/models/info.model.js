const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    services: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    classDay: {
        type: String,
        required: true

    },
    startTime: {
        type: Date,
        required: true

    },
    endTime: {
        type: Date,
        required: true

    },
    pricing: {
        type: String,
        required: true

    },
    contact: {
        type: String,
        required: true

    },
    location: {
        type: String,
        required: true

    }
}, { timestamps: true });

const Info = mongoose.model('Information', InfoSchema)

module.exports = Info;