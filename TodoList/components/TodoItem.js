import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swipeout from 'react-native-swipeout';

import MyButtonIcon from './MyButtonIcon';
import Colors from '../constants/Colors';
import { EditTodoOverlay } from './ActionButtons';

export default class TodoItem extends Component {
    _handlePressDoneBtn = () => {
        const todo = this.props.todo;
        this.props.onPressChangeDataBtn(todo.key, {
            status: (todo.status == 'Done' ? 'Active' : 'Done')
        })
    }

    _handlePressMoveToTrashBtn = () => {
        const todo = this.props.todo;
        this.props.onPressDeleteBtn(todo.key, false);
    }

    _handlePressRestoreBtn = () => {
        const todo = this.props.todo;
        this.props.onPressChangeDataBtn(todo.key, {
            status: 'Active'
        });
    }

    _handlePressDeleteBtn = () => {
        const todo = this.props.todo;
        this.props.onPressDeleteBtn(todo.key, true);
    }

    _handlePressDeletedStatusBtn = () => {
        Alert.alert(
            'Xoá hay Khôi phục ?',
            `Bạn muốn làm gì với todo "${this.props.todo.title}"?`,
            [{
                text: 'Khôi phục',
                onPress: () => { this._handlePressRestoreBtn() }
            }, {
                text: 'Xoá vĩnh viễn',
                onPress: () => { this._handlePressDeleteBtn() }
            }, {
                text: 'Huỷ'
            }]
        )
    }

    _getSwipeOutSetting = () => {
        const moveToTrashBtn = {
            text: 'Delete',
            component: <MyButtonIcon
                title='Cho vào thùng rác'
                onPress={this._handlePressMoveToTrashBtn}
                style={{
                    backgroundColor: Colors.deletedSwipeButtonBackground
                }}
                iconStyle={{
                    color: Colors.deletedSwipeButtonColor,
                    size: 25,
                    name: 'md-trash'
                }}
            />,
        }

        const rewriteBtn = {
            onPress: () => { },
            text: 'Rewrite',
            component: <EditTodoOverlay
                todo={this.props.todo}
                onPressEditTodo={(data) => {
                    this.props.onPressChangeDataBtn(this.props.todo.key, data);
                }} />
        }

        switch (this.props.todo.status) {
            case 'Done':
                return {
                    rowId: this.props.todo.key,
                    autoClose: true,
                    style: {
                        backgroundColor: Colors.doneTodoBackground,
                        margin: 5,
                    },

                    right: [
                        {
                            text: 'Done',
                            component: <MyButtonIcon
                                title='Đánh dấu Chưa hoàn thành'
                                onPress={this._handlePressDoneBtn}
                                style={{
                                    backgroundColor: Colors.doneSwipeButtonBackground
                                }}
                                iconStyle={{
                                    color: Colors.doneSwipeButtonColor,
                                    size: 25,
                                    name: 'md-checkmark-circle-outline'
                                }}
                            />,
                        },
                        moveToTrashBtn
                    ],
                    left: [rewriteBtn],
                }
            case 'Active':
                return {
                    rowId: this.props.todo.key,
                    autoClose: true,
                    style: {
                        backgroundColor: Colors.activeTodoBackground,
                        margin: 5,
                        // shadow
                        elevation: 4,
                        shadowOffset: { width: 10, height: 7 },
                        shadowColor: "grey",
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
                    },

                    right: [
                        {
                            text: 'Done',
                            component: <MyButtonIcon
                                title={'Đánh dấu Hoàn thành'}
                                onPress={this._handlePressDoneBtn}
                                style={{
                                    backgroundColor: Colors.activeSwipeButtonBackground
                                }}
                                iconStyle={{
                                    color: Colors.activeSwipeButtonColor,
                                    size: 25,
                                    name: 'md-radio-button-off'
                                }}
                            />,
                        },
                        moveToTrashBtn
                    ],
                    left: [rewriteBtn],
                }
            case 'Deleted':
                return {
                    rowId: this.props.todo.key,
                    autoClose: true,
                    style: {
                        backgroundColor: Colors.deletedTodoBackground,
                        margin: 5,
                    },
                    right: [{
                        onPress: () => { },
                        text: 'Restore',
                        component: <MyButtonIcon
                            title={'Khôi phục'}
                            onPress={() => { this._handlePressRestoreBtn() }}
                            style={{
                                backgroundColor: Colors.restoreSwipeButtonBackground
                            }}
                            iconStyle={{
                                name: 'md-refresh',
                                color: Colors.restoreSwipeButtonColor,
                                size: 25
                            }}
                        />,
                    }, {
                        onPress: () => { },
                        text: 'Delete',
                        component: <MyButtonIcon
                            title={'Xoá vĩnh viễn'}
                            onPress={() => { this._handlePressDeleteBtn() }}
                            style={{
                                backgroundColor: Colors.deletedSwipeButtonBackground
                            }}
                            iconStyle={{
                                name: 'md-close-circle-outline',
                                color: Colors.deletedSwipeButtonColor,
                                size: 25
                            }}
                        />,
                    }]
                };
            default: return {}
        }
    }

    _getStatusButton = () => {
        switch (this.props.todo.status) {
            case 'Deleted':
                return <MyButtonIcon
                    title={'Khôi phục hoặc xoá vĩnh viễn'}
                    onPress={this._handlePressDeletedStatusBtn}
                    iconStyle={{
                        name: 'md-trash',
                        color: 'white',
                        size: 20,
                    }}
                    style={{
                        ...styles.statusBtn,
                        padding: 10,
                        backgroundColor: Colors.deletedStatusButtonColor
                    }}
                />
            case 'Active':
                return <MyButtonIcon
                    title={'Đánh dấu Hoàn thành'}
                    onPress={this._handlePressDoneBtn}
                    iconStyle={{
                        name: 'md-checkmark',
                        color: 'white',
                        size: 20,
                    }}
                    style={{
                        ...styles.statusBtn,
                        backgroundColor: Colors.activeStatusButtonColor
                    }}
                />
            case 'Done':
                return <MyButtonIcon
                    title={'Đánh dấu Chưa hoàn thành'}
                    onPress={this._handlePressDoneBtn}
                    iconStyle={{
                        name: 'md-checkmark',
                        color: 'white',
                        size: 20,
                    }}
                    style={{
                        ...styles.statusBtn,
                        backgroundColor: Colors.doneStatusButtonColor
                    }}
                />
        }
    }

    render() {

        const isDone = (this.props.todo.status == 'Done');
        const bgColor = (isDone ? Colors.doneTodoBackground : Colors.activeTodoBackground);

        const swipeoutSetting = this._getSwipeOutSetting();

        const containerStyle = {
            ...styles.container,
            backgroundColor: bgColor,
            borderLeftColor: this.props.todo.color || "#fff0",
            opacity: (isDone ? 0.7 : 1)
        }


        return (
            <Swipeout {...swipeoutSetting}>
                <View style={containerStyle}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate('SingleTodo', { todo: this.props.todo }) }}
                        style={styles.todoLeftContainer}
                    >
                        <Text style={styles.title}>
                            {this.props.todo.title}
                        </Text>
                        <Text style={styles.detail}>
                            {this.props.todo.detail}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.todoRightContainer}>
                    </View>
                </View>
                {
                    this._getStatusButton()
                }
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        borderLeftWidth: 5,
    },
    todoLeftContainer: {
        flex: 70,
    },
    todoRightContainer: {
        flex: 30,
    },
    title: {
        color: Colors.titleTodoColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    detail: {
        color: Colors.detailTodoColor,
        fontSize: 12,
    },
    statusBtn: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 5,
        fontWeight: 'bold',
        borderBottomLeftRadius: 20,
    }
})