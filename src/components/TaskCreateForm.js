import React, {useEffect, useState} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {getTasks, onTaskCreate} from '../redux/actions';

function TaskCreateForm(props) {

    useEffect(() => {
        getTasks()
    }, []);

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [priority, setPriority] = useState('Select Priority');
    const [addBtnDisabled, setAddBtnDisabled] = useState(true);
    const [formOpen, setFormOpen] = useState(false);


    const taskPriorityInput = (e) => {
        setPriority(e.target.value);
        if (priority !== '0') {
            setAddBtnDisabled(false)
        } else setAddBtnDisabled(true);
    }


    const taskCreate = (e) => {
        e.preventDefault();
        props.onTaskCreate(taskName, taskDescription, priority);
        setFormOpen(false);
        setTaskName('');
        setTaskDescription('');
        setAddBtnDisabled(true)
    }

    const onTaskCreateCancel = () => {
        setTaskName('');
        setTaskDescription('');
        setPriority('Select Priority');
        setAddBtnDisabled(true);
        setFormOpen(false);
    }


    return (
        <div className="TaskCreateForm">

            <button type="submit" className="btn btn-info create" onClick={() => setFormOpen(true)}>Create New Task
            </button>
            <p/>

            {formOpen &&
            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder={'Enter Take Name'} value={taskName}
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
                    <button disabled={addBtnDisabled} type="submit" className="btn btn-info"
                            onClick={taskCreate}>Add Task
                    </button>
                    <button type="button" className="btn btn-secondary"
                            onClick={onTaskCreateCancel}>Cancel
                    </button>
                </div>
            </form>
            }

        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    //onTaskCreate : (newTask, priority) => dispatch ({type: 'TASK_CREATE', payload: {newTask, priority}})
    getTasks: () => dispatch(getTasks()),
    onTaskCreate: (taskName, taskDescription, priority) => dispatch(onTaskCreate(taskName, taskDescription, priority))
})

export default connect(null, mapDispatchToProps)(TaskCreateForm);
