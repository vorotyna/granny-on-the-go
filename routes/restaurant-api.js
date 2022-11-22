//takes user to start order page
const express = require('express');
const restaurantQueries = require('../db/queries/restaurant');
const orderQueries = require('../db/queries/orders');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('restaurant');
});

router.get('/:resId/:orderId', (req, res) => {
  // 1. gets items that belong to restaurant with resId
  // 2. gets the items from restaurant with resId that are in order with orderId
  console.log("TEEEST", req.params);
  restaurantQueries.getItemsbyRestaurantId(req.params.resId)
    .then(items => {
      orderQueries.getItemsByOrderId(req.params.orderId)
        .then(orderItems => {
          returnObject = {};
          returnObject["items"] = items;
          returnObject["orderItems"] = orderItems;
          // res.render('restaurant', { data: returnObject });

          res.json({ returnObject });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/:orderId', (req, res) => {

});
// TODO:
// only when you click start order is when you make a new order id
// when you get('restaurant') no order id is made, that way we can refetch the order items on add/delete
// Make a new order-id when we get to the restaurant page
// router post every time we add an item
// router delete every time we delete an item
// get /item/:id for items in  a certain restaurant



module.exports = router;
