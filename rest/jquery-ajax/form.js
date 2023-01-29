$(document).ready(function () {
  $('#contact').submit(function (event) {
    event.preventDefault()

    var formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      phoneNumber: $('#phoneNumber').val(),
      message: $('#message').val(),
    }

    $.ajax({
      type: 'POST',
      url: 'https://api.emjinx.com/rest/',
      headers: {
        'EMJINX-API-KEY': 'your-emjinx-api-key',
      },
      data: formData,
      encode: true,
    }).done(function (data) {
      console.log(data)
    })
  })
})
