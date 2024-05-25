import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const SwitchBtn = (props) => {
  const { xpos, ypos } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container, { top: ypos, left: xpos }]}>
      <Switch
        trackColor={{ false: 'gray', true: "#C22980" }}
        //thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default SwitchBtn;