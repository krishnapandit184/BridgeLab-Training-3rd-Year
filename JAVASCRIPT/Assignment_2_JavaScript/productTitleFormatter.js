let product = " wireless headphones PRO ";

product = product.trim().toLowerCase();
// product = product.toLowerCase();

let words = product.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}

product = words.join(" ");
product = product.replace("Pro", "Pro Edition");

console.log("Product Title:", product);
console.log("Title Length:", product.length);