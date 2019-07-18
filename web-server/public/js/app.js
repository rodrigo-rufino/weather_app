console.log('Client side javascript file is loaded.');

fetch('http://localhost:3000/weather?address=Campinas')
    .then((response) => {
        response.json().then((data) => {
            console.log(data);
        });
    });