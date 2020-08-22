import React from 'react';
import '../App.css';
import {connect} from 'react-redux';
import Task from './Task';

function Board(props) {

    return (
        <span className="col-sm">
            <div className="card-header">
                {props.boardStatus}
            </div>
            <p/>

            {props.taskList.filter(el => el.state === props.boardStatus).map(el => <li key={el.id}>
                <Task item={el.title}
                      priority={el.priority}
                      state={el.state}
                      id={el.id}
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
    taskDelete: (id) => dispatch({type: 'TASK_DELETE', payload: id}),
    taskStateChg: (id, direction) => dispatch({type: 'TASK_STATE_CHG', payload: {id, direction}}),
    taskPriorityChg: (id, direction) => dispatch({type: 'TASK_PRIORITY_CHG', payload: {id, direction}}),
    taskSave: (id, newTitle) => dispatch({type: 'TASK_EDIT', payload: {id, newTitle}})

})

export default connect(mapStateToProps, mapDispatchToProps)(Board);
