const apiPort = 5000;
const apiHost = `http://localhost:${apiPort}`;
const apiWeather = `weather`;

const getWeatherCelsiusAverage = async () => {
    var midTemp;
    await fetch('http://localhost:5000/weather')
        .then(response => {
            return response.json();
        })
        .then((jsonData) => {
            let tempAvgNew = 0
            for (var i = 0; i < jsonData.length; i++) {
                tempAvgNew = tempAvgNew + jsonData[i].dayCelsius;
            }
            midTemp = tempAvgNew / jsonData.length;

        });
    return midTemp;
};

const getWeatherCelsiusNow = async () => {
    try {
        let dateNTime;
        let weatherNow;
        await fetch(`${apiHost}/${apiWeather}/now`)
            .then(response => {
                return response.json();
            })
            .then(responses => {
                let date = new Date(responses[0].date);
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let dt = date.getDate();
                let hours = date.getHours();
                let minutes = date.getMinutes();
                if (dt < 10) {
                    dt = '0' + dt;
                }
                if (month < 10) {
                    month = '0' + month;
                }
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                dateNTime = year + "-" + month + "-" + dt + " " + hours + ":" + minutes;
                weatherNow = responses[0].dayCelsius;
            })
        return { dateNTime, weatherNow };
    }
    catch {
        console.log("something wrong on Parsing weatherNow");
    }
};

export { getWeatherCelsiusAverage, getWeatherCelsiusNow};