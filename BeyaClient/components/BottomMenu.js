import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavigateBtn from './Navigate';

export default function BaseMenu() {
    return (
        <View style={styles.container}>
            <NavigateBtn 
                title="Pay" 
                xpos={-25} 
                ypos={730} 
                color="pink" 
                borderColor="red"
                b_width={50}
                b_height={50}
                onPress={() => alert('Pay Button Pressed')}
            />
            <NavigateBtn 
                title="Home" 
                xpos={100} 
                ypos={760} 
                color="pink" 
                borderColor="green"
                b_width={50}
                b_height={50}
                onPress={() => alert('Home Button Pressed')}
            />
            <NavigateBtn 
                title="Locales" 
                xpos={-150} 
                ypos={760} 
                color="pink" 
                borderColor="orange"
                b_width={50}
                b_height={50}
                onPress={() => alert('Locales Button Pressed')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
});