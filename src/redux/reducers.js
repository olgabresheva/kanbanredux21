
const initialState = {
    tasks: [],
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

            return {
                ...state,
                tasks: action.payload
            };

        case 'TASK_EDIT':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        default:
            return state;
    }
};

export default task;