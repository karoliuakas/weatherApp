import Header from './components/Header';
import react, { useState, useEffect } from 'react';
import Button from './components/Button';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const apiPort = 5000;
const apiHost = `http://localhost:${apiPort}`;
const apiWeather = `weather`;

function App() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>

      </Page>
    </Document>
  );
  const [temp, setTemp] = useState();
  const [currentTempTime, setCurrentTempTime] = useState();
  const [tempMid, setTempMid] = useState();

  const getWeatherCelsiusNow = async () => {
    try {
      await fetch(`${apiHost}/${apiWeather}/now`)
        .then(response => {
          return response.json();
        })
        .then(async responses => {
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
 
          setTemp(responses[0].dayCelsius);
          setCurrentTempTime(year+"-"+month+"-"+dt+" "+hours+":"+minutes);
          await console.log(`Dabartinė temp: ${responses[0].dayCelsius}`);
          await console.log(`DATA: ${responses[0].date}`);
        })
    }
    catch {
      console.log("something wrong");
    }
  }
  const getWeatherCelsiusAverage = () => {
    fetch('http://localhost:5000/weather')
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
        setTempMid(midTemp);
      });
  }
  async function submitWeat() {
    getWeatherCelsiusNow();
    getWeatherCelsiusAverage();
    const interval = await setInterval(async () => {
      await getWeatherCelsiusNow();
      await getWeatherCelsiusAverage();
    }, 5000);
  }
  window.onload = submitWeat;
  return (
    <div className="container">
      <Header></Header>
      <br></br>
      <h3>Šiuo metu yra: {temp} °C </h3>
      <span style={{ 'font-size': '10px' }}>(Atnaujinta: {currentTempTime})</span>
      <h3>Vidutinė paros temperdatūra: {parseFloat(tempMid).toFixed(1)} °C</h3>
      {/* <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Button text="Atsisiųsti PDF"></Button>)}
    </PDFDownloadLink> */}
      <button onClick={getWeatherCelsiusNow}>as</button>
    </div>
  );
}
export default App;

/*
let tempAvgNew = 0;
        let midTemp;
for (var i = 0; i < jsonData.length; i++) {
  let newTemp = jsonData[i].dayCelsius;
  console.log(`Paduodama temp yra ID: ${jsonData[i]._id}`)
  console.log(`Paduodama temp yra VALUE: ${jsonData[i].dayCelsius}`)
  setTempNew(prevTemp => [...prevTemp, newTemp]);
   console.log(`Parinta info`+tempNew[i]);
  tempAvgNew = tempAvgNew + parseFloat(tempNew[i]);

}
midTemp = parseFloat(tempAvgNew) / jsonData.length;
// console.log(`Vidutinė temp yra:${midTemp}`);
setTempMid(midTemp); */