const express = require('express');
const router = express.Router();
const orderQueries = require('../db/queries/orders');


//Route to the items_in_order table aka the cart
router.post('/', (req, res) => {
  console.log(req.body);
  //If the quantity is 1 it knows to add to cart, else it will remove from cart
  if (req.body.quantity === '1') {
    orderQueries.addItemsToOrder(req.body)
      .catch(err => {
        err.message; 'Error adding item';
      });
    res.send({ message: 'Item added to cart.' });
  } else {
    orderQueries.removeItemsToOrder(req.body)
      .catch(err => {
        err.message; 'Error removing item';
      });
    res.send({ message: 'Item removed from cart.' });
  }

});

module.exports = router;
