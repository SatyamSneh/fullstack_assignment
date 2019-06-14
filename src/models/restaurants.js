let mongoose = require('mongoose')

const server = ''
const database = ''
const user = ''
const password = ''

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let RestaurantsSchema = new mongoose.Schema({
  name: String,
  id:String,
  address:String,
  email: {
    type: String,
    required: true,
    unique: true
  }

})

module.exports = mongoose.model('restaurant', RestaurantsSchema)
