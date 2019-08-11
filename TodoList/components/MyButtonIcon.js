import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MyButtonIcon extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                onLongPress={() => { Alert.alert('Nút chức năng', this.props.title) }}
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