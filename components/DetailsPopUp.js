import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  TextInput
} from "react-native";

const DetailsPopUp = ({ title, removeGoal, detailGoal }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = useState("");

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={styles.views}>
        <TextInput
          placeholder="Enter Goal Details"
          value={value}
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
        />
      </View>



            <TouchableHighlight
              style={{ ...styles.openButton}}
            >
            <Button title="save" onPress={() =>  Alert.alert("Saved", value, [{text: "OK", onPress: () => (setModalVisible(!modalVisible), onChangeText("")) }] ) }   />
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
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

//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },

  modalView: {
    margin: 20,
    marginTop: 70,
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
