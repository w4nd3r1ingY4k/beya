import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import BaseMenu from './components/BottomMenu';
import NavigateBtn from './components/NavigateBtn';
import { fetchDataFromServer } from './components/Utils';
import LocaleScreen from './components/LocaleScreen'; 

const Stack = createStackNavigator();

function HomeScreen() {
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
      <NavigateBtn
        title='click to get text from server'
        xpos={100}
        ypos={350}
        color='grey'
        onPress={handleButtonPress} // Pass the function to be called on press
      />
      {serverResponse && (
        <Text style={styles.response}>{`Fetched data: ${JSON.stringify(serverResponse)}`}</Text>
      )}
      <BaseMenu/>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Locale" component={LocaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  response: {
    top: -100
  },
});