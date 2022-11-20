// Takes user to login page to
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('my-orders');
});

module.exports = router;
