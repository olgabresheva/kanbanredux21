import React, {useEffect} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import Task from './Task';
import {getTasks, taskDelete} from '../redux/actions';

function Board(props) {

    useEffect(() => {props.getTasks()},[]);

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
                      taskSave={props.taskSave}/>
            </li>)}
        </span>

    );
}

const mapStateToProps = state => ({
    taskList: state.tasks,
})

const mapDispatchToProps = dispatch => ({
    taskDelete: (id) => dispatch(taskDelete(id)),
    taskStateChg: (id, direction) => dispatch({type: 'TASK_STATE_CHG', payload: {id, direction}}),
    taskPriorityChg: (id, direction) => dispatch({type: 'TASK_PRIORITY_CHG', payload: {id, direction}}),
    taskSave: (id, newTitle) => dispatch({type: 'TASK_EDIT', payload: {id, newTitle}}),
    getTasks: () => dispatch(getTasks()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Board);
