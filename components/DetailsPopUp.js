import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  TextInput,
} from "react-native";

const DetailsPopUp = ({ title, removeGoal, detailGoal }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [details, onChangeDetails] = useState("")
        const [location, onChangeLocation] = useState("")

  const [dueDate, onChangeDueDate] = useState("");

  const value = {title: title,

      details: details,
      location: location,
      dueDate: dueDate}

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.views}>
                <View style={styles.header}><Text>Info for {title} </Text></View>
              <View style={styles.formLines}>
                <Text>Details:</Text>
                <TextInput
                  placeholder="Enter Goal Details"
                  value={value}
                  style={styles.input}
                  onChangeText={(text) =>
                    onChangeDetails(text)
                  }
                />
              </View>
              <View style={styles.formLines}>
                <Text>Location:</Text>

                <TextInput
                  placeholder="Location"
                  value={value}
                  style={styles.input}
                  onChangeText={(text) =>
                    onChangeLocation(text)
                  }
                />
              </View>
              <View style={styles.formLines}>
                <Text>Due Date:</Text>

                <TextInput
                  placeholder="Due Date"
                  value={value}
                  style={styles.input}
                  onChangeText={(text) =>
                    onChangeDueDate(text)
                  }
                />
              </View>
            </View>

            <TouchableHighlight>
              <View style={styles.footer}>
              <Button
                title="back"
                onPress={() => (
                    setModalVisible(!modalVisible) )}
          />

              <Button
                title="save"
                onPress={() =>
                  Alert.alert("Saved", null, [
                    {
                      text: "OK",
                      onPress: () => (
                        setModalVisible(!modalVisible),
                        detailGoal(value)                      ),
                    },
                  ])
                }
              />
              </View >
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.item}>
          <Text style={styles.listItem}>{title}</Text>
          <Button title="X" onPress={() => removeGoal(title)} color="red" />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
  },
  header: {
      alignItems: 'center',
      paddingBottom: 10
  },
  footer: {
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "space-between",

},

  formLines: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10
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

  //   centeredView: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginTop: 22,
  //   },

  modalView: {
    margin: 20,
    marginTop: "54%",
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  openButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "right",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default DetailsPopUp;
