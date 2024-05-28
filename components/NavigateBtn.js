import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function NaivigateBtn(props) {
    const { onPress, title, xpos, ypos, color, bc, b_width, b_height } = props;

    return (
        <Pressable style={[styles.clientPayButton, {width: b_width, height: b_height, left: xpos, top: ypos, backgroundColor: color, borderColor: bc}]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    clientPayButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,  // Set the width to a fixed value
        height: 50,  // Set the height to the same value as the width
        borderRadius: 25,  // Set the border radius to half of the width/height
        borderWidth: 2,
        elevation: 3,
        position: 'absolute'
    
    },
    text: {
        fontSize: 13,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});