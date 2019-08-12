const ListStatus = ['Done', 'Active', 'Deleted'];
const ListColors = ['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white'];

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
    date: "8/05/2019"
}, {
    key: '3',
    status: 'Done',
    color: 'blue',
    title: 'Search',
    detail: "Google 'How to build todo app",
    date: "8/02/2019"
}, {
    key: '4',
    status: 'Done',
    color: 'green',
    title: 'After search',
    detail: 'Read results from Google',
    date: "7/07/2019"
}, {
    key: '5',
    status: 'Done',
    color: 'indigo',
    title: 'Search more',
    detail: "Google 'How to build todo app using React Native",
    date: "6/21/2019"
}, {
    key: '6',
    status: 'Active',
    color: 'white',
    title: 'Read and think',
    detail: 'Read results from Google again',
    date: "6/15/2019"
}, {
    key: '7',
    status: 'Active',
    color: 'white',
    title: 'Thinking about life',
    detail: 'Spend some more time thinking',
    date: "6/11/2019"
}, {
    key: '8',
    status: 'Active',
    color: 'red',
    title: "Let's Do It",
    detail: 'Use knowledge gained at CoderSchool to build new todo app',
    date: "6/11/2019"
},
];

const createTodo = (data) => {
    Todo = [data, ...Todo];
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

const filterSearchTodo = (filters = [], search = '') => {
    return Todo.filter(todo => {
        const { status, title, detail } = todo;
        return filters.includes(status) && (title.includes(search) || detail.includes(search))
    })
}

export {
    Todo,
    createTodo,
    setData,
    deleteTodo,
    ListStatus,
    ListColors,
    filterSearchTodo
}