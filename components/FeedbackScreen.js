import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import BaseMenu from './BottomMenu';

export default function FeedbackScreen() {
    return(
        <Text style={styles.text}>This is the feedback Page</Text>
    );
};

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
