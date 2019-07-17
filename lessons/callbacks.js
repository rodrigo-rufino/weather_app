setTimeout(() => {
    console.log('2 seconds.');
}, 2000);

const names = ['Andrew', 'Jen', 'Jess'];

const shortNames = names.filter((name) => {
    return name.lengt <= 4;
});

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            lon: 0
        }
        callback(data);
    }, 2000)
}

geocode('Filadelphia', (data) => {
    console.log(data);
});