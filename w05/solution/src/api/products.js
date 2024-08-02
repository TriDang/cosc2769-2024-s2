// This script simulates products data processing tasks

const products = [
  {
    id: 1,
    name: "Computer",
    description: "You can use it to learn or play",
    price: 1000,
    weight: 1.2,
  },
  {
    id: 2,
    name: "Phone",
    description: "You can use it to call your friends",
    price: 700,
    weight: 0.3,
  },
  {
    id: 3,
    name: "Book",
    description: "You can use it to study",
    price: 100,
    weight: 0.4,
  },
  {
    id: 4,
    name: "TV",
    description: "You can use it to entertain yourself",
    price: 1200,
    weight: 5.5,
  },
  {
    id: 5,
    name: "Bike",
    description: "You can use it to get fit",
    price: 500,
    weight: 9.5,
  },
  {
    id: 6,
    name: "Watch",
    description: "You can use it to not be late",
    price: 300,
    weight: 0.1,
  },
];

// get all products (id/name)
export async function getProducts() {
  return new Promise((resolve) => {
    const result = products.map((product) => {
      return { id: product.id, name: product.name };
    });
    setTimeout(() => resolve(result), 1000);
  });
}

// get a specific product
export async function getProduct(id) {
  return new Promise((resolve) => {
    let result = null;
    setTimeout(() => {
      for (let p of products) {
        if (p.id === id) {
          resolve(p);
          return;
        }
      }
      resolve(result);
    }, 1000);
  });
}
