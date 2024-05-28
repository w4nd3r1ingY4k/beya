import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';
import BaseMenu from './BottomMenu';

export default function LocaleScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const initialRegion = {
    latitude: 41.826820,
    longitude: -71.402931,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const polygonCoordinates = [
    { latitude: 41.82664, longitude: -71.40355 },
    { latitude: 41.82664, longitude: -71.403 },
    { latitude: 41.8254, longitude: -71.4028 },
    { latitude: 41.8253, longitude: -71.40355 },
  ];

  const handlePolygonPress = () => {
    setModalInfo({
      title: 'BrownU Main Green',
      description: 'This is the Brown University Main Green locale',
      item1: '- create@Brown',
      item2: '- Hermanitos',
    });
    setModalVisible(true);
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
        <Polygon
          coordinates={polygonCoordinates}
          fillColor="rgba(242, 168, 194, 0.3)" // Lighter pale pink fill with opacity
          strokeColor="rgba(214, 29, 127, 0.8)" // Stroke with opacity
          strokeWidth={2}
          onPress={handlePolygonPress}
        />
      </MapView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{modalInfo?.title}</Text>
            <Text style={styles.modalDescription}>{modalInfo?.description}</Text>
            <Text style={styles.modalItem}>{modalInfo?.item1}</Text>
            <Text style={styles.modalItem}>{modalInfo?.item2}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalItem: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#C22980',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

