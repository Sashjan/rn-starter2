import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageScore, imageSource, title}) => {
  
  return <View>
    <Image source={imageSource}/>
    <Text>{title}</Text>
    <Text>Image Score - {imageScore}</Text>
  </View>

};

const styles = StyleSheet.create({});

export default ImageDetail;