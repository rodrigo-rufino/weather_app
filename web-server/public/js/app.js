const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    // prevent browser reload
    e.preventDefault();

    const location = search.value;

    fetch('http://localhost:3000/weather?address=' + location)
        .then((response) => {
            response.json().then((data) => {
                console.log(data);
            });
        });

    console.log(location);
})