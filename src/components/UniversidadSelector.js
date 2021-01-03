import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";
import { useDispatch } from "react-redux";
import { select_universidad } from "../redux/actions/universidad_actions";
import { styles } from "../styles/universidadSelectorStyles"
const UniversidadSelector = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const universidades = [
    {text: "Universidad Nacional de Quilmes", carreras: ["Tecnicatura en Programación", "Biotecnología"] }, 
    {text: "Universidad de Buenos Aires", carreras: ["Contabilidad", "Derecho"] }, 
    {text: "Universidad Nacional de La Plata", carreras: ["Licenciatura en Quimica", "Psicología"] }
  ];
  
  const handleSelect = (item) => {
    dispatch(select_universidad(item))
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
              universidades.map(item => {
                    return (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                handleSelect(item)
                                dispatch(select_universidad(item))
                            }}
                        >
                        <Text>{item.text}</Text>
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

export default UniversidadSelector;