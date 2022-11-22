// Takes user to checkout page to
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {

  if (!req.session.id){
    const templateVars = {user: false}
    res.render('my-order', templateVars)
  }

  const templateVars = {user: true}
  res.render('my-orders', templateVars);
});

module.exports = router;
