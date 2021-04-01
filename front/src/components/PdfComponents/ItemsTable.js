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
        borderColor: '#bff0fd',
    },
});

  const ItemsTable = ({data}) => (
    <View style={styles.tableContainer}>
        <ItemsTableHeader />
        <ItemsTableRow items={data} />
        <ItemsTableBlankSpace rowsCount={ tableRowsCount - 5} />
        <ItemsTableFooter items={data} />
    </View>
  );
  
  export default ItemsTable