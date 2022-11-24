const express = require('express');
const router = express.Router();
const orderQueries = require('../db/queries/orders');

router.post('/', (req, res) => {
  console.log(req.body);
  if (req.body.quantity === '1') {
    orderQueries.addItemsToOrder(req.body)
      .catch(err => {
        err.message; 'Error adding item';
      });
    //res.send({message:'Item added to cart.'})
  } else {
    orderQueries.removeItemsToOrder(req.body)
      .catch(err => {
        err.message; 'Error removing item';
      });
    res.send({ message: 'Item removed from cart.' });
  }

});

module.exports = router;
