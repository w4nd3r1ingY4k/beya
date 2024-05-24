import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BaseMenu from './BottomMenu';

export default function LocaleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Locales Page</Text>
      <BaseMenu/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
  },
});