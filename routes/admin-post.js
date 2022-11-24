const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();


router.post('/' , (req,res) => {

  if (!req.session.id){
    const templateVars = {user: false, admin: false}
    res.render('login', templateVars)
  }

  if (req.session.id === 'admin'){
    const templateVars = {user: true, admin: true, time:req.body.time}
    return res.render('order-complete', templateVars)
  }

  const templateVars = {user: true, admin: false}
  res.render('login', templateVars);

})

module.exports = router;
