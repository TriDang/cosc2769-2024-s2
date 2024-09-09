const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function selectAndUpdate() {
  try {
    await client.connect();
    const db = client.db("fullstack");
    const collection = db.collection("books");

    const documentBefore = await collection
      .find({ _id: 516 }, { projection: { title: 1, pageCount: 1 } })
      .toArray();
    console.log("Before", documentBefore);

    await collection.updateOne({ _id: 516 }, { $set: { title: "Best Book about Programming" } });

    const documentAfter = await collection
      .find({ _id: 516 }, { projection: { title: 1, pageCount: 1 } })
      .toArray();
    console.log("After", documentAfter);

    await client.close();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

selectAndUpdate();
