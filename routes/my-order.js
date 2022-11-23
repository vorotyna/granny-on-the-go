// Takes user to checkout page to
const express = require('express');
const userQueries = require('../db/queries/users');
const orderQueries = require('../db/queries/orders');

const router = express.Router();

router.get('/', (req, res) => {

  if (!req.session.id) {
    const templateVars = { user: false };
    res.render('my-orders', templateVars);
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

          res.json({ returnObject });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
