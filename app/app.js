
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

const address = process.argv[2];

if (!address) {
    console.log('Please, provide an address.');
    return;
}

geocode.geocode(address, (geocodeError, {latitude, longitude, location}) => {
    if (geocodeError) {
        return console.log(geocodeError);
    }

    weather.forecast(latitude, longitude, (forecastError, forecastData) => {
        if (forecastError) {
            return console.log(forecastError);
        }
        console.log(location);
        console.log(forecastData);
    });
})
