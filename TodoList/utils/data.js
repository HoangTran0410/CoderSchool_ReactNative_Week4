let Todo = [{
    key: '1',
    status: 'Deleted',
    color: 'violet',
    title: 'Read',
    detail: 'Read Instructions'
}, {
    key: '2',
    status: 'Active',
    color: 'red',
    title: 'Think',
    detail: 'Think a bit'
}, {
    key: '3',
    status: 'Done',
    color: 'blue',
    title: 'Search',
    detail: "Google 'How to build todo app"
}, {
    key: '4',
    status: 'Done',
    color: 'green',
    title: 'After search',
    detail: 'Read results from Google'
}, {
    key: '5',
    status: 'Done',
    color: 'indigo',
    title: 'Search more',
    detail: "Google 'How to build todo app using React Native"
}, {
    key: '6',
    status: 'Active',
    color: 'white',
    title: 'Read and think',
    detail: 'Read results from Google again'
}, {
    key: '7',
    status: 'Active',
    color: 'white',
    title: 'Thinking about life',
    detail: 'Spend some more time thinking'
}, {
    key: '8',
    status: 'Active',
    color: 'red',
    title: "Let's Do It",
    detail: 'Use knowledge gained at CoderSchool to build new todo app'
}, {
    key: '9',
    status: 'Done',
    color: 'violet',
    title: 'Read',
    detail: 'Read Instructions'
}, {
    key: '10',
    status: 'Active',
    color: 'red',
    title: 'Think',
    detail: 'Think a bit'
}, {
    key: '11',
    status: 'Done',
    color: 'blue',
    title: 'Search',
    detail: "Google 'How to build todo app"
}, {
    key: '12',
    status: 'Done',
    color: 'green',
    title: 'After search',
    detail: 'Read results from Google'
}, {
    key: '13',
    status: 'Done',
    color: 'indigo',
    title: 'Search more',
    detail: "Google 'How to build todo app using React Native"
}, {
    key: '14',
    status: 'Active',
    color: 'white',
    title: 'Read and think',
    detail: 'Read results from Google again'
}, {
    key: '15',
    status: 'Active',
    color: 'white',
    title: 'Thinking about life',
    detail: 'Spend some more time thinking'
}, {
    key: '16',
    status: 'Active',
    color: 'red',
    title: "Let's Do It",
    detail: 'Use knowledge gained at CoderSchool to build new todo app'
}
];

const setData = (key, data) => {
    for (let todo of Todo) {
        if (todo.key == key) {
            for (let d in data) {
                todo[d] = data[d];
            }
            break;
        }
    }
}

const deleteTodo = (key) => {
    for (let i = 0; i < Todo.length; i++) {
        if (Todo[i].key == key) {
            Todo.splice(i, 1);
            break;
        }
    }
}

export {
    Todo,
    setData,
    deleteTodo
}