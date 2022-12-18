const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model

const mealsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true }
})

// Creating Meals model : We need to convert our schema into a model-- will be stored in 'meals' collection.  Mongo does this for you automatically
// Models are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
const Meals = mongoose.model("Meals", mealsSchema)


//make this exportable to be accessed in `app.js`
module.exports = Meals