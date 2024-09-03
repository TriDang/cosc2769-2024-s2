// const users = [
//   { id: 1, username: "alice", password: "password" },
//   { id: 2, username: "bob", password: "123456" },
// ];

/**
 * The same users array, but with hashed passwords
*/

const users = [
  { id: 1, username: "alice", password: "$2b$10$rO7HRqriDp2SnL3VHk/a/OFolU8hZM4jbqNmKUqfrnyDzSRbDem8a" },
  { id: 2, username: "bob", password: "$2b$10$mimc7CSgm3Mbx7lw1eTXB.wdLuDj7NPVJEAE3FQjFcvkGZlQk8IHu" },
];

const products = [
  { id: 1, name: "Phone", price: 400 },
  { id: 2, name: "Laptop", price: 1500 },
  { id: 3, name: "PC", price: 1200 },
];

exports.users = users;
exports.products = products;
