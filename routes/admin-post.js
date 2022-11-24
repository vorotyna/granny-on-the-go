const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();


router.post('/' , (req,res) => {

  const templateVars = {time: req.body.time}
  res.render('order-complete', templateVars)
})

module.exports = router;
