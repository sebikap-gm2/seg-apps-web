export class HTTP {
  async post(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST',
      // mode: 'no-cors', // no-cors, *cors, same-origin
      // cache: 'no-cache',
      // credentials: 'omit', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response)
    console.log(response.status)

    if (!response.ok) {
      console.log('error')
      return response.json()
    } else {
      return response.json(); // parses JSON response into native JavaScript objects
    }
  }
}