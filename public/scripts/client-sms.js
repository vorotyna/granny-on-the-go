
//sends text when test sms button is clicked (TESTING PURPOSES)
$(() => {
  console.log('hello from document ready!')

  //When something is clicked - Send customer a text
  $('#test-sms').on('click', () => {
    console.log('Hello From clicked sms button')

    $.ajax({
      type: 'POST',
      url: '/my-order/customer',
      data: {
        data:'This is some data'} //Insert data to be sent via sms here
    })

  });


  //When something is clicked - Send resturant a text
  $('#test-sms').on('click', () => {
    console.log('Hello From clicked sms button')

    $.ajax({
      type: 'POST',
      url: '/my-order/restaurant',
      data: {
        data:'This is data'} //Insert data to be sent via sms here
    })

  });


});
