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
  ScrollView,
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
    console.log(prop);
    const updatedGoalsList = goalsList.map((goal) =>
      goal.title === prop.title ? prop : goal
    );
    setGoalsList(updatedGoalsList);
  };

  const removeGoal = (props) => {
    console.log(props);
    const filteredList = goalsList.filter((goal) => goal.title !== props);
    setGoalsList(filteredList);
  };

  const Item = ({ title, name, item }) => (
    // <View style={styles.item}>
    //   <Text style={styles.listItem}>{title}</Text>
    //   <Button title="X" onPress={() => removeGoal(title)} color="red" />
    // </View>
    <DetailsPopUp
    item={item}
      name={name}
      title={title}
      removeGoal={removeGoal}
      detailGoal={detailGoal}
    />
  );

  const renderItem = ({ item }) => {
      const title = item.title
    return (
      <Item
      item={item}
        name={item.title}
        title={item.dueDate ? `${item.title} | ${item.dueDate}` : item.title}
        onPress={() => {
          setTimesPressed((current) => current + 10);
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.views}>
        <TextInput
          placeholder="Enter Goals"
          value={value}
          style={styles.input}
          onChangeText={(text) => onChangeText({ title: text })}
        />
        <Button
          title="ADD"
          style={styles.button}
          onPress={() => addGoal()}
          color="blue"
        />
      </View>

      <View style={styles.listBox}>
        <Text style={styles.listTitle}>Your Goals</Text>

        <ScrollView>
          <FlatList
            data={goalsList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text>GoalSetter@</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  views: {
      flex: 1,
      backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center'
  },

  input: {
    borderBottomColor: "black",
    borderWidth: 2,
    padding: 10,
    width: "80%",
  },
  button: {
    width: "20%",
  },
  listBox: {
    flex: 10,
    backgroundColor: "blue",
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center'

  },

  listTitle: {
    fontWeight: "bold",
    color: "grey",
    fontFamily: "Cochin",
    fontSize: 30,
    alignSelf: "center",

    textDecorationLine: "underline",
  },

  item: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 7,
    borderColor: "black",
    borderWidth: 1,
  },

  listItem: {
    fontWeight: "bold",
    color: "green",
    alignContent: "center",
    padding: 3,
  },
});
