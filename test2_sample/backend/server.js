const express = require("express");
const cors = require("cors");
const { customers, orders } = require("./data");
const { find_customer, find_product, order_amount } = require("./functions");

const app = express();
const port = 2222;

app.use(cors());

// return all customers
app.get("/customers", (req, res) => {
  res.status(200).json(customers);
});

// return a customer with more detail
app.get("/customers/:id", (req, res) => {
  const customer_id = parseInt(req.params.id);
  // find the matching customer
  const customer = find_customer(customer_id);
  // construct the array orders
  const customer_orders = orders
    .filter((o) => o.customer_id === customer_id)
    .map((o) => {
      return {
        product_id: o.product_id,
        quantity: o.quantity,
      };
    });
  customer.orders = customer_orders;
  res.status(200).json(customer);
});

// return the total amount of a customer
app.get("/customers/:id/total", (req, res) => {
  const customer_id = parseInt(req.params.id);
  let total_price = 0;
  orders.forEach((o) => {
    if (o.customer_id === customer_id) {
      const amount = order_amount(customer_id, parseInt(o.product_id));
      total_price += amount;
    }
  });
  res.status(200).json({ total_price: total_price });
});

app.all("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
