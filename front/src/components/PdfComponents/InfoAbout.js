import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
  });


  const InfoAbout = ({items}) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>Karolis Žilevičius</Text>
        <Text>Vilnius</Text>
        <Text>+37060311379</Text>
        <Text>karolis.zilevicius@gmail.com</Text>
    </View>
  );
  
  export default InfoAbout;