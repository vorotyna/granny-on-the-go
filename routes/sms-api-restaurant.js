const { sendRestaurantSMS } = require('../server-sms')

const express = require('express');
const { application } = require('express');
const router  = express.Router();
const app = express();

//This route will send to resturant
router.post('/' , (req,res) => {
  console.log(req.body.data) //req.body includes anything passed into AJAX post request in client-sms.js
  sendRestaurantSMS(req.body.data)
})

module.exports = router;
