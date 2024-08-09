const products = [
  { id: 1, name: "Phone", price: 500.0, quantity: 3 },
  { id: 2, name: "Laptop", price: 2500.0, quantity: 5 },
  { id: 3, name: "LCD", price: 350.0, quantity: 3 },
  { id: 4, name: "Headset", price: 100.0, quantity: 2 },
];

// get all products
export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 5000);
  });
};
