import axios from 'axios';

export function getTasks() {
    return (dispatch) => {
        axios({
            url: 'https://kanban-app-trial.herokuapp.com/card',
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
            url: 'https://kanban-app-trial.herokuapp.com/card',
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
            url: `https://kanban-app-trial.herokuapp.com/card/${id}`,
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
            url: `https://kanban-app-trial.herokuapp.com/card/${id}`,
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
            url: `https://kanban-app-trial.herokuapp.com/card/${id}`,
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

export function taskStateChg(id, status) {
    return (dispatch) => {
        axios({
            url: `https://kanban-app-trial.herokuapp.com/card/${id}`,
            method: 'PATCH',
            data: {status: status}
        })
            .then(res => {
                dispatch(getTasks())
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function getColumns() {
    return (dispatch) => {
        axios({
            url: "https://kanban-app-trial.herokuapp.com/column",
            method: 'GET'
        })
            .then(response => {
                dispatch({
                    type: "GET_COLUMNS",
                    payload: response.data
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function onColumnCreate(colTitle, colStatus) {
    return (dispatch) => {
        axios({
            url: "https://kanban-app-trial.herokuapp.com/column",
            method: 'POST',
            data: {title: colTitle, status: colStatus}
        })
            .then(res => {
                dispatch(getColumns())
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function colDelete(id) {
    return (dispatch) => {
        axios({
            url: `https://kanban-app-trial.herokuapp.com/column/${id}`,
            method: 'DELETE'
        })
            .then(res => {
                dispatch(getColumns())
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}