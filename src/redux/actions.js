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
                dispatch(getTasks())
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
                dispatch(getTasks())
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function taskEdit(id, newName, newDescription) {
    return (dispatch) => {
        axios({
            url: `http://localhost:5000/card/${id}`,
            method: 'PATCH',
            data: {name: newName, description: newDescription}
        })
            .then(res => {
                dispatch(getTasks())
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function taskPriorityChg(id, priority) {
    return (dispatch) => {
        axios({
            url: `http://localhost:5000/card/${id}`,
            method: 'PATCH',
            data: {priority: priority}
        })
            .then(res => {
                dispatch(getTasks())
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function taskStateChg(id, state) {
    return (dispatch) => {
        axios({
            url: `http://localhost:5000/card/${id}`,
            method: 'PATCH',
            data: {status: state}
        })
            .then(res => {
                dispatch(getTasks())
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}
