
//sends text when when the event is triggered
$(() => {
  console.log('hello from document ready!')


  //When something is clicked - Send customer a text
  $('#accept-order').on('click', () => {

    console.log('Hello From clicked sms button')
    console.log('Time value', $('#time-for-order').value)

    $.ajax({
      type: 'POST',
      url: '/my-order/customer',
      data: {
        data:`To Customer ~ Thank you for placing an Order with Granny On The Go! Your order will be ready for pickup in ${$('#time-for-order').val()} minuets`} //Insert data to be sent via sms here
    })

  });


  // When something is clicked - Send resturant a text
  $('#complete-order').on('click', () => {
    console.log('Hello From clicked sms button')

    $.ajax({
      type: 'POST',
      url: '/my-order/restaurant',
      data: {
        data:'To Restaurant ~ Incoming order: 1x Good potatos'} //Insert data to be sent via sms here
    })

  });

});



