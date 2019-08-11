import AllTasksScreen from './AllTasksScreen';

export default class ActiveScreen extends AllTasksScreen {
    constructor(props) {
        super(props);

        this.state.filters = ['Active'];
    }
}

ActiveScreen.navigationOptions = {
    title: 'Việc cần làm'
};
