import { StyleSheet } from 'react-native';
import {constants} from '../styles/constants';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    scrollView: {
      backgroundColor: 'white',
      marginHorizontal: 20,
    },
    title: {
      fontSize: 42,
    },
    subtitle: {
      fontSize: 24,
      color: 'grey',
      marginBottom: 20
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    openButton: {
      backgroundColor: constants.colors.unq,
      borderRadius: 20,
      padding: 10,
      elevation: 2
    }
  });