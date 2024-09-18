// LoadingScreen.js
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import logo from '../assets/calculator.png';

const LoadingScreen = () => {
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text>Calculator App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    image: {

        width: 100,
        height: 100,
        marginBottom: 10,
    },
});

export default LoadingScreen;
