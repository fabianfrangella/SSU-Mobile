import React from 'react';
import {Text, SafeAreaView, ScrollView, TouchableHighlight, View } from 'react-native';
import Stepper from '../components/Stepper';
import UniversidadSelector from '../components/UniversidadSelector';
import CarreraSelector from '../components/CarreraSelector';
import {styles} from '../styles/landingStyles'
const LandingPage = (props) => {
  const handleSearch = () => {
    // TODO
  }
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
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              handleSearch();
            }}>
          <Text style={styles.textStyle}> Buscar</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LandingPage;