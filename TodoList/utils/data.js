const ListStatus = ['Done', 'Active', 'Deleted'];
const ListColors = ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white'];

let Todo = [{
    key: '1',
    status: 'Deleted',
    color: 'violet',
    title: 'Read',
    detail: 'Read Instructions',
    date: "8/11/2019"
}, {
    key: '2',
    status: 'Active',
    color: 'red',
    title: 'Think',
    detail: 'Think a bit',
    date: "8/11/2019"
}, {
    key: '3',
    status: 'Done',
    color: 'blue',
    title: 'Search',
    detail: "Google 'How to build todo app",
    date: "8/11/2019"
}, {
    key: '4',
    status: 'Done',
    color: 'green',
    title: 'After search',
    detail: 'Read results from Google',
    date: "8/11/2019"
}, {
    key: '5',
    status: 'Done',
    color: 'indigo',
    title: 'Search more',
    detail: "Google 'How to build todo app using React Native",
    date: "8/11/2019"
}, {
    key: '6',
    status: 'Active',
    color: 'white',
    title: 'Read and think',
    detail: 'Read results from Google again',
    date: "8/11/2019"
}, {
    key: '7',
    status: 'Active',
    color: 'white',
    title: 'Thinking about life',
    detail: 'Spend some more time thinking',
    date: "8/11/2019"
}, {
    key: '8',
    status: 'Active',
    color: 'red',
    title: "Let's Do It",
    detail: 'Use knowledge gained at CoderSchool to build new todo app',
    date: "8/11/2019"
}, {
    key: '9',
    status: 'Done',
    color: 'violet',
    title: 'Read',
    detail: 'Read Instructions',
    date: "8/11/2019"
}, {
    key: '10',
    status: 'Active',
    color: 'red',
    title: 'Think',
    detail: 'Think a bit',
    date: "8/11/2019"
}, {
    key: '11',
    status: 'Done',
    color: 'blue',
    title: 'Search',
    detail: "Google 'How to build todo app",
    date: "8/11/2019"
}, {
    key: '12',
    status: 'Done',
    color: 'green',
    title: 'After search',
    detail: 'Read results from Google',
    date: "8/11/2019"
}, {
    key: '13',
    status: 'Done',
    color: 'indigo',
    title: 'Search more',
    detail: "Google 'How to build todo app using React Native",
    date: "8/11/2019"
}, {
    key: '14',
    status: 'Active',
    color: 'white',
    title: 'Read and think',
    detail: 'Read results from Google again',
    date: "8/11/2019"
}, {
    key: '15',
    status: 'Active',
    color: 'white',
    title: 'Thinking about life',
    detail: 'Spend some more time thinking',
    date: "8/11/2019"
}, {
    key: '16',
    status: 'Active',
    color: 'red',
    title: "Let's Do It",
    detail: 'Use knowledge gained at CoderSchool to build new todo app',
    date: "8/11/2019"
}
];

const createTodo = (data) => {
    Todo.push(data);
}

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

const deleteTodo = (key, deleteForever) => {
    for (let i = 0; i < Todo.length; i++) {
        if (Todo[i].key == key) {

            if (Todo.status == 'Deleted' || deleteForever) {
                Todo.splice(i, 1);
            } else {
                Todo[i].status = 'Deleted';
            }

            break;
        }
    }
}

export {
    Todo,
    createTodo,
    setData,
    deleteTodo,
    ListStatus,
    ListColors
}