// Q3: Product Discount System (Constructor Function + Prototype)

// Constructor function to create Product objects.
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Add a method to Product's prototype.
// It returns the discounted price without changing the original price.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100 percent.");
    }

    const discountAmount = this.price * (percent / 100);
    return this.price - discountAmount;
};

// Create three products.
const product1 = new Product("Laptop", 50000);
const product2 = new Product("Headphones", 3000);
const product3 = new Product("Keyboard", 2000);

// Apply different discounts.
const productsAndDiscounts = [
    { product: product1, discount: 10 },
    { product: product2, discount: 20 },
    { product: product3, discount: 15 }
];

productsAndDiscounts.forEach(({ product, discount }) => {
    const finalPrice = product.applyDiscount(discount);

    console.log(`Product: ${product.name}`);
    console.log(`Original price: Rs. ${product.price}`);
    console.log(`Discount: ${discount}%`);
    console.log(`Final price: Rs. ${finalPrice.toFixed(2)}`);
    console.log("-------------------------");
});

// Abstraction:
// The user only calls applyDiscount(percent) and does not need to write
// the discount calculation each time. The calculation is hidden inside
// the method, making product pricing simpler to use.
