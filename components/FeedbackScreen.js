import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import BaseMenu from './BottomMenu';
export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    // Implement your feedback submission logic here
    Alert.alert('Feedback Submitted', `Thanks for the feedback! We really appreciate it :)`);
    setFeedback(''); // Clear the feedback input after submission
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.main_text}>Feedback</Text>
      <Text style={styles.text}>We would love to hear your experience / suggestions for Beya!</Text>
      <Text style={styles.text}>Let us know using the feedback box below:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your feedback here..."
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleFeedbackSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <BaseMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  main_text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10,
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#C22980',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});