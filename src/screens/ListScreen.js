import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend 1', age: 20},//the first way to add a key is this: {name: 'Friend #1', key: '1'}
    {name: 'Friend 2', age: 45},
    {name: 'Friend 3', age: 32},
    {name: 'Friend 4', age: 27},
    {name: 'Friend 5', age: 53},
    {name: 'Friend 6', age: 30},
    {name: 'Friend 7', age: 50},
    {name: 'Friend 8', age: 49},
    {name: 'Friend 9', age: 28}
  ];

  return (
    <FlatList 
      //horizontal={true}//shorthand is just the word 'horizontal'
      //showsHorizontalScrollIndicator={false}//to hide horizontal scroll bar
      keyExtractor={friend => friend.name}//the second way to add a key
      data={friends} 
      renderItem={({item}) => {
        //element === {item: {name: 'Friend #1'}, index: 0}
        //item === {name: 'Friend #1'}
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;