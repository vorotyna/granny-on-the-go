
//sends text when test sms button is clicked (TESTING PURPOSES)
$(() => {
  console.log('hello from document ready!')
  $('#test-sms').on('click', () => {
    console.log('Hello From clicked sms button')

    $.ajax({
      type: 'POST',
      url: '/my-order',
      data: {
        data:'Hi Cailee <3'}
    })

  });
});
