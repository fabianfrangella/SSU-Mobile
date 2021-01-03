import React from 'react';
import StepIndicator from 'react-native-step-indicator';
const colorUnq = "linear-gradient(45deg, rgba(119,0,0,1) 0%, rgb(185,28,0) 100%)"
const Stepper = () => {
    const labels = ["Selecciona tu universidad","Selecciona tu carrera","Comenza a trackear tu progreso!"];
    const customStyles = {
      stepIndicatorSize: 25,
      currentStepIndicatorSize:30,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: colorUnq,
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: colorUnq,
      stepStrokeUnFinishedColor: colorUnq,
      separatorFinishedColor: colorUnq,
      separatorUnFinishedColor: colorUnq,
      stepIndicatorFinishedColor: colorUnq,
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 10,
      currentStepIndicatorLabelFontSize: 10,
      stepIndicatorLabelCurrentColor: colorUnq,
      stepIndicatorLabelFinishedColor: colorUnq,
      stepIndicatorLabelUnFinishedColor: colorUnq,
      labelColor: colorUnq,
      labelSize: 13,
      currentStepLabelColor: colorUnq,
      marginBottom: 20
    }
    return (
      <StepIndicator
        customStyles={customStyles}
        labels={labels}
        stepCount= {3}/>
    );
  }

  export default Stepper;