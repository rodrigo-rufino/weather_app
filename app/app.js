
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

geocode.geocode('New York', (geocodeError, geocodeData) => {
    if (geocodeError) {
        return console.log(geocodeError);
    }

    weather.forecast(geocodeData.latitude, geocodeData.longitude, (forecastError, forecastData) => {
        if (forecastError) {
            return console.log(forecastError);
        }
        console.log(geocodeData.location);
        console.log(forecastData);
    });
})
