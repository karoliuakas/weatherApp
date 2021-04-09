const express = require('express');
const mongodb = require('mongoose');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const axios = require('axios');
const weatherRoute = require('./back/routers/weatherRouter.js');
var cors = require('cors');
const {showConsole,showConsoleOrSm} = require('./back/functions/weatherData.js');
const { path } = require('dotenv/lib/env-options');
require('dotenv/config');

//global variables
const port = 5000;
let host = `http://localhost:${port}`;
var weatherNow =0;
const app = express();
app.use(bodyParser.json());

app.use(cors());
app.disable('etag');
app.use('/weather', weatherRoute);
//keliai



//prisijungimas prie DB
mongodb.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('prisijungtaa prie DB :)');
})

app.listen(port, () => {

    console.log(`Serveris paleistas unt ${port} porto :)`);

    weatherPutToDB();
    setInterval(weatherPutToDB, 100000);
});
async function checkWeatherData(){

}
async function weatherCelsiusAverage(){
    axios.get(`${host}/weather`)
    .then(response => {
        return response.json();
      })
      .then((jsonData) => {
        let tempAvgNew = 0
        let midTemp = 0;
        for (var i = 0; i < jsonData.length; i++) {
          tempAvgNew = tempAvgNew + jsonData[i].dayCelsius;
        }
        midTemp = tempAvgNew / jsonData.length;
      });

    
}
async function weatherPutToDB(){
    weatherCelsiusNow().then(async response => {
       await axios
        .post(`${host}/weather/add`, {
            'dayCelsius': parseFloat(response) 
        })
        .catch(error => {
            console.error(error)
        })
    console.log(`Įdėta temperatūra yra: ${parseFloat(response)}`)
    }).catch(error => {
        console.log(error)
    })
}
async function weatherCelsiusNow() {
    await axios.get('http://www.hkk.gf.vu.lt/json.php')
    .then(function (responsee) {
        const answer_array = responsee.data.split(',');
        const weatherValue = answer_array[3].split('"');
        weatherNow = weatherValue[3];
    })
    return weatherNow;
}


