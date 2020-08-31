import React, {useEffect} from 'react';
import '../App.css';
import TaskCreateForm from "./TaskCreateForm";
import Board from "./Board";
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import {getColumns} from "../redux/actions";


function App(props) {

    useEffect(() => {
        props.getColumns()
    },[])

    return (
        <div className="App">
            <div className="container">

                <h2>Kanban Board</h2>
                <TaskCreateForm/>
                <hr/>

                <div className="row">
                    {props.columnStatus.map(el => <Board
                        key={el._id}
                        colId={el._id}
                        columnStatus={el.title}
                    />)}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    columnStatus: state.boardStatus,
})

const mapDispatchToProps = (dispatch) => ({
    getColumns: () => dispatch(getColumns()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
