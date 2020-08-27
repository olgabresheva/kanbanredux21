import React, {useEffect} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import Task from './Task';
import {getTasks, taskDelete, taskEdit, taskPriorityChg, taskStateChg} from '../redux/actions';

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

            {props.taskList.filter(el => el.status === props.boardStatus)
                .sort(function (a, b) {
                    return a.priority - b.priority
                })
                .map(el => <li key={el._id}>
                <Task name={el.name}
                      description={el.description}
                      priority={el.priority}
                      state={el.status}
                      id={el._id}
                      boardState={props.boardState}
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
    boardState: state.boardStatus,
})

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(getTasks()),
    taskDelete: (id) => dispatch(taskDelete(id)),
    taskEdit: (id, newName, newDescription) => dispatch(taskEdit(id, newName, newDescription)),
    taskPriorityChg: (id, priority) => dispatch(taskPriorityChg(id, priority)),
    taskStateChg: (id, state) => dispatch(taskStateChg(id, state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);
