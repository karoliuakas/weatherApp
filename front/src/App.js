import Header from './components/Header';
import { useEffect, useState } from 'react';
//import Button from '@material-ui/core/Button';
import { getAllWeatherCelsius, getWeatherCelsiusAverage, getWeatherCelsiusNow } from './actions/ApiActions';
import { BlobProvider } from '@react-pdf/renderer';
import Button from './components/Button.jsx';
import Container from '@material-ui/core/Container';
import PDFLink from './actions/PdfLink.js';
import * as React from "react";
import { render } from "react-dom";

function App() {

  const [temp, setTemp] = useState();
  const [currentTempTime, setCurrentTempTime] = useState();
  const [tempMid, setTempMid] = useState(0);
    const [items, setItems] = useState();
  // let data = getAllWeatherCelsius().then((items)=>{
  //   data = items;
  // });
  async function submitWeat() {
    // data = await getAllWeatherCelsius().then((item)=> (item.obj))
    await setParams();
    return await setInterval(setParams, 5000);
  }
  async function setParams() {
    let { dateNTime, weatherNow } = await getWeatherCelsiusNow();
    setTemp(await weatherNow);
    setCurrentTempTime(await dateNTime);
    setTempMid(await getWeatherCelsiusAverage());
  }

  // const lol = async () =>{
  // data = await getAllWeatherCelsius().then((item)=> (item.obj))
  // console.log(data);
  //   return await data;
  // }


  const getItems = () => fetch("http://localhost:5000/weather").then(res => res.json());
  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);

  window.onload = submitWeat;
  return (
    <div className="container">
      <Header></Header>
      <br></br>
      <h3>Right now it is: {temp} °C </h3>

      <span style={{ 'fontSize': '10px' }}>(DataBase updated: {currentTempTime})</span>

      <h3>Daily average temperature: {parseFloat(tempMid).toFixed(1)} °C</h3>

      <Button m={2} variant="contained" color="secondary" onClick={() => { getWeatherCelsiusNow() }}>Refresh</Button>
      <Button variant="contained" color="secondary"n><PDFLink/></Button>
      
      
      <br />
      <br />
    </div>
  );
}

export default App;