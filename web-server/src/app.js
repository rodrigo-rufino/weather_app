const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
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
        title: 'Weather App',
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
    res.send({
        title: 'Weather',
        forecast: 'Sun.',
        location: 'Santa Rita do Sapucai'
    });
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
        title: 'Error',
        name: 'Rodrigo',
        errorMessage: 'Page not found. Error 404.'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});