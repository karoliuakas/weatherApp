import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#101010'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#101010',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '80%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '20%'
    },
  });

  const ItemsTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.description}>Date of weather</Text>
        <Text style={styles.qty}>Day celsius</Text>
    </View>
  );
  
  export default ItemsTableHeader