import {uuid} from "uuidv4";

const initialState = {
    tasks: [
        {_id: uuid(), name: "Task - 1", description: "Description -1", priority: 1, status: 'To Do'},
        {_id: uuid(), name: "Task - 2", description: "Description -2", priority: 2, status: 'In Progress'},
        {_id: uuid(), name: "Task - 3", description: "Description -3", priority: 3, status: 'Review'},
        {_id: uuid(), name: "Task - 4", description: "Description -4", priority: 3, status: 'Done'}
    ],
    boardStatus: ['To Do', 'In Progress', 'Review', 'Done'],
};

const task = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_TASKS' :
            return {
                ...state,
                tasks: action.payload
            }

        case 'TASK_CREATE':
            return {
                ...state,
                tasks: [...state.tasks, ...action.payload]
            };

        case 'TASK_DELETE':
            //const tasksAfterDelete = state.tasks.filter(el => el.id !== action.payload);

            return {
                ...state,
                tasks: action.payload
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