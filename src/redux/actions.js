import axios from 'axios';

export function getTasks() {
    return (dispatch) => {
        axios({
            url: 'http://localhost:5000/card',
            method: 'GET'
        })
            .then(res => {
                dispatch({
                    type: 'GET_TASKS', payload: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function onTaskCreate(name, description, priority) {
    return (dispatch) => {
        axios({
            url: 'http://localhost:5000/card',
            method: 'POST',
            data: {name, description, priority}
        })
            .then(res => {
                dispatch({
                    type: 'TASK_CREATE', payload: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function taskDelete(id) {
    return (dispatch) => {
        axios({
            url: `http://localhost:5000/card/${id}`,
            method: 'DELETE'
        })
            .then(res => {
                dispatch({
                    type: 'TASK_DELETE',
                    payload: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}