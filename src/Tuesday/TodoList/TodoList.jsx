import React from 'react';
import './TodoList.css';
import TodoListHeader from "./todoComponents/TodoListHeader";
import TodoListTasks from "./todoComponents/TodoListTasks";
import TodoListFooter from "./todoComponents/TodoListFooter";
import {saveState, restoreState} from "./functions";

// import PropTypes from "prop-types";
const UPADATE_PRIORITY_VALUE = 'UPADATE_PRIORITY_VALUE';
const UPADATE_TITLE_TEXT = 'UPADATE_TITLE_TEXT';
const CHANGE_STATUS_IS_DONE = 'CHANGE_STATUS_IS_DONE';


class TodoList extends React.Component {
    nextTaskId = 0;

    componentDidMount() {
        let x = restoreState()
        this.setState(x, () => {
            // debugger;
            this.nextTaskId = this.state.tasks.length
            //////---------------------либо же
            // this.state.tasks.forEach(task => {
            //             if (task.id >= this.nextTaskId) {
            //                 this.nextTaskId = task.id + 1
            //             }
            //         })
            /////-----------------------------
        })


    }

    state = {
        tasks: [
            // {id: 1, title: "JS", isDone: true, priority: 'low'},
            // {id: 2, title: "HTML", isDone: true, priority: 'high', created: "21.04.2020", updated: "21.04.2020",finished: "21.04.2020",},
        ], filterValue: "All"
    }

    addTask = (newText, time) => {
        let newTask = {
            id: this.nextTaskId, title: newText, isDone: false, priority: 'low',
            created: time, updated: "none", finished: "none"
        };

        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask] ///...this.state.tasks-- раскукоживаем старый массив
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

        ///----------------------------------------------------/код -равнозначный  строкам 78-82
        // newTasks.splice(taskId, 1)
        // newTasks =newTasks.map((t, index)=>{
        //
        //     return {...t, id:index}
        // })
        ///----------------------------------------------------
        ///уменьшили переменную для следующего id
        --this.nextTaskId;
        // debugger;
        this.setState({tasks: newTasks}, () => saveState(this.state)) ///setState- метод реагирующий на изменение св-ва state
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
                this.changeTask(action.id, {title: action.newText, updated: action.updateTime})
                break;

            case UPADATE_PRIORITY_VALUE: {
                this.changeTask(action.id, {priority: action.newValue, updated: action.updateTime})
            }
                break;

            case CHANGE_STATUS_IS_DONE:
                this.changeTask(action.id, {
                    isDone: action.isDone,
                    updated: action.updateTime,
                    finished: action.finishTime
                })
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


export const upDateTitleActionCreator = (id, text, updateTime) => ({
    type: UPADATE_TITLE_TEXT,
    newText: text,
    id: id,
    updateTime: updateTime
})
export const upDatePriorityActionCreator = (id, value, updateTime) => ({
    type: UPADATE_PRIORITY_VALUE,
    newValue: value,
    id: id,
    updateTime: updateTime
})
export const changeStatusIsDoneActionCreator = (id, currIsDone, updateTime, finishTime) => ({
    type: CHANGE_STATUS_IS_DONE,
    id: id,
    isDone: currIsDone,
    finishTime: finishTime,
    updateTime: updateTime
})


// App.propTypes = {
//     // _________: PropTypes.string
// };
