const customers = [
  { id: 1, name: 'Alice', address: '101 Main Street' },
  { id: 2, name: 'Bob', address: '303 Sub Street' },
  { id: 3, name: 'Tri', address: 's123456 RMIT' },
];
const orders = [
  { customer_id: 1, product_id: 1, quantity: 2 },
  { customer_id: 1, product_id: 2, quantity: 3 },
  { customer_id: 3, product_id: 1, quantity: 5 },
  { customer_id: 3, product_id: 3, quantity: 2 },
];
const products = [
  { id: 1, name: 'Laptop', price: 500.0, sell_off: true, percent: 10.0 },
  { id: 2, name: 'Phone', price: 350.0, sell_off: false },
  { id: 3, name: 'Keyboard', price: 130.0, sell_off: true, percent: 40.0 },
  { id: 4, name: 'Tablet', price: 680.0, sell_off: false },
];

exports.customers = customers;
exports.orders = orders;
exports.products = products;
