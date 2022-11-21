const replySMS = require('../server-sms')

const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();


//This post route takes the reply to the twilio message and stores it to a variable

router.post('/' , (req,res) => {
  const smsMsg = req.body.Body; //Contains what the reply message was
  console.log('req.body from incoming text: ', smsMsg)

})

module.exports = router;
