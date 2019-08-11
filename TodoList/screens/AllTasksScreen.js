import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Todo, setData, deleteTodo, ListStatus, createTodo } from '../utils/data';
import { FilterOverlay, NewTodoOverlay } from '../components/ActionButtons';
import TodoItem from '../components/TodoItem';

export default class AllTasksScreen extends Component {

	state = {
		todos: Todo,
		search: '',
		filters: ['Done', 'Active', 'Deleted']
	}

	constructor(props) {
		super(props)

		this.props.navigation.addListener('didFocus', () => {
			this._refreshDataFromSource();
		})
	}

	_onChangeFilters = (filterName, isChecked) => {
		let newFilters = [...this.state.filters]
		newFilters = isChecked ? newFilters.filter(f => f != filterName) : [...newFilters, filterName];

		this.setState({
			filters: newFilters
		})
	}

	_onSearch = (searchStr) => {
		this.setState({
			search: searchStr
		})
	}

	_onPressAddNewTodo = (data) => {
		createTodo(data);
		this.setState({
			todos: Todo
		})
	}

	_refreshDataFromSource() {
		this.setState({
			todos: Todo
		})
	}

	_handlePressChangeDataBtn = (key, newData) => {
		setData(key, newData);
		this._refreshDataFromSource();
	}

	_handlePressDeleteBtn = (key, deleteForever) => {
		deleteTodo(key, deleteForever);
		this._refreshDataFromSource();
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					contentContainerStyle={{ paddingBottom: 80 }}
					data={this.state.todos}
					extraData={this.state}
					renderItem={
						({ item, index }) => {
							if (this.state.filters.includes(item.status)
								&& (item.title.indexOf(this.state.search) >= 0
									|| item.detail.indexOf(this.state.search) >= 0)) {
								return <TodoItem
									key={item.key}
									todo={item}
									onPressChangeDataBtn={this._handlePressChangeDataBtn}
									onPressDeleteBtn={this._handlePressDeleteBtn}
									navigation={this.props.navigation}
								/>
							}
						}
					}
				>
				</FlatList>

				<View style={styles.actionContainer}>
					<NewTodoOverlay
						onPressAddNewTodo={this._onPressAddNewTodo}
					/>
					<FilterOverlay
						fullList={ListStatus}
						filters={this.state.filters}
						onChangeFilters={this._onChangeFilters}
						onSearch={this._onSearch}
					/>
				</View>
			</View>
		);
	}
}

AllTasksScreen.navigationOptions = {
	title: 'Tất cả',
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
		// alignItems: 'center',
		// justifyContent: 'center',
		backgroundColor: '#efefef',
	},
	actionContainer: {
		justifyContent: 'flex-end',
		flexDirection: 'row',
		backgroundColor: '#0000',
		position: 'absolute',
		bottom: 0,
		right: 0,
	}
});