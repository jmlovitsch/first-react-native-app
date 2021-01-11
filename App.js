import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.views}>
        <TextInput placeholder="Enter Goal" style={styles.input} />
        <Button title="+" style={styles.button} />
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: "black",
    borderWidth: 2,
    padding: 10,
    width: "80%"
  },
  views: {
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: 'center',
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
  },
});
