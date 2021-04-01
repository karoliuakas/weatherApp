import { Document, Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";
import * as React from "react";
import logo from '../images/weather2.png';
import Header from '../components/PdfComponents/Header';
import Footer from '../components/PdfComponents/Footer';
import Number from '../components/PdfComponents/Number';
import InfoAbout from '../components/PdfComponents/InfoAbout';
import ItemsTable from '../components/PdfComponents/ItemsTable';
import Sign from '../components/PdfComponents/Sign';

Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
  ]
});
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 15,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  logo: {
    height: 66,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

let counter = 0;
const TestDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page} >
        <Image style={styles.logo} src={logo} />
        <Header title='Statistic about weather' />
        <Number items={data} />
        <InfoAbout items={data} />
        <ItemsTable items={data} />
        <Sign />
        </Page>
        <Page>
          {data.map(item => (
          <Text key={item._id}  >
            [{counter += 1}] - Data: {(item.date).slice(0, 10)} {(item.date).slice(11, 16)} Laipsniai: {item.dayCelsius}°C
          </Text>
        ))}
        </Page>
        <Text>
        </Text>
        <Text>No more data =/</Text>
     
    </Document>
  );
};

export default TestDocument;
