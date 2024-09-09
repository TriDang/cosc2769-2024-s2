const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:/fullstack");

  // Define a schema for book document
  const bookSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    pageCount: Number
  });

  // Create a model based on the schema
  const Book = mongoose.model("Book", bookSchema);

  const book = await Book.findOne({ _id: 516 }, {title: 1, pageCount: 1});
  console.log("Before", book);

  // Update and save
  book.title = "Newer";
  await book.save();

  // Find the book again
  const book2 = await Book.findOne({ _id: 516 }, {title: 1, pageCount: 1});
  console.log("After", book2);

  mongoose.disconnect();
};

main();