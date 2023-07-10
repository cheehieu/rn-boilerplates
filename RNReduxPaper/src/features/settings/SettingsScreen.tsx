import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

export function SettingsScreen() {
  const theme = useTheme();
  const containerStyle = {
    ...styles.container,
    backgroundColor: theme.colors.surface,
  };
  return (
    <View style={containerStyle}>
      <Text variant="displayLarge" style={{color: theme.colors.primary}}>
        Settings Screen
      </Text>
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
