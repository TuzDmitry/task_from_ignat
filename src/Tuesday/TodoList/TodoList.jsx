import React from 'react';
import './TodoList.css';
import TodoListHeader from "./todoComponents/TodoListHeader";
import TodoListTasks from "./todoComponents/TodoListTasks";
import TodoListFooter from "./todoComponents/TodoListFooter";
import {saveState, restoreState} from "./functions";

// import PropTypes from "prop-types";
const UPADATE_PRIORITY_VALUE = 'UPADATE_PRIORITY_VALUE';
const UPADATE_TITLE_TEXT='UPADATE_TITLE_TEXT';


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
            // {id: 2, title: "HTML", isDone: true, priority: 'high'},
        ], filterValue: "All"
    }

    // saveState = () => {
    //     ////устанавливаем в localStorage под ключом "our-state"  наш стейт переделанный в  джейсон строку JSON.stringify(this.state)
    //     localStorage.setItem("our-state", JSON.stringify(this.state));
    // }


    // restoreState = () => {
    //     /////объявляем наш стартовый стейт
    //     let state = {
    //         tasks: [],
    //         filterValue: "All"
    //     }
    //     //// считываем сохраненную ранее строку из localStorage
    //     let stateAsString = localStorage.getItem("our-state")
    //     ////если таковая есть, то превращаем строку в объект и призваиваем стейту знаение из стораджа.
    //     if (stateAsString) {
    //         state = JSON.parse(stateAsString);
    //     }
    //     ////устанавливаем стейт или пустой или востановленный в стейт
    //     this.setState(state, () => {
    //         ////одним махом в колбек сделаем сравнение счётчика для id
    //         // this.nextTaskId = this.state.tasks.length   код который можено заменить на 4 строчки ниже
    //         this.state.tasks.forEach(task => {
    //             if (task.id >= this.nextTaskId) {
    //                 this.nextTaskId = task.id + 1
    //             }
    //         })
    //     })
    // }

    addTask = (newText) => {
        let newTask = {id: this.nextTaskId, title: newText, isDone: false, priority: 'low'};
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

    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone})
    }

    pseudoDispatch = (action) => {
        if (action.type === UPADATE_TITLE_TEXT) {
            this.changeTask(action.id, {title: action.newText})
        } else if (action.type === UPADATE_PRIORITY_VALUE) {
            {
                this.changeTask(action.id, {priority: action.newValue})
            }
        }
    }


    render = () => {

        return (
            <div className="Todo">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        pseudoDispatch={this.pseudoDispatch}
                        changeStatus={this.changeStatus}
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


export const upDateTitleActionCreator = (text, id) => ({type: UPADATE_TITLE_TEXT, newText: text, id: id})
export const upDatePriorityActionCreator = (value, id) => ({type: UPADATE_PRIORITY_VALUE, newValue: value, id: id})


// App.propTypes = {
//     // _________: PropTypes.string
// };
