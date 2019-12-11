import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1'},
    {name: 'Friend #2'},
    {name: 'Friend #3'},
    {name: 'Friend #4'},
    {name: 'Friend #5'},
    {name: 'Friend #6'},
    {name: 'Friend #7'},
    {name: 'Friend #8'},
    {name: 'Friend #9'}
  ];

  return (
    <FlatList 
      data={friends} 
      renderItem={({item}) => {
        //element === {item: {name: 'Friend #1'}, index: 0}
        //item === {name: 'Friend #1'}
        return <Text>{item.name}</Text>
      }}
    />
  );
};

const style = StyleSheet.create({});

export default ListScreen;