// Q2: Online Food Ordering (map + reduce + Error Handling)

// Menu items and their prices.
const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // Find the price of each ordered item. Throw an error for invalid items.
    const priceList = orderItems.map((orderedName) => {
        const menuItem = menu.find(
            (item) => item.name.toLowerCase() === orderedName.toLowerCase()
        );

        if (!menuItem) {
            throw new Error(`"${orderedName}" is not available on the menu.`);
        }

        return menuItem.price;
    });

    // Add all item prices using reduce().
    const totalBill = priceList.reduce((total, price) => total + price, 0);

    return totalBill;
}

// Test with a valid order.
try {
    const order = ["Burger", "Pizza", "Pasta"];
    console.log("Order:", order.join(", "));
    console.log("Total bill: Rs.", calculateBill(order));
} catch (error) {
    console.error("Unable to process order:", error.message);
}

// Test with an invalid order.
try {
    const order = ["Burger", "Sushi"];
    console.log("Order:", order.join(", "));
    console.log("Total bill: Rs.", calculateBill(order));
} catch (error) {
    console.error("Unable to process order:", error.message);
}
