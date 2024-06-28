import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ImageBtn = (props) => {
    const { onPress, xpos, ypos, src, title, width, height } = props;
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => {
        console.log('xyz');
        navigation.navigate('Feedback');
    }
    } style={[styles.button, { top: ypos, left: xpos, width: width, height: height }]}>
      <ImageBackground source={src} style={styles.image}>
        <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
  },
  image: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ImageBtn;