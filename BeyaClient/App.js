import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import NaivigateBtn from './components/NaivigateBtn';
import BaseMenu from './components/BottomMenu';
import NaivigateBtn from './components/Navigate';
import { fetchDataFromServer } from './components/Utils';

export default function App() {
  const [serverResponse, setServerResponse] = useState(null);

  const handleButtonPress = async () => {
    try {
      const data = await fetchDataFromServer();
      setServerResponse(data);
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  return (
    <View style={styles.container}>
      <NaivigateBtn
        title='click to get text from server'
        xpos={100}
        ypos={350}
        color='grey'
        onPress={handleButtonPress} // Pass the function to be called on press
      />
      {serverResponse && (
        <Text>{`Fetched data: ${JSON.stringify(serverResponse)}`}</Text>
      )}
      <BaseMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});