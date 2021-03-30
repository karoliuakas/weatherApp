 const putWeatherCelsius = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({ "dayCelsius": temp });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://localhost:5000/weather/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))

      console.log("Ivyko 3");
  }

