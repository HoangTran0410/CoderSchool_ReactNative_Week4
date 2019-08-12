import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';

import { Text, Button } from 'react-native-elements';

export default class SingleTodoScreen extends Component {

    render() {
        const { color, status, title, detail, date } = this.props.navigation.state.params.todo;

        return (
            <View style={styles.container}>
                <Text h2>{title}</Text>
                <Text>{`(${status})`}</Text>

                <View style={{ height: 10, width: 50, backgroundColor: color }} />
                <View style={styles.divider} />

                <Text style={styles.detail}>{detail}</Text>

                <Text style={styles.date}>
                    {`Ngày tạo: ${date}`}
                </Text>

                <Button
                    raised
                    onPress={() => this.props.navigation.goBack()}
                    title='Trở về'
                    containerStyle={styles.backBtn}
                />
            </View>
        )
    }
}

SingleTodoScreen.navigationOptions = {
    title: 'Chi tiết',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FDFFFC'
    },
    divider: {
        height: 1,
        width: '100%',
        marginVertical: 20,
        backgroundColor: 'gray'
    },
    detail: {
        fontSize: 17
    },
    date: {
        fontSize: 12,
        position: 'absolute',
        bottom: 10
    },
    backBtn: {
        position: 'absolute',
        right: 10,
        bottom: 10
    }
})