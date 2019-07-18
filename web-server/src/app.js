const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode');
const weather = require('./utils/weather');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// handlebars engine
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// static directory
app.use(express.static(publicDirectoryPath));

// endpoints
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Rodrigo'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Rodrigo'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Rodrigo',
        helpMessage: 'App to check weather.'
    });
});

app.get('/weather', (req, res) => {
    const address = req.query.address;

    if (!address) {
        return res.send({
            error: 'You must provide an Address.'
        });
    }
    
    geocode.geocode(address, (geocodeError, {latitude, longitude, location} = {}) => {
        if (geocodeError) return res.send( {error: geocodeError});
    
        weather.forecast(latitude, longitude, (forecastError, forecastData) => {
            if (forecastError) return res.send( {error: weatherError});

            res.send({
                address,
                location,
                forecast: forecastData
            });
        });
    })
});

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: 'Error',
        name: 'Rodrigo',
        errorMessage: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Rodrigo',
        errorMessage: 'Page not found.'
    });
});


app.listen(port, () => {
    console.log('Server is up on port ' + port + '.');
});