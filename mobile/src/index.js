import React from 'react';
import App from './App';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store';
import './config/ReactotronConfig';

export default function Index() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar translucent={true} backgroundColor="transparent" />
        <App />
      </NavigationContainer>
    </Provider>
  );
}
