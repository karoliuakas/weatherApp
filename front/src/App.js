import Header from './components/Header';
import { useEffect, useState } from 'react';
//import Button from '@material-ui/core/Button';
import { getAllWeatherCelsius, getWeatherCelsiusAverage, getWeatherCelsiusNow } from './actions/ApiActions';
import { BlobProvider } from '@react-pdf/renderer';
import { AllWeatherData } from './actions/PdfActions';
import Button from './components/Button.jsx';
function App() {

  const [temp, setTemp] = useState();
  const [currentTempTime, setCurrentTempTime] = useState();
  const [tempMid, setTempMid] = useState(0);
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
let data;
const [items, setItems] = useState();
const getItems = () => fetch("http://localhost:5000/weather").then(res => res.json());
  // const lol = async () =>{
  // data = await getAllWeatherCelsius().then((item)=> (item.obj))
  // console.log(data);
  //   return await data;
  // }

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);
  window.onload = submitWeat;
  return (
    <div className="container">
      <Header></Header>
      <br></br>
      <h3>Šiuo metu yra: {temp} °C </h3>

      <span style={{ 'fontSize': '10px' }}>(Atnaujinta: {currentTempTime})</span>

      <h3>Vidutinė paros temperdatūra: {parseFloat(tempMid).toFixed(1)} °C</h3>

      <BlobProvider document={<AllWeatherData />}>
        {({ url }) => (
          <Button variant="contained" color="secondary" href={url} target="_blank">All weather data</Button>
        )}
      </BlobProvider>
      <Button m={2} variant="contained" color="secondary" onClick={() => { getWeatherCelsiusNow() }}>Refresh</Button>
      {items && items.map(item => (
        <div key={item.id}>{item.dayCelsius}</div>
      ))}
      <br />
      <br />
    </div>
  );
}

export default App;