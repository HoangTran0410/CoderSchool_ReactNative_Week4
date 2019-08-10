import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CompleteScreen from '../screens/CompleteScreen';
import AllTasksScreen from '../screens/AllTasksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


// ==================== Complete Stack =================

const CompleteStack = createStackNavigator(
  {
    Complete: CompleteScreen,
  },
  config
);

CompleteStack.navigationOptions = {
  tabBarLabel: 'Complete',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkmark-circle${focused ? '' : '-outline'}`
          : 'md-checkmark-circle-outline'
      }
    />
  ),
};

CompleteStack.path = '';



// ============== Link Stack ================

const AllTasksStack = createStackNavigator(
  {
    AllTasks: AllTasksScreen,
  },
  config
);

AllTasksStack.navigationOptions = {
  tabBarLabel: 'All Tasks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-list'} />
  ),
};

AllTasksStack.path = '';



// ================ Setting Stack ==============

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


// ================ Tab Navigator ===============

const tabNavigator = createBottomTabNavigator({
  AllTasksStack,
  CompleteStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
