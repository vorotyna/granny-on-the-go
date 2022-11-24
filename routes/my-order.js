const express = require('express');
const utils = require('./utils');
const userQueries = require('../db/queries/users');
const orderQueries = require('../db/queries/orders');

const router = express.Router();

//takes user to my-orders page
router.get('/', (req, res) => {

    //if user is not logged in
  if (!req.session.id) {
    const templateVars = { user: false, admin: false };
    res.render('my-orders-loggedout', templateVars);
  }

  // if user is admin
  if (req.session.id === 'admin'){
    const templateVars = {user: true, admin: true}
    res.render('my-orders', templateVars)
  }

  //if logged in
  const templateVars = { user: true, admin: false };
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
          returnObject["totalQuantity"] = utils.totalQuantity(returnObject.order);
          returnObject["totalPrice"] = utils.totalPrice(returnObject.order);


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
