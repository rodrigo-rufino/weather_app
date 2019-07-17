console.log("\n=== Object property shorthand");
const name = 'Andrew';
const userAge = 27;

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user);



console.log("\n=== Object destructuring");

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 345,
    salePrice: undefined
}

const {label:productLabel, stock, rating = 5} = product
console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product);
