
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN;  // Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

//Twilio Phone Number - Where the texts will be receive from
const twilioPhone = '+15873192825';





//This function takes in a string as a message and sends it via sms from the twilio api

const sendSMS = function (message){
  client.messages
    .create({
        body: message,
        from: twilioPhone,
        statusCallback: 'http://postb.in/1234abcd',
        to: '+15872204888'
      })
    .then(message => console.log(message.sid));

}

//This funciton takes time in minuets and returns a sms message from the Twilio api
const sendAproxTime = function (time){
  const response = new MessagingResponse();

  response.message(`Your order will be ready in ${time} minuets`);

}




module.exports = sendSMS, sendAproxTime;
