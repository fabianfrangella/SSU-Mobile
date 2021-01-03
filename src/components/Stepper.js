import React from 'react';
import StepIndicator from 'react-native-step-indicator';

const Stepper = () => {
    const labels = ["Selecciona tu universidad","Selecciona tu carrera","Comenza a trackear tu progreso!"];
    const customStyles = {
      stepIndicatorSize: 25,
      currentStepIndicatorSize:30,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: '#fe7013',
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: '#fe7013',
      stepStrokeUnFinishedColor: '#fe7013',
      separatorFinishedColor: '#fe7013',
      separatorUnFinishedColor: '#fe7013',
      stepIndicatorFinishedColor: '#fe7013',
      stepIndicatorUnFinishedColor: '#ffffff',
      stepIndicatorCurrentColor: '#ffffff',
      stepIndicatorLabelFontSize: 10,
      currentStepIndicatorLabelFontSize: 10,
      stepIndicatorLabelCurrentColor: '#fe7013',
      stepIndicatorLabelFinishedColor: '#fe7013',
      stepIndicatorLabelUnFinishedColor: '#fe7013',
      labelColor: '#999999',
      labelSize: 13,
      currentStepLabelColor: '#fe7013',
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