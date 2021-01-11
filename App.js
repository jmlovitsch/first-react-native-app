import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {

    const [outputText, setOutputText] = useState("Login")




  return (
    <View style={styles.container}>
        <Text>{outputText}</Text>
      <Image source={require( "./assets/Logo.png")} />
      <Button title="Login" onPress={() => setOutputText("hi")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
