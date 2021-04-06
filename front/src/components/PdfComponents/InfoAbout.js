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


  const InfoAbout = () => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Document created by:</Text>
        <Text>K.Ž.</Text>
    </View>
  );
  
  export default InfoAbout;