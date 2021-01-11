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
  const [timesPressed, setTimesPressed] = useState(0);
  const addGoal = () => {
    if (value) {
      setGoalsList(goalsList.concat(value));
      onChangeText("");
    }
  };

  const detailGoal = (prop) => {
      console.log(prop)
    const updatedGoalsList = goalsList.map(goal => (goal.title === prop.title) ? prop : goal)
    setGoalsList(updatedGoalsList)
  }

  const removeGoal = (props) => {
      console.log(props)
    const filteredList = goalsList.filter((goal) => goal.title !== props);
    setGoalsList(filteredList);
  };

  const Item = ({ title, name }) => (
    // <View style={styles.item}>
    //   <Text style={styles.listItem}>{title}</Text>
    //   <Button title="X" onPress={() => removeGoal(title)} color="red" />
    // </View>
    <DetailsPopUp name={name} title={title} removeGoal={removeGoal} detailGoal={detailGoal} />
  );

  const renderItem = ({ item }) => {
    return <Item name={item.title} title={item.dueDate ? `${item.title} | Due: ${item.dueDate}` : item.title}   onPress={() => {
        setTimesPressed((current) => current + 10);
      }}/>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.views}>
        <TextInput
          placeholder="Enter Goals"
          value={value}
          style={styles.input}
          onChangeText={(text) => onChangeText({title: text})}
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
