import React, { Component } from "react";
import { View } from 'react-native';

import { Text, Divider, Button } from 'react-native-elements';

export default class SingleTodoScreen extends Component {

    render() {
        const { color, status, title, detail } = this.props.navigation.state.params.todo;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FDFFFC' }}>
                <Text h2>{title}</Text>
                <Text>{`(${status})`}</Text>

                <Divider style={{ backgroundColor: 'blue', height: 10 }} />

                <Text style={{ fontSize: 17 }}>{detail}</Text>

                <Button
                    raised
                    onPress={() => this.props.navigation.goBack()}
                    title='Trở về'
                    containerStyle={{
                        position: 'absolute',
                        right: 10,
                        bottom: 10
                    }}
                />
            </View>
        )
    }
}

SingleTodoScreen.navigationOptions = {
    title: 'Chi tiết',
}