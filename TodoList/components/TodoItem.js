import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

class MyButtonIcon extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...this.props.style
                }}
            >
                <Ionicons
                    {...this.props.iconStyle}
                ></Ionicons>
            </TouchableOpacity >
        )
    }
}

export default class TodoItem extends Component {
    _handlePressDoneBtn = () => {
        const todo = this.props.todo;
        this.props.onPressChangeDataBtn(todo.key, {
            status: (todo.status == 'Done' ? 'Active' : 'Done')
        })
    }

    _handlePressDeleteBtn = () => {
        Alert.alert(
            'Delete Confirm !',
            `Are you sure want to delete todo "${this.props.todo.title}"`,
            [{
                text: 'Yes',
                onPress: () => {
                    const todo = this.props.todo;
                    this.props.onPressDeleteBtn(todo.key);
                }
            }, {
                text: 'Cancel',
                onPress: () => { }
            }]
        )
    }

    render() {

        const bgColor = (this.props.todo.status == 'Done' ? '#efefef' : '#fff');

        const swipeoutSetting = {
            rowId: this.props.todo.key,
            autoClose: true,
            onClose: (secId, rowId, direction) => { },
            onOpen: (secId, rowId, direction) => { },
            style: {
                backgroundColor: bgColor,
                margin: 5,
            },

            right: [{
                text: 'Done',
                // type: 'secondary',
                component: <MyButtonIcon
                    onPress={this._handlePressDoneBtn}
                    style={{
                        backgroundColor: (this.props.todo.status == 'Done' ? '#70C1B3' : '#FDFFFC')
                    }}
                    iconStyle={{
                        color: (this.props.todo.status == 'Done' ? '#fff' : '#888'),
                        size: 30,
                        name: 'md-checkmark-circle-outline'
                    }}
                />,
            }, {
                text: 'Delete',
                // type: 'delete',
                component: <MyButtonIcon
                    onPress={this._handlePressDeleteBtn}
                    style={{
                        backgroundColor: '#FF1654'
                    }}
                    iconStyle={{
                        color: 'white',
                        size: 30,
                        name: 'ios-close-circle-outline'
                    }}
                />,
            }],
            left: [{
                onPress: () => { },
                text: 'Rewrite',
                component: <MyButtonIcon
                    onPress={() => { alert('rewrite') }}
                    style={{
                        backgroundColor: '#FDFFFC'
                    }}
                    iconStyle={{
                        name: 'md-create',
                        color: '#011627',
                        size: 25
                    }}
                />,
            }],
        }

        const containerStyle = [
            styles.container,
            {
                borderLeftColor: this.props.todo.color || "#fff",
                backgroundColor: bgColor,
                opacity: (this.props.todo.status == 'Done' ? 0.5 : 1)
            }
        ]

        return (
            <Swipeout {...swipeoutSetting}>
                <View style={containerStyle}>
                    <Text style={styles.title}>
                        {this.props.todo.title}
                    </Text>
                    <Text style={styles.detail}>
                        {this.props.todo.detail}
                    </Text>


                </View>
                <MyButtonIcon
                    onPress={this._handlePressDoneBtn}
                    iconStyle={{
                        name: 'md-checkmark',
                        color: 'white',
                        size: 25,
                    }}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        padding: 5,
                        fontWeight: 'bold',
                        borderBottomLeftRadius: 20,
                        backgroundColor: this.props.todo.status == 'Done' ? '#59f' : '#59f3'
                    }}
                />
            </Swipeout>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#fff",
        margin: 5,
        padding: 10,
        borderLeftWidth: 7,
        // borderTopStartRadius: 5,
        // borderBottomStartRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    detail: {
        color: "#777",
        fontSize: 12,
    },
    status: {

    },
})