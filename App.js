import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  FlatList,
} from "react-native";
import DetailsPopUp from "./components/DetailsPopUp";




export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [value, onChangeText] = useState("");

  const addGoal = () => {
    if (value) {
      setGoalsList(goalsList.concat(value));
      onChangeText("");
    }
  };

  const detailGoal = (props) => {
    const updatedGoalsList = goalsList.map(goal => (goal === props.goal) ? {goal: props} : goal)
    setGoalsList(updatedGoalsList)
  }

  const removeGoal = (props) => {
    const filteredList = goalsList.filter((goal) => goal !== props);
    setGoalsList(filteredList);
  };

  const Item = ({ title }) => (
    // <View style={styles.item}>
    //   <Text style={styles.listItem}>{title}</Text>
    //   <Button title="X" onPress={() => removeGoal(title)} color="red" />
    // </View>
    <DetailsPopUp title={title} removeGoal={removeGoal} detailGoal={detailGoal} />
  );

  const renderItem = ({ item }) => {
    return <Item title={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.views}>
        <TextInput
          placeholder="Enter Goals"
          value={value}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
        />
        <Button title="ADD" style={styles.button} onPress={() => addGoal()}   color="blue"  />
      </View>

      <View style={styles.listBox}>
        <Text style={styles.listTitle}>Your Goals</Text>
        <FlatList
          data={goalsList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke"
  },
  views: {
  padding: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  input: {
    borderBottomColor: "black",
    borderWidth: 2,
    padding: 10,
    width: "80%",
  },
  button: {
    width: "20%"
  },

  listBox: {
    padding: 30,

  },
  listTitle: {
    fontWeight: "bold",
    color: 'grey',
    fontFamily: "Cochin",
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 10,

    textDecorationLine: "underline"
  },


  item: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 7,
    borderColor: 'black',
    borderWidth: 1,
  },

  listItem: {
    fontWeight: "bold",
    color: 'green',
    alignContent: "center",
    padding: 3
  },
});
