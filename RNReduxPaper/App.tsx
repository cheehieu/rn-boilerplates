/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DarkTheme as navDarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';
import {MainStack} from './src/features/navigation/MainStack';

const {LightTheme} = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});
const {DarkTheme} = adaptNavigationTheme({reactNavigationDark: navDarkTheme});

function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const paperTheme = colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme;
  const navTheme = colorScheme === 'dark' ? DarkTheme : LightTheme;
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer theme={navTheme}>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
