import Header from './components/Header';
import { useState} from 'react';
import Button from '@material-ui/core/Button';
import { getWeatherCelsiusAverage, getWeatherCelsiusNow } from './actions/ApiActions';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { MyFirstDoc } from './actions/PdfActions';
function App() {

  const [temp, setTemp] = useState();
  const [currentTempTime, setCurrentTempTime] = useState();
  const [tempMid, setTempMid] = useState(0);

  async function submitWeat() {
    await setParams();
    return await setInterval(setParams, 5000);
  }
  async function setParams() {
    let { dateNTime, weatherNow } = await getWeatherCelsiusNow();
    setTemp(await weatherNow);
    setCurrentTempTime(await dateNTime);
    setTempMid(await getWeatherCelsiusAverage());
  }
  window.onload = submitWeat;
  return (
    <div className="container">
      <Header></Header>
      <br></br>
      <h3>Šiuo metu yra: {temp} °C </h3>

      <span style={{ 'fontSize': '10px' }}>(Atnaujinta: {currentTempTime})</span>

      <h3>Vidutinė paros temperdatūra: {parseFloat(tempMid).toFixed(1)} °C</h3>

      { <PDFDownloadLink document={< MyFirstDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Button  variant="contained" color="secondary"> Atsisiusti pdf</Button>)}
    </PDFDownloadLink> }
      <Button variant="contained" color="secondary" onClick={() => { getWeatherCelsiusNow() }}>Refresh</Button>
      <br />
      <br />
    </div>
  );
}

export default App;