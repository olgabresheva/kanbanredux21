import React, {useState} from 'react';
import '../App.css';
import {connect} from 'react-redux';

function TaskCreateForm(props) {

    const [newTask, setNewTask] = useState('');
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
        props.onTaskCreate(newTask, priority);
        setFormOpen(false);
        setNewTask('');
        setAddBtnDisabled(true)
    }

    const onTaskCreateCancel = () => {
        setNewTask('');
        setPriority('Select Priority');
        setAddBtnDisabled(true);
        setFormOpen(false);
    }


  return (
    <div className="TaskCreateForm">

      <button type="submit" className="btn btn-info" onClick={() => setFormOpen(true)}>Create New Task</button>
      <p/>

      {formOpen &&
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder={'Enter Your Task'} value={newTask}
                 onChange={e => setNewTask(e.target.value)}/>
        </div>
        <select className="custom-select" onChange={taskPriorityInput} required>
          <option value="0">Select Priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p/>
        <button disabled={addBtnDisabled} type="submit" className="btn btn-info" onClick={taskCreate}>Add Task
        </button>
        <button type="button" className="btn btn-secondary"
                onClick={onTaskCreateCancel}>Cancel
        </button>
      </form>
      }

    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    onTaskCreate : (newTask, priority) => dispatch ({type: 'TASK_CREATE', payload: {newTask, priority}})
})

export default connect(null, mapDispatchToProps)(TaskCreateForm);
