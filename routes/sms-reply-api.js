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




//THIS ROUTE REQUIRES THE FOLLOWING:
//NGROK TO BE RUNNING THE LOCAL SERVER TO THE PUBLIC HTTP
//TWILIO WEBHOOK TO BE SET TO THE FORWARDING NGROK ADDRESS WITH /SMS AT THE END


//IF THIS DOES NOT WORK, CHECK THE WEBHOOK ON
//https://console.twilio.com/us1/develop/phone-numbers/manage/incoming?frameUrl=%2Fconsole%2Fphone-numbers%2Fincoming%2FPNfea347f2537a4a5a0aea1bf5cb65a121%3Fx-target-region%3Dus1
