let mongoose = require('mongoose')

const server = ''
const database = ''
const user = ''
const password = ''

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let DishesSchema = new mongoose.Schema({
  name: String,
  id:String,
  thumbnailpath:String

})

module.exports = mongoose.model('dishes', DishesSchema)
