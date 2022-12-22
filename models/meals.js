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

const Meals = mongoose.model("Meals", mealsSchema)

//make this exportable to be accessed in `app.js`
module.exports = Meals