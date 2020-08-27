import React, {useEffect} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import Task from './Task';
import {getTasks, taskDelete, taskEdit, taskPriorityChg} from '../redux/actions';

function Board(props) {

    useEffect(() => {
        props.getTasks()
    },[]);


    return (
        <span className="col-sm">
            <div className="card-header">
                {props.boardStatus}
            </div>
            <p/>

            {props.taskList.filter(el => el.status === props.boardStatus).map(el => <li key={el._id}>
                <Task item={el.name}
                      priority={el.priority}
                      state={el.status}
                      id={el._id}
                      taskDelete={props.taskDelete}
                      taskStateChg={props.taskStateChg}
                      taskPriorityChg={props.taskPriorityChg}
                      taskEdit={props.taskEdit}/>
            </li>)}
        </span>

    );
}

const mapStateToProps = state => ({
    taskList: state.tasks,
})

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks()),
    taskDelete: (id) => dispatch(taskDelete(id)),
    taskEdit: (id, newName) => dispatch(taskEdit(id, newName)),
    taskPriorityChg: (id, priority) => dispatch(taskPriorityChg(id, priority)),

    taskStateChg: (id, direction) => dispatch({type: 'TASK_STATE_CHG', payload: {id, direction}}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);
