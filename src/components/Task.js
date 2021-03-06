import React, {useState} from 'react';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ShowMoreText from 'react-show-more-text';

const deleteBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>);

const leftBtn = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fillRule="evenodd"
              d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
        <path fillRule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
    </svg>);

const rightBtn = (
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path fillRule="evenodd"
              d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
        <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
    </svg>);


const downBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>);

const upBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>);

const editBtn = (<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
    <path fillRule="evenodd"
          d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
</svg>);

function Task(props) {

    const [editMode, setEditMode] = useState(false);
    const [taskNewName, setTaskNewName] = useState(props.taskName);
    const [taskNewDescr, setTaskNewDescr] = useState(props.taskDescription);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        props.taskDelete(props.taskId);
        setShow(false);
    }

    const onTaskSave = () => {
        props.taskEdit(props.taskId, taskNewName, taskNewDescr);
        setEditMode(false);
    }

    const onPriorityChg = (id, direction) => {
        let p;
        direction === 'up' ? p = props.taskPriority - 1 : p = props.taskPriority + 1
        props.taskPriorityChg(id, p)
    }

    const onStateChg = (id, direction) => {
        let status;
        let i;
        i = props.boardState.findIndex(e => e.title === props.taskStatus);
        direction === 'right' ? status = props.boardState[i + 1].title : status = props.boardState[i - 1].title
        props.taskStateChg(id, status)
    }

    const priorityBadge = {
        1: "badge badge-danger",
        2: "badge badge-warning",
        3: "badge badge-success"
    };

    return (
        <div>
            <div className="card">
                <div className="card-header">
                <span className="priority">
                    {props.taskPriority < 3 &&
                    <span onClick={() => onPriorityChg(props.taskId, 'down')}>{downBtn}</span>}
                    {props.taskPriority > 1 &&
                    <span onClick={() => onPriorityChg(props.taskId, 'up')}>{upBtn}</span>}
                </span>
                    <span className={priorityBadge[props.taskPriority]}>Priority: {props.taskPriority}</span>

                </div>
                <div className="card-body">
                    <h6 className="card-title">{props.taskName}:</h6>
                    <ShowMoreText className="card-title small"
                                  lines={1}
                                  more='Show more'
                                  less='Show less'>
                        {props.taskDescription}</ShowMoreText>

                </div>
                <div className="card-footer bg-transparent text-muted border-0">
                <span className="float-left">
                <span onClick={() => setEditMode(true)}>{editBtn}</span>
                    <span onClick={() => setShow(true)}>{deleteBtn}</span>
                    </span>
                    {editMode &&
                    <>
                        <Modal show={editMode} onHide={handleClose}>
                            <Modal.Body>
                                <p><strong>Task Name:</strong></p>
                                <input className="mytext" type="text" value={taskNewName}
                                       onChange={e => setTaskNewName(e.target.value)}/><br/>
                                <p/>
                                <p><strong>Task Description:</strong></p>
                                <input className="mytext" type="text" value={taskNewDescr}
                                       onChange={e => setTaskNewDescr(e.target.value)}/><br/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button type="button" className="btn btn-secondary btn-sm"
                                        onClick={() => setEditMode(false)}>Cancel</Button>
                                <Button type="button" className="btn btn-primary btn-sm"
                                        onClick={onTaskSave}>Save</Button>
                            </Modal.Footer>
                        </Modal>
                    </>}
                    {show &&
                    <>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Body>Please confirm if you want to delete this task</Modal.Body>
                            <Modal.Footer>
                                <Button type="button" className="btn btn-secondary btn-sm"
                                        onClick={() => setShow(false)}>Cancel</Button>
                                <Button type="button" className="btn btn-primary btn-sm"
                                        onClick={handleClose}>Confirm</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    }
                    <span className="float-right">
                {(props.taskStatus !== 'To Do') &&
                <span onClick={() => onStateChg(props.taskId, "left")}>{leftBtn}</span>}
                        {props.taskStatus !== props.boardList[props.boardList.length -1].title &&
                        <span onClick={() => onStateChg(props.taskId, "right")}>{rightBtn}</span>}
                </span>
                </div>
            </div>
        </div>
    );
}

export default Task;
