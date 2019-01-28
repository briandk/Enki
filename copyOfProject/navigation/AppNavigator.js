import React from 'react';
import { createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default createAppContainer(createDrawerNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: HomeScreen,
  Gallery: {
    screen: HomeScreen
  } ,
  About: {
    screen: LinksScreen
  },
  Contact: LinksScreen,

}));