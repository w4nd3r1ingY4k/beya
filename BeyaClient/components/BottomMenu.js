import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavigateBtn from './NavigateBtn';
import 'react-native-gesture-handler';

export default function BaseMenu() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <NavigateBtn 
        title="Pay" 
        xpos={-25} 
        ypos={660} 
        color="#C22980" 
        borderColor="black"
        b_width={50}
        b_height={50}
        onPress={() => alert('Pay Button Pressed')}
      />
      <NavigateBtn 
        title="Locale" 
        xpos={100} 
        ypos={660} 
        color="#C22980" 
        borderColor="black"
        b_width={50}
        b_height={50}
        onPress={() => navigation.navigate('Locale')}
      />
      <NavigateBtn 
        title="Home" 
        xpos={-150} 
        ypos={660} 
        color="#C22980" 
        borderColor="black"
        b_width={50}
        b_height={50}
        //onPress={() => alert('Home Button Pressed')}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    top: -25,
    left: 200
  },
});