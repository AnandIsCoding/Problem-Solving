function calculateTotal(cart) {
    // Write your code here
     // Use reduce to calculate the total
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
const cart2 = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 },
];
console.log(calculateTotal(cart2)); //  114
// Do not modify the below lines
module.exports = { calculateTotal };