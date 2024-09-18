import React from "react";
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './Screens/MainScreen';
import LoadingScreen from './Screens/LoadingScreen';

export default function App() {
  const [isLoaded,setIsLoaded]= useState(false)
  setTimeout(()=>{
    setIsLoaded(true)
  },2000)
  return (
    <View style={styles.container}>
    {isLoaded ? <MainScreen/> : <LoadingScreen/> } 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'

  },
});
