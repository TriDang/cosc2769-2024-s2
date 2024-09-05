const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function connect_select() {
  try {
    await client.connect();
    const db = client.db("fullstack");
    const collection = db.collection("books");

    await collection.updateOne(
      { _id: 516 },
      { $set: { title: "Node in Action" } }
    );

    const documents = await collection.find({ _id: 516 }).toArray();
    console.log(documents);

    await client.close();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connect_select();
