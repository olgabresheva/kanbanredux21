import React from 'react';
import '../App.css';
import TaskCreateForm from "./TaskCreateForm";
import Board from "./Board";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

function App(props) {

    return (
        <div className="App">
            <div className="container">

                <h2>Kanban Board</h2>
                <h6>Please don't delete existing tasks</h6>
                <TaskCreateForm/>
                <hr/>

                <div className="row">
                    {props.boardStatus.map((el, index) => <Board
                        key={index}
                        boardStatus={el}
                    />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    boardStatus: state.boardStatus,
})

export default connect(mapStateToProps, null)(App);
