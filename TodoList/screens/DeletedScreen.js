import AllTasksScreen from './AllTasksScreen';

export default class DeletedScreen extends AllTasksScreen {
    constructor(props) {
        super(props);

        this.state.filters = ['Deleted'];
    }
}

DeletedScreen.navigationOptions = {
    title: 'Thùng rác'
};
