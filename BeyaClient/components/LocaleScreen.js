import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import BaseMenu from './BottomMenu';
import SwitchBtn from './SwitchBtn';

export default function LocaleScreen() {
  const initialRegion = {
    latitude: 41.826820,
    longitude: -71.402931,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    zoom: 1,
  };

  // Define the coordinates for the polygon
  const polygonCoordinates = [
    { latitude: 41.82664, longitude: -71.40355 },
    { latitude: 41.82664, longitude: -71.403 },
    { latitude: 41.8254, longitude: -71.4028 },
    { latitude: 41.8253, longitude: -71.40355 },
    
  ];

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
        <Polygon
          coordinates={polygonCoordinates}
          fillColor="#F2A8C2" 
          strokeColor="#D61D7F" 
          strokeWidth={1}
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

