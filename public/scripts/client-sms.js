const sendSMS = require('../../server-sms')

$(() => {
  console.log('hello from document ready!')
  $('#test-sms').on('click', () => {

    console.log('Hello From sms.js')

    //sendSMS('Hello from sms.js!')

  });
});
