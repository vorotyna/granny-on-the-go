const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();

//post route for submition of accept order form
router.post('/' , (req,res) => {

  //if user is not logged in
  if (!req.session.id){
    const templateVars = {user: false, admin: false}
    res.render('login', templateVars)
  }

  //if user = admin
  if (req.session.id === 'admin'){
    const templateVars = {user: true, admin: true, time:req.body.time}
    return res.render('order-complete', templateVars)
  }

  //if user is logged in and not admin
  const templateVars = {user: true, admin: false}
  res.render('login', templateVars);

})

module.exports = router;
