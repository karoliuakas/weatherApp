import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactDOM from 'react-dom';
import {getAllWeatherCelsius} from './ApiActions';

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
  //let data;
  //let data = getAllWeatherCelsius().then(text => console.log(text));
  const alo = ()=> {
      let data=getAllWeatherCelsius().then((item)=> console.log(item[0]))
   }



const AllWeatherData = () => (
    <Document >
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            {
                
            }
            <Text>asadas</Text>
          <Text>Important text ghahhhhaha</Text>
        </View>
      </Page>
    </Document>
  );

  export {AllWeatherData};