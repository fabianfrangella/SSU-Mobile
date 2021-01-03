import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Stepper from '../components/Stepper';
import ModalSelector from '../components/ModalSelector';

const LandingPage = () => {
  const universidades = [{text: "Universidad Nacional de Quilmes" }, {text: "Uba"}]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
            Bienvenido a SSU
        </Text>
        <Text style={styles.subtitle}>
            Sistema de seguimiento universitario
        </Text>
        <Stepper/>
        <ModalSelector items={universidades} title= "Selecciona tu universidad"/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
});

export default LandingPage;