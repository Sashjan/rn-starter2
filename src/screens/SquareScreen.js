import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {

  const[red, setRed] = useState(0);
  const[green, setGreen] = useState(0);
  const[blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    /* we can use this logic using nested if statements for each of the colors
    if (color === 'red') {
      if (red + change > 255 || red + change < 0) {
        return;
      }else {
        setRed(red + change);
      }
    }*/
    //or we can use ternary statement to kind of condense down this logic
    switch (color) {

      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
        return;
      default:
        return;
    }

  };
  console.log(red);
  return <View>

    <ColorCounter 
      onIncrease={() => setColor('red', COLOR_INCREMENT)} 
      onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      color="Red" 
    />
    <ColorCounter 
      color="Green" 
      onIncrease={() => setColor('green', COLOR_INCREMENT)}
      onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
    />
    <ColorCounter 
      color="Blue" 
      onIncrease={() => setColor('blue', COLOR_INCREMENT)}
      onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
    />
    <View 
      style={{
      height: 150, 
      width: 150, 
      backgroundColor: `rgb(${red},${green},${blue})`
      }}
    />
  </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;