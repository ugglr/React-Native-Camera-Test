import React from 'react';
import 'react-native-gesture-handler';
import {createAppContainer, withNavigationFocus} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Screens Imports
import HomeScreen from './src/screens/Home';
import CameraScreen from './src/screens/Camera';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    path: 'Home',
  },
  Camera: {
    screen: withNavigationFocus(CameraScreen),
    path: 'Camera',
  },
});

export default createAppContainer(TabNavigator);
