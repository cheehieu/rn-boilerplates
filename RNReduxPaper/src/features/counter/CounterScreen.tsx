import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Counter} from './Counter';

export function CounterScreen() {
  const theme = useTheme();
  const containerStyle = {
    ...styles.container,
    backgroundColor: theme.colors.surface,
  };
  return (
    <View style={containerStyle}>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
