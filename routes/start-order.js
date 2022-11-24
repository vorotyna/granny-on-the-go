//takes user to start order page
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {

  if (!req.session.id){
    const templateVars = {user: false, admin: false}
    res.render('restaurant', templateVars)
  }

  if (req.session.id === 'admin'){
    const templateVars = {user: true, admin: true}
    res.render('restaurant', templateVars)
  }



  const templateVars = {user: true, admin: false}
  res.render('restaurant', templateVars);
});

module.exports = router;
