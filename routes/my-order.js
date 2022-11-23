// Takes user to checkout page to
const express = require('express');
const userQueries = require('../db/queries/users');

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
  console.log('poop', req.params);
  userQueries.getUserInfoByOrderId(req.params.userId)
    .then(users => {
      returnObject = {};
      returnObject["userInfo"] = users;
      res.json({ returnObject });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
