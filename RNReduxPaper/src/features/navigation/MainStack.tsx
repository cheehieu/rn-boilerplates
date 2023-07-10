/**
 * MainStack.tsx: Configures navigation route and renders the React component tree
 * @module
 */

import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomeScreen} from '../home/HomeScreen';
import {SettingsScreen} from '../settings/SettingsScreen';
import {CounterScreen} from '../counter/CounterScreen';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabHome() {
  return (
    <Tab.Navigator shifting={false}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarAccessibilityLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="CounterScreen"
        component={CounterScreen}
        options={{
          title: 'Counter',
          tabBarLabel: 'Counter',
          tabBarAccessibilityLabel: 'Counter',
          tabBarIcon: ({color}) => (
            <Icon name="numeric" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function MainStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabHome} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
