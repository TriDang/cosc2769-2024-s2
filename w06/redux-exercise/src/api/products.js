// This script simulates products data processing tasks

const products = [
  {
    id: 1,
    name: "Computer",
    description: "You can use it to learn or play",
    price: 1000,
    weight: 1.2,
    quantity: 3,
  },
  {
    id: 2,
    name: "Phone",
    description: "You can use it to call your friends",
    price: 700,
    weight: 0.3,
    quantity: 5,
  },
  {
    id: 3,
    name: "Book",
    description: "You can use it to study",
    price: 100,
    weight: 0.4,
    quantity: 2,
  },
  {
    id: 4,
    name: "TV",
    description: "You can use it to entertain yourself",
    price: 1200,
    weight: 5.5,
    quantity: 7,
  },
  {
    id: 5,
    name: "Bike",
    description: "You can use it to get fit",
    price: 500,
    weight: 9.5,
    quantity: 4,
  },
  {
    id: 6,
    name: "Watch",
    description: "You can use it to not be late",
    price: 300,
    weight: 0.1,
    quantity: 6,
  },
];

// get all products (id/name)
export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 3000);
  });
}

// update one product
export async function updateProduct(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product.quantity < 0) {
        reject('Quantity cannot be negative!');
      } else {
        const productIndex = products.findIndex(p => p.id == product.id);
        products.splice(productIndex, 1, product);
        resolve('Product updated successfully!');
      }      
    }, 3000);
  });
}
