const config = require('../config.json');
const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' +
            config.dark_sky_api_key +
            '/' + latitude + ',' + longitude +
            '?units=si';

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather server.', undefined);
        } else if (body.error) {
            callback('Unable to find location.', undefined);
        } else {
            const temperature = body.currently.temperature;
            const precipProbability = body.currently.precipProbability;
            const summaryDay = body.daily.data[0].summary;

            const forecast = summaryDay +
            ' It is currently ' + temperature + ' Celsius degrees out.' +
            ' There is a ' + precipProbability + '% chance of rain.';

            callback(undefined, forecast);
        }
    });
}

module.exports = {
    forecast: forecast
}