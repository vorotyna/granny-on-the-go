// Takes user to checkout page to
const express = require('express');
const userQueries = require('../db/queries/users');
const orderQueries = require('../db/queries/orders');

const router = express.Router();

router.get('/', (req, res) => {

  if (!req.session.id) {
    const templateVars = { user: false };
    res.render('my-orders-loggedout', templateVars);
  }

  const templateVars = { user: true };
  res.render('my-orders', templateVars);
});


// Get information about the user/order
router.get('/:userId', (req, res) => {
  userQueries.getUserInfoByOrderId(req.params.userId)
    .then(users => {
      orderQueries.getOrderSummary(req.params.userId)
        .then(orders => {
          returnObject = {};
          returnObject["userInfo"] = users;
          returnObject["order"] = orders;
          returnObject["totalQuantity"] = totalQuantity(returnObject.order);
          returnObject["totalPrice"] = totalPrice(returnObject.order);


          res.json({ returnObject });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


// Function that sum the quantity of rows ^
const totalQuantity = function(obj) {
  let sumQuantity = 0;
  for (let order of obj) {
    sumQuantity += order.quantity;
  }
  return sumQuantity;
};

// Function that sums the total price ^^
const totalPrice = function(obj) {
  let sumPrice = 0;
  for (let order of obj) {
    sumPrice += order.quantity * order.price;
  }
  return sumPrice;
};

module.exports = router;
