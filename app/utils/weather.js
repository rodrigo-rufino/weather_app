const config = require('../config.json');
const request = require('request');

// const urlWeather = 'https://api.darksky.net/forecast/' +
//             config.dark_sky_api_key +
//             '/34.0544,-118.2439' +
//             '?units=si';

// request({url: urlWeather, json: true}, (error, response) => {
//     if (error){
//         console.log('Unable to connect to weather server.');
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else {
//         temperature = response.body.currently.temperature;
//         precipProbability = response.body.currently.precipProbability;
//         summaryDay = response.body.daily.data[0].summary;
//         console.log(summaryDay +
//                     ' It is currently ' + temperature + ' Celsius degrees out.' +
//                     ' There is a ' + precipProbability + '% chance of rain.');
//     }
// });

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/' +
            config.dark_sky_api_key +
            '/' + latitude + ',' + longitude +
            '?units=si';

    request({url: url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to weather server.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location.', undefined);
        } else {
            const temperature = response.body.currently.temperature;
            const precipProbability = response.body.currently.precipProbability;
            const summaryDay = response.body.daily.data[0].summary;

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