import { Document, Page, Text, View } from "@react-pdf/renderer";
import * as React from "react";

let counter = 0;
const TestDocument = ({ data }) => {
  return (
    <Document>
      <Page size="A4" > 
        <View >
          {data.map(item => (
            <Text key={item._id}  >
            [{counter +=1}] - Data: {(item.date).slice(0,10)} {(item.date).slice(11,16)} Laipsniai: {item.dayCelsius}°C
            </Text>
          ))}
          <Text>
          </Text>
          <Text>Daugiau duomenų nėra :)</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TestDocument;
