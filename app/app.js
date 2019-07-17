const request = require('request');

// api_key from darksky.net
const config = require('./config.json');

const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json' +
            '?access_token=' + config.mapbox_api_key;

request({url: urlGeo, json: true}, (error, response) => {
    if (error){
        console.log('Unable to connect to geolocation server.')
    } else if (response.body.message || response.body.features.length === 0) {
        console.log('Unable to find location.')
    } else {
        const lat = response.body.features[0].center[1];
        const lon = response.body.features[0].center[0];
        console.log('Latitude: ' + lat + ', Longitude: ' + lon);
    }
});


const urlWeather = 'https://api.darksky.net/forecast/' +
            config.dark_sky_api_key +
            '/34.0544,-118.2439' +
            '?units=si';

request({url: urlWeather, json: true}, (error, response) => {
    if (error){
        console.log('Unable to connect to weather server.');
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } else {
        temperature = response.body.currently.temperature;
        precipProbability = response.body.currently.precipProbability;
        summaryDay = response.body.daily.data[0].summary;
        console.log(summaryDay +
                    ' It is currently ' + temperature + ' Celsius degrees out.' +
                    ' There is a ' + precipProbability + '% chance of rain.');
    }
});
