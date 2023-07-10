import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Header} from 'react-native/Libraries/NewAppScreen';

export function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();
  const containerStyle = {
    ...styles.container,
    backgroundColor: theme.colors.surface,
  };

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
