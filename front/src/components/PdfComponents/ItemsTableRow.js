import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#101010'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#101010',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '80%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '20%',
        textAlign: 'right',
        paddingRight: 8,
    },
  });


  const ItemsTableRow = ({items}) => {
    const rows = items.map(item => 
        <View style={styles.row} key={item._id}>
            <Text style={styles.description}>Data: {(item.date).slice(0, 10)} {(item.date).slice(11, 16)}</Text>
            <Text style={styles.qty}>{item.dayCelsius}°C</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default ItemsTableRow