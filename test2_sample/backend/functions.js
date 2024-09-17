const { customers, orders, products } = require('./data');

// utility functions

const find_customer = (id) => {
  return customers.find((cust) => cust.id === id);
};

const find_product = (id) => {
  return products.find((p) => p.id === id);
};

const find_order = (customer_id, product_id) => {
  return orders.find(
    (o) => o.customer_id === customer_id && o.product_id === product_id
  );
};

const order_amount = (customer_id, product_id) => {
  const order = find_order(customer_id, product_id);
  const quantity = order.quantity;
  const p = find_product(product_id);
  if (p.sell_off) {
    return quantity * p.price * (1 - p.percent / 100);
  }
  return quantity * p.price;
};

exports.find_customer = find_customer;
exports.find_product = find_product;
exports.find_order = find_order;
exports.order_amount = order_amount;

