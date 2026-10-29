const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);
let finalTotal = 0;

for (let i = 0; i < cart.length; i++) {
    let price = cart[i].price;

    if (cart[i].category === "electronics") {
        price = price - price * 10 / 100;
    } else if (cart[i].category === "fashion") {
        price = price - price * 5 / 100;
    }

    finalTotal = finalTotal + price;
}

if (total > 50000) {
    finalTotal = finalTotal - finalTotal * 5 / 100;
}

console.log("Original Total:", total);
console.log("Final Total:", finalTotal);