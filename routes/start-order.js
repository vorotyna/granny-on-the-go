//takes user to start order page
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {

  if (!req.session.id){
    const templateVars = {user: false}
    res.render('restaurant', templateVars)
  }

  const templateVars = {user: true}
  res.render('restaurant', templateVars);
});

module.exports = router;
