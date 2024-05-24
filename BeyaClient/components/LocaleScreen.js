import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import BaseMenu from './BottomMenu';

export default function LocaleScreen() {
  const initialRegion = {
    latitude: 41.826820,
    longitude: -71.402931,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Locales Page</Text>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{ latitude: 41.826820, longitude: -71.402931 }}
          title="Marker Title"
          description="Marker Description"
        />
        
      </MapView>
      <BaseMenu />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  map: {
    flex: 1,
    width: '100%',
  },
});