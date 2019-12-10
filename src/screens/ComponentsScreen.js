import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi, there!';
  const name = 'Oleksandr';
  //we can save some JSX code inside a variable and show it on the screen like that:
  const someJSXCodeInsideVariable = <Text>Hi there again!</Text>;

  return <View>
    <Text style={styles.textStyle}>This is the Components screen</Text>
    <Text>{greeting}</Text>
    {someJSXCodeInsideVariable}
    <Text style={styles.secondHeaderStyle}>Getting started with react native!</Text>
    <Text style={styles.greetingName}>My name is {name}</Text>

  </View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  secondHeaderStyle: {
    fontSize: 45
  },
  greetingName: {
    fontSize: 20
  }
});

export default ComponentsScreen;