const greeter = (name = 'user', age) => {
    console.log('Hello, ' + name + '.');
}

greeter('Rodrigo');

greeter();



console.log("\n=== Object destructuring with default parameters");


const product = {
    label: 'Red_Notebook',
    price: 3,
    stock: 345,
    salePrice: undefined
}

const {label:productLabel, stock, rating = 5} = product
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock);
}

transaction('order', product);