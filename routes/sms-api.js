const sendSMS = require('../server-sms')

const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();


router.post('/' , (req,res) => {
  console.log(req.body) //req.body includes anything passed into AJAX post request (data)
  //sendSMS(req.body)
  res.redirect('/my-order');
})

module.exports = router;


