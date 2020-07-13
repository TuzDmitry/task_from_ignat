import React from 'react';
import './TodoList.css';
import TodoListHeader from "./todoComponents/TodoListHeader";
import TodoListTasks from "./todoComponents/TodoListTasks";
import TodoListFooter from "./todoComponents/TodoListFooter";
import {saveState, restoreState, getOurTime} from "./functions";

// import PropTypes from "prop-types";
const UPADATE_PRIORITY_VALUE = 'UPADATE_PRIORITY_VALUE';
const UPADATE_TITLE_TEXT = 'UPADATE_TITLE_TEXT';
const CHANGE_STATUS_IS_DONE = 'CHANGE_STATUS_IS_DONE';


class TodoList extends React.Component {
    nextTaskId = 0;

    componentDidMount() {
        this.setState(restoreState(), () => {
            this.nextTaskId = this.state.tasks.length
        })


    }

    state = {
        tasks: [
            // {id: 2, title: "HTML", isDone: true, priority: 'high', created: "21.04.2020", updated: "21.04.2020",finished: "21.04.2020",},
        ], filterValue: "All"
    }

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId, title: newText, isDone: false, priority: 'low',
            created: getOurTime(), updated: "none", finished: "none"
        };

        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask]
        this.setState({tasks: newTasks}, () => saveState(this.state)) ///setState- метод реагирующий на изменение св-ва state
    }
    deleteTask = (taskId) => {
        ///скопировали массив тасок в новую переменную
        let newTasks = [...this.state.tasks]
        ///убираем таску которую хотим удалить
        newTasks = newTasks.filter((t) => t.id !== taskId)
        ////переписали массив тасок с актуальными id
        newTasks = newTasks.map((t, index) => {
            return {...t, id: index}
        })

        ///уменьшили переменную для следующего id
        --this.nextTaskId;
        this.setState({tasks: newTasks}, () => saveState(this.state))
    }

    changeFilter = (newfilterValue) => {
        this.setState({filterValue: newfilterValue}, () => saveState(this.state));
    }

    changeTask = (taskId, newPropsObj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t
            } else {
                return {...t, ...newPropsObj}
            }
        });

        this.setState({tasks: newTasks}, () => {
            saveState(this.state)
        });
    }

    pseudoDispatch = (action) => {
        switch (action.type) {
            case UPADATE_TITLE_TEXT:
                this.changeTask(action.id, {title: action.newText, updated: getOurTime()})
                break;

            case UPADATE_PRIORITY_VALUE: {
                this.changeTask(action.id, {priority: action.newValue, updated: getOurTime()})
            }
                break;

            case CHANGE_STATUS_IS_DONE:
                if (action.isDone) {
                    this.changeTask(action.id, {
                        isDone: action.isDone,
                        finished: getOurTime()
                    })
                } else {
                    this.changeTask(action.id, {
                        isDone: action.isDone,
                        updated: getOurTime(),
                        finished: 'none'
                    })
                }
                break;
            default:
                break;
        }
    }


    render = () => {

        return (
            <div className="Todo">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        pseudoDispatch={this.pseudoDispatch}
                        deleteTask={this.deleteTask}
                        tasks={this.state.tasks.filter(t => {
                                switch (this.state.filterValue) {
                                    case "All":
                                        return true;
                                    case "Completed":
                                        return t.isDone;
                                    case "Active":
                                        return (!t.isDone);
                                    default:
                                        return true;
                                }
                            }
                        )}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default TodoList;


export const upDateTitleActionCreator = (id, text) => ({
    type: UPADATE_TITLE_TEXT,
    newText: text,
    id: id
})
export const upDatePriorityActionCreator = (id, value) => ({
    type: UPADATE_PRIORITY_VALUE,
    newValue: value,
    id: id
})
export const changeStatusIsDoneActionCreator = (id, currIsDone) => ({
    type: CHANGE_STATUS_IS_DONE,
    id: id,
    isDone: currIsDone
})

// App.propTypes = {
//     // _________: PropTypes.string
// };
