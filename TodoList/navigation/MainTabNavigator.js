import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// import SettingsScreen from '../screens/SettingsScreen';
import TabBarIcon from '../components/TabBarIcon';

import SingleTodoScreen from '../screens/SingleTodoScreen';
import AllTasksScreen from '../screens/AllTasksScreen';
import CompleteScreen from '../screens/CompleteScreen';
import ActiveScreen from '../screens/ActiveScreen';
import DeletedScreen from '../screens/DeletedScreen';

const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {},
});


// ============== All Tasks Stack ================

const AllTasksStack = createStackNavigator(
	{
		AllTasks: AllTasksScreen,
		SingleTodo: SingleTodoScreen
	},
	config
);

AllTasksStack.navigationOptions = {
	tabBarLabel: 'Tất cả',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={'ios-list'} />
	),
};

AllTasksStack.path = '';


// ================ Active Stack ==============

const ActiveStack = createStackNavigator(
	{
		Active: ActiveScreen,
	},
	config
);

ActiveStack.navigationOptions = {
	tabBarLabel: 'Cần làm',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={'md-flash'} />
	),
};

ActiveStack.path = '';


// ==================== Complete Stack =================

const CompleteStack = createStackNavigator(
	{
		Complete: CompleteScreen,
	},
	config
);

CompleteStack.navigationOptions = {
	tabBarLabel: 'Hoàn thành',
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

// ================ Deleted Stack ==============

const DeletedStack = createStackNavigator(
	{
		Deleted: DeletedScreen,
	},
	config
);

DeletedStack.navigationOptions = {
	tabBarLabel: 'Rác',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'} />
	),
};

DeletedStack.path = '';


// ================ Tab Navigator ===============

const tabNavigator = createBottomTabNavigator({
	AllTasksStack,
	ActiveStack,
	CompleteStack,
	DeletedStack
});

tabNavigator.path = '';

export default tabNavigator;
