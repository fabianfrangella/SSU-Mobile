import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Stepper from '../components/Stepper';
import UniversidadSelector from '../components/UniversidadSelector';
import CarreraSelector from '../components/CarreraSelector';

const LandingPage = (props) => {
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
        <UniversidadSelector title= "Seleccioná tu universidad"/>
        <CarreraSelector title= "Seleccioná tu carrera"/>
        
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