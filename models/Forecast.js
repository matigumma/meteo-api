const mongoose = require("mongoose");
const { Schema } = mongoose;

const ForeSchema = new Schema({
    name: { type: String },
    temp: { type: String },
    hum: { type: String },
    dewpoint: { type: String },
    avgwind: { type: String },
    wind: { type: String },
    dirwind: { type: String },
    windgust: { type: String },
    windchill: { type: String },
    hpa: { type: String },
    rain: { type: String },
    solarRad: { type: String },
    uvindex: { type: String },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Meteo', ForeSchema, 'meteos');