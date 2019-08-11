import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Todo, setData, deleteTodo } from '../utils/data';
import TodoItem from '../components/TodoItem';

export default class AllTasksScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: Todo,
      filters: ['Done', 'Active']
    }

    this.props.navigation.addListener('didFocus', () => {
      this._refreshDataFromSource();
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
          data={this.state.todos}
          extraData={this.state}
          renderItem={
            ({ item, index }) => {
              if (this.state.filters.includes(item.status)) {
                return <TodoItem
                  key={item.key}
                  todo={item}
                  onPressChangeDataBtn={this._handlePressChangeDataBtn}
                  onPressDeleteBtn={this._handlePressDeleteBtn}
                />
              }
            }
          }
        >
        </FlatList>
      </View>
    );
  }
}

AllTasksScreen.navigationOptions = {
  title: 'All Tasks'
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#efefef',
  }
});