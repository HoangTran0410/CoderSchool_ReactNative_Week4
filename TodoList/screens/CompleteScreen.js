import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import TodoItem from '../components/TodoItem';
import AllTasksScreen from './AllTasksScreen';

export default class CompleteScreen extends AllTasksScreen {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          renderItem={
            ({ item, index }) => {
              if (item.status == 'Done') {
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

CompleteScreen.navigationOptions = {
  title: 'Completed'
};

const styles = StyleSheet.create({
  container: {
    flex: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#efefef',
  }
});