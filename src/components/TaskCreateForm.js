import React, {useEffect, useState} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {getTasks, onColumnCreate, onTaskCreate} from '../redux/actions';

function TaskCreateForm(props) {

    useEffect(() => {
        getTasks()
    }, []);


    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [priority, setPriority] = useState('Select Priority');
    const [addBtnDisabled, setAddBtnDisabled] = useState(true);
    const [openTaskForm, setOpenTaskForm] = useState(false);
    const [openColumnform, setOpenColumnform] = useState(false);
    const [columnTitle, setColumnTitle] = useState('');
    const [columnStatus, setColumnStatus] = useState('')


    const taskPriorityInput = (e) => {
        setPriority(e.target.value);
        if (priority !== '0') {
            setAddBtnDisabled(false)
        } else setAddBtnDisabled(true);
    }

    const taskCreate = (e) => {
        e.preventDefault();
        props.onTaskCreate(taskName, taskDescription, priority);
        setOpenTaskForm(false);
        setTaskName('');
        setTaskDescription('');
        setAddBtnDisabled(true)
    }

    const onTaskCreateCancel = () => {
        setTaskName('');
        setTaskDescription('');
        setPriority('Select Priority');
        setAddBtnDisabled(true);
        setOpenTaskForm(false);
    }

    const createNewColumn = (e) => {
        e.preventDefault();
        props.onColumnCreate(columnTitle, columnStatus);
        setOpenColumnform(false);

    }

    const onColCreateCancel = () => {
        setColumnTitle('');
        setColumnStatus('');
        setOpenColumnform(false);
    }

    return (
        <div className="TaskCreateForm">
            <div className="row">
                <div className="col">
                    <button type="submit" className="btn btn-info create" onClick={() => setOpenTaskForm(true)}>
                        Create New Task
                    </button>
                    <p/>

                    {openTaskForm &&
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder={'Enter Take Name'}
                                           value={taskName}
                                           onChange={e => setTaskName(e.target.value)}/>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder={'Enter Task Description'}
                                           value={taskDescription}
                                           onChange={e => setTaskDescription(e.target.value)}/>
                                </div>
                            </div>
                            <p/>
                            <select className="custom-select" onChange={taskPriorityInput} required>
                                <option value="0">Select Priority</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <p/>
                            <button disabled={addBtnDisabled} type="submit" className="btn btn-outline-info"
                                    onClick={taskCreate}>Add Task
                            </button>
                            <button type="button" className="btn btn-outline-secondary"
                                    onClick={onTaskCreateCancel}>Cancel
                            </button>
                        </div>
                    </form>
                    }
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-info create" onClick={() => setOpenColumnform(true)}>
                        Add New Column
                    </button>
                    <p/>
                    {openColumnform &&
                    <form>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder={'Enter Column Title'}
                                           value={columnTitle} onChange={e => setColumnTitle(e.target.value)}/>
                                </div>
                                <p/>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder={'Enter Column Status'}
                                           value={columnStatus} onChange={e => setColumnStatus(e.target.value)}/>
                                </div>
                            </div>
                            <p/>
                            <button type="submit" className="btn btn-outline-info" onClick={createNewColumn}>Create</button>
                            <button type="submit" className="btn btn-outline-secondary" onClick={onColCreateCancel}>Cancel</button>
                        </div>
                    </form>}
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks()),
    onTaskCreate: (taskName, taskDescription, priority) => dispatch(onTaskCreate(taskName, taskDescription, priority)),
    onColumnCreate: (colTitle, colStatus) => dispatch(onColumnCreate(colTitle, colStatus))

})

export default connect(null, mapDispatchToProps)(TaskCreateForm);
