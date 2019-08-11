import AllTasksScreen from './AllTasksScreen';

export default class CompleteScreen extends AllTasksScreen {
	constructor(props) {
		super(props);

		this.state.filters = ['Done'];
	}
}

CompleteScreen.navigationOptions = {
	title: 'Completed'
};
