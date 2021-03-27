const mongoose = require('mongoose');
const weatherDataSchema = mongoose.Schema({
   dayCelsius: {
       type: Number,
       required: true
   },
   date: {
       type:Date,
       default: Date.now()
   }
})

module.exports = mongoose.model('WeatherNow', weatherDataSchema);