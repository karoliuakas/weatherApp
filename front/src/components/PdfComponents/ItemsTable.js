import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import ItemsTableHeader from './ItemsTableHeader';
import ItemsTableRow from './ItemsTableRow';
import ItemsTableBlankSpace from './ItemsTableBlankSpace';
import ItemsTableFooter from './ItemsTableFooter';

const tableRowsCount = 20;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#101010',
    },
});

  const ItemsTable = ({items}) => (
    <View style={styles.tableContainer}>
        <ItemsTableHeader />
        <ItemsTableRow items={items} />
       {/*  <ItemsTableBlankSpace rowsCount={ 3} /> */}
        <ItemsTableFooter items={items} />
    </View>
  );
  
  export default ItemsTable