const sendCustomerSMS = require('../server-sms')

const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();

//This route will send to customer
router.post('/' , (req,res) => {
  console.log(req.body) //req.body includes anything passed into AJAX post request in client-sms.js
  //sendCustomerSMS(req.body)
  res.redirect('/my-order');
})

module.exports = router;


