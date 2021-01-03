/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {
} from 'react-native/Libraries/NewAppScreen';
import LandingPage from './src/views/LandingPage';

import { Provider } from "react-redux";
import { store } from "./src/redux/store"

const App: () => React$Node = () => {
  return (
    <>
    <Provider store={store} >
        <LandingPage/>
    </Provider>
    </>
  );
};

export default App;
