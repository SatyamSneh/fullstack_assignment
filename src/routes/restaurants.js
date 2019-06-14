let RestaurantsModel = require('../models/restaurants.model')
let express = require('express')
let router = express.Router()

// Create a new Restaurant
// POST localhost:3000/restaurant
router.post('/restaurant', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  if(!req.body.email) {
    // ...
  }

  // let user = {
  //   name: 'firstname lastname',
  //   email: 'email@gmail.com'
  // }

  let model = new RestaurantsModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET
router.get('/dishes', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  RestaurantsModel.findOne({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// UPDATE
router.put('/dishes', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  DishesModel.findOneAndUpdate({
    email: req.query.email
  }, req.body, {
    new: true
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE
router.delete('/dishes', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  DishesModel.findOneAndRemove({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
