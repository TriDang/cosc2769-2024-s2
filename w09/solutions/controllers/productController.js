// import data - the MODEL
const { products } = require("../data");

// Read all products (id and name)
exports.list = async (req, res, next) => {
  const data = products.map((p) => {
    return { id: p.id, name: p.name };
  });
  res.json(data);
};

// Read a product detail
exports.get = async (req, res, next) => {
  const productID = req.params.productID;
  const data = products.filter((p) => p.id == productID)[0];
  res.json(data);
};

// Create a new product
exports.create = async (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;

  // generate a new id
  const ids = products.map((p) => p.id);
  const max_id = Math.max(...ids);
  const new_id = max_id + 1;
  products.push({ id: new_id, name: name, price: price });
  res.json({ id: new_id });
};
