import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { select_carrera } from "../redux/actions/carrera_actions";
import { styles } from "../styles/carreraSelectorStyles"
const CarreraSelector = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const carreras = useSelector(state => state.universidad.carreras)

  const handleSelect = (item) => {
    dispatch(select_carrera(item))
    setModalVisible(false)
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              {   
              carreras.map(item => {
                    return (
                        <TouchableOpacity
                            key= {item}
                            style={styles.button}
                            onPress={() => {handleSelect(item)}}
                        >
                        <Text>{item}</Text>
                      </TouchableOpacity>);
                  })
              }
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
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
        <Text style={styles.textStyle}>{props.title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default CarreraSelector;