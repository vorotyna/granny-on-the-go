//takes user to start order page
const express = require('express');
const router  = express.Router();

router.get('/start-order', (req, res) => {
  res.render('start-orders');
});

module.exports = router;
