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
      url: 'http://0.0.0.0:8000/api/rest/',
      headers: {
        'EMJINX-API-KEY': 'your-emjinx-api-key',
        'Content-Type': 'application/json',
      },
      // data: formData,
      data: JSON.stringify(formData),
      dataType: 'json',
      encode: true,
    }).done(function (data) {
      console.log(data)
    })
  })
})
