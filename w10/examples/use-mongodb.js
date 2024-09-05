const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";  // localhost doesn't work
const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    await client.close();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connect();
