/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as StoreProvider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/app/store';

AppRegistry.registerComponent(appName, () => () => (
  <React.StrictMode>
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  </React.StrictMode>
));
