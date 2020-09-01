import React, {useEffect, useState} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import Task from './Task';
import {getTasks, taskDelete, taskEdit, taskPriorityChg, taskStateChg, colDelete} from '../redux/actions';
import Alert from 'react-bootstrap/Alert'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const deleteBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>);

function Board(props) {

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        props.getTasks()
    }, []);

    const onColDelete = (colStatus, id) => {
        props.colDelete(id)
        }

    // const onColDelete = (colStatus, id) => {
    //     console.log(colStatus)
    //     for (let i = 0; i <= props.taskList.length - 1; i++) {
    //         jumpIf: if (props.taskList[i].status === colStatus) {
    //             setShowAlert(true)
    //             break jumpIf;
    //         } else props.colDelete(id)
    //     }
        // props.taskList.map(el => {
        //     if (el.status === colStatus) {
        //         return setShowAlert(true)
        //     } else props.colDelete(id)
        //     // (el.status === colStatus) ? setShowAlert(true) : props.colDelete(id);
        // })
    //}

    return (
        <span className="col-sm">
            <div className="card-header">
                {props.columnStatus}
                <span className="float-right">
                {(props.columnStatus !== "To Do"
                    && props.columnStatus !== "In Progress"
                    && props.columnStatus !== "Review"
                    && props.columnStatus !== "Done")
                && <span onClick={() => onColDelete(props.columnStatus, props.colId)}>{deleteBtn}</span>}
                </span>
            </div>

            <p/>

            {props.taskList.filter(el => el.status === props.columnStatus)
                .sort(function (a, b) {
                    return a.priority - b.priority
                })
                .map(el => <li key={el._id}>
                    <Task taskName={el.name}
                          taskDescription={el.description}
                          taskPriority={el.priority}
                          taskStatus={el.status}
                          taskId={el._id}
                          boardList={props.boardState}
                          boardState={props.boardState}
                          taskDelete={props.taskDelete}
                          taskStateChg={props.taskStateChg}
                          taskPriorityChg={props.taskPriorityChg}
                          taskEdit={props.taskEdit}
                    />
                </li>)}

            {showAlert &&
            <Modal.Dialog>
                <Modal.Body>
                    <p>
                        Please make sure there are no tasks associated with column you wish to delete.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>}
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
    taskStateChg: (id, status) => dispatch(taskStateChg(id, status)),
    colDelete: (id) => dispatch(colDelete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board);
