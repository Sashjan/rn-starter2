import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1'},//one of the way to add a 'key' is this: {name: 'Friend #1', key: '1'}
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
      keyExtractor={friend => friend.name}// another way to add a 'key' is using the properties 'keyExtractor'
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