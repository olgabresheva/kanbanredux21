import {uuid} from "uuidv4";

const initialState = {
    tasks: [
        {id: uuid(), title: "Task - 1", priority: 1, state: 'To Do'},
        {id: uuid(), title: "Task - 2", priority: 2, state: 'In Progress'},
        {id: uuid(), title: "Task - 3", priority: 3, state: 'Review'},
        {id: uuid(), title: "Task - 4", priority: 3, state: 'Done'}
    ],
    boardStatus: ['To Do', 'In Progress', 'Review', 'Done'],
};

const task = (state = initialState, action) => {
    switch (action.type) {

        case 'TASK_CREATE':
            return {
                ...state,
                tasks: [...state.tasks, {
                    id: uuid(),
                    title: action.payload.newTask,
                    priority: action.payload.priority,
                    state: 'To Do'
                }]
            };

        case 'TASK_DELETE':
            const tasksAfterDelete = state.tasks.filter(el => el.id !== action.payload);

            return {
                ...state,
                tasks: tasksAfterDelete
            };

        case 'TASK_STATE_CHG':
            const tasksAfterStateChg = state.tasks.map(el => {
                if (el.id === action.payload.id) {
                    if (action.payload.direction === 'right') {
                        return ({...el, state: state.boardStatus[state.boardStatus.indexOf(el.state) + 1]})
                    }
                    if (action.payload.direction === 'left') {
                        return ({...el, state: state.boardStatus[state.boardStatus.indexOf(el.state) - 1]})
                    }
                } else return el;
            })
            return {
                ...state,
                tasks: tasksAfterStateChg
            };

        case 'TASK_PRIORITY_CHG':
            const tasksAfterPriorityChg = state.tasks.map(el => {
                if (el.id === action.payload.id) {
                    if (action.payload.direction === 'up') {
                        return ({...el, priority: el.priority - 1})
                    }
                    if (action.payload.direction === 'down') {
                        return ({...el, priority: el.priority + 1})
                    }
                } else return el;
            })
            return {
                ...state,
                tasks: tasksAfterPriorityChg
            };

        case 'TASK_EDIT':

            const tasksAfterEdit = state.tasks.map(el => {
                if (el.id === action.payload.id) {
                    return ({...el, title: action.payload.newTitle})
                } else return el;
            })

            return {
                ...state,
                tasks: tasksAfterEdit
            }


        default:
            return state;
    }
};

export default task;