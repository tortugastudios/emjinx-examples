const submitForm = async () => {
  const data = new FormData(document.getElementById('contact'))
  try {
    const response = await fetch('https://api.emjinx.com/rest/', {
      method: 'POST',
      headers: {
        'EMJINX-API-KEY': 'your-emjinx-api-key',
      },
      body: data,
    })
    const json = await response.json()
    console.log(json)
  } catch (error) {
    console.log(error)
  }
}
