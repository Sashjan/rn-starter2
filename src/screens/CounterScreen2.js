import React,{useReducer} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
//state === {counter: 0}
//dispatch === {type: 'change_increment' || 'change_decrement', payload: 1}

  switch(action.type) {

    case 'change_increment':
      return {...state, counter: state.counter + action.payload};
    case 'change_decrement':
      return {...state, counter: state.counter - action.payload};
    default:
      return state;
  };
};

const CounterScreen = () => {
  const[state, dispatch] = useReducer(reducer, {counter: 0});

  return <View>
    <Button 
      title="Increase" 
      onPress={() => dispatch(
        {type: 'change_increment', payload: 1}
      )}
    /> 
    <Button 
      title="Decrease"
      onPress={() => dispatch(
        {type: 'change_decrement', payload: 1}
      )}
    />
    <Text>Counter: {state.counter}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default CounterScreen;