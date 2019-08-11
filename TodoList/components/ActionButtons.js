import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { CheckBox, Overlay, Button, Icon, Text, SearchBar, Input, Divider } from 'react-native-elements';

import { ListColors } from '../utils/data';

class NewTodoOverlay extends Component {
    state = {
        isVisible: false,
        title: '',
        detail: '',
        color: 'white',
    }

    _toggleOverlay = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    _onPressAddNewTodo = () => {
        let data = {
            key: new Date().getTime().toString(),
            status: 'Active',
            title: this.state.title,
            detail: this.state.detail,
            color: this.state.color,
            date: new Date().toLocaleDateString(),
        }
        this.props.onPressAddNewTodo(data);
        this._toggleOverlay();
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', backgroundColor: '#0000', alignSelf: 'stretch' }}>
                <Button
                    raised
                    onLongPress={() => { alert('Tạo mới') }}
                    onPress={() => this._toggleOverlay()}
                    buttonStyle={{
                        width: 50,
                        height: 50,
                        alignSelf: 'flex-end',
                        borderRadius: 25,
                    }}
                    icon={
                        <Icon
                            name='plus'
                            type='entypo'
                            color='white'
                        />
                    }
                />
                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="#0005"
                    height="auto"
                >
                    <View>
                        <Text h4>Tạo mới</Text>
                        <Divider />

                        <Input
                            onChangeText={(text) => { this.setState({ title: text }) }}
                            placeholder='Tiêu đề...'
                            leftIcon={{ type: 'antdesign', name: 'slack' }}
                            inputStyle={{
                                padding: 10
                            }}
                        />
                        <Input
                            onChangeText={(text) => { this.setState({ detail: text }) }}
                            placeholder='Chi tiết..'
                            leftIcon={{ type: 'antdesign', name: 'infocirlceo' }}
                            inputStyle={{
                                padding: 10
                            }}
                        />

                        <Text h4>Màu</Text>
                        <Picker
                            selectedValue={this.state.color}
                            style={{ height: 50, width: '100%' }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ color: itemValue })
                            }>
                            {
                                ListColors.map((color, index) => {
                                    return <Picker.Item key={index} label={color} value={color} />
                                })
                            }
                        </Picker>

                        <Button
                            raised
                            onPress={() => this._onPressAddNewTodo()}
                            title='Thêm'
                        />
                    </View>
                </Overlay>
            </View>
        );
    }
}

class EditTodoOverlay extends Component {
    state = {
        isVisible: false,
        title: this.props.todo.title,
        detail: this.props.todo.detail,
        color: this.props.todo.color,
    }

    _toggleOverlay = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    _onPressEditTodo = () => {
        let data = {
            title: this.state.title,
            detail: this.state.detail,
            color: this.state.color,
        }
        this.props.onPressEditTodo(data);
        this._toggleOverlay();
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', backgroundColor: '#fff', width: '100%', height: '100%' }}>
                <Button
                    raised
                    type="clear"
                    onLongPress={() => { alert('Chỉnh sửa') }}
                    onPress={() => this._toggleOverlay()}
                    buttonStyle={{
                        alignSelf: 'stretch',
                    }}
                    icon={
                        <Icon
                            name='edit'
                            type='antdesign'
                            size={25}
                            color='gray'
                        />
                    }
                />
                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="#0005"
                    height="auto"
                >
                    <View>
                        <Text h4>Chỉnh sửa</Text>
                        <Divider />

                        <Input
                            value={this.state.title}
                            onChangeText={(text) => { this.setState({ title: text }) }}
                            placeholder='Tiêu đề...'
                            leftIcon={{ type: 'antdesign', name: 'slack' }}
                            inputStyle={{
                                padding: 10
                            }}
                        />
                        <Input
                            value={this.state.detail}
                            onChangeText={(text) => { this.setState({ detail: text }) }}
                            placeholder='Chi tiết..'
                            leftIcon={{ type: 'antdesign', name: 'infocirlceo' }}
                            inputStyle={{
                                padding: 10
                            }}
                        />

                        <Text h4>Màu</Text>
                        <Picker
                            selectedValue={this.state.color}
                            style={{ height: 50, width: '100%', backgroundColor: this.state.color }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ color: itemValue })
                            }>
                            {
                                ListColors.map((color, index) => {
                                    return <Picker.Item key={index} label={color} value={color} />
                                })
                            }
                        </Picker>

                        <Button
                            raised
                            onPress={() => this._onPressEditTodo()}
                            title='Đồng ý'
                        />
                    </View>
                </Overlay>
            </View>
        );
    }
}

class FilterOverlay extends Component {

    state = {
        isVisible: false,
        search: ''
    }

    _toggleOverlay = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }

    _onChangeSearchText = (searchStr) => {
        this.setState({ search: searchStr }, () => {
            this.props.onSearch(searchStr);
        })
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', backgroundColor: '#0000', margin: 5 }}>
                <Button
                    raised
                    onLongPress={() => { alert('Bộ lọc') }}
                    onPress={() => this._toggleOverlay()}
                    buttonStyle={{
                        width: 50,
                        height: 50,
                        alignSelf: 'flex-end',
                        borderRadius: 25,
                    }}
                    icon={
                        <Icon
                            name='filter'
                            type='feather'
                            color='white'
                        />
                    }
                />
                <Overlay
                    isVisible={this.state.isVisible}
                    windowBackgroundColor="#0005"
                    height="auto"
                >
                    <View>
                        <Text h4>Bộ Lọc</Text>
                        <SearchBar
                            value={this.state.search}
                            placeholder='Tìm theo nội dung...'
                            lightTheme={true}
                            onChangeText={this._onChangeSearchText}
                        />
                        {
                            this.props.fullList.map((filterName, index) => {
                                let isChecked = this.props.filters.includes(filterName);
                                return <CheckBox
                                    key={filterName}
                                    title={filterName}
                                    checked={isChecked}
                                    onPress={() => this.props.onChangeFilters(filterName, isChecked)}
                                />
                            })

                        }
                        <Button
                            raised
                            onPress={() => this._toggleOverlay()}
                            title='Xong'
                        />
                    </View>
                </Overlay>
            </View>
        );
    }
}

export {
    NewTodoOverlay,
    FilterOverlay,
    EditTodoOverlay
}