const express = require('express');
const router = express.Router();
const orderQueries = require('../db/queries/orders');

router.post('/', (req, res) => {
  console.log(req.body)
  if (req.body.quantity === 1) {
    orderQueries.addItemsToOrder(req.body)
    res.send({message:'Item added to cart.'})
  } else {
    orderQueries.removeItemsToOrder(req.body)
    res.send({message:'Item remove to cart.'})
  }

});

module.exports = router;
