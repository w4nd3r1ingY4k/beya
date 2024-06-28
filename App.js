import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import BaseMenu from './components/BottomMenu';
import NavigateBtn from './components/NavigateBtn';
import { fetchDataFromServer } from './components/Utils';
import LocaleScreen from './components/LocaleScreen'; 
import SwitchBtn from './components/SwitchBtn';
import ImageBtn from './components/ImageBtn';
import FeedbackScreen from './components/FeedbackScreen';

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

  const dummyPress = () => {
    console.log('Button Pressed', 'You pressed the button!');
  }

  return (
    <View style={styles.container}>
      <ImageBtn
        onPress={dummyPress}
        xpos={20} // Adjust position as needed
        ypos={-5} // Adjust position as needed
        width={40}
        height={100}
        src={require('./assets/InfoBtn.png')} // Local image, adjust the path as needed
      />
      <SwitchBtn xpos={315} ypos={0}/>
      <NavigateBtn
        title='click to get text from server'
        xpos={100}
        ypos={330}
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
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
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