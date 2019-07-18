const path = require('path');
const express = require('express'); 


const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Rodrigo'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Rodrigo'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpMessage: 'App to check weather.'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sun.',
        location: 'Santa Rita do Sapucai'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})