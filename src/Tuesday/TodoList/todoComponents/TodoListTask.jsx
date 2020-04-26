import React from "react"
import PropTypes from 'prop-types';
import {changeStatusIsDoneActionCreator, upDatePriorityActionCreator, upDateTitleActionCreator} from "../TodoList";
import style from "./TodoListTask.module.css"
import {getOurTime} from "../functions";

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        let currIsDone = e.currentTarget.checked;
        let id = this.props.task.id;
        let action;
        let updateTime = this.props.task.updated
        if (currIsDone) {
            action = changeStatusIsDoneActionCreator(id, currIsDone, updateTime, getOurTime())
            this.props.pseudoDispatch(action)
        } else {
            action = changeStatusIsDoneActionCreator(id, currIsDone, getOurTime(), "none")
            this.props.pseudoDispatch(action)
        }
    }

    onTitleChanged = (e) => {
        let text = e.currentTarget.value;
        let id = this.props.task.id;
        let action = upDateTitleActionCreator(id, text, getOurTime());
        this.props.pseudoDispatch(action)
    }
    onPriorityChanged = (e) => {
        let value = e.currentTarget.value;
        let id = this.props.task.id;
        let action = upDatePriorityActionCreator(id, value, getOurTime())
        this.props.pseudoDispatch(action)
    }

    onCloseClick = () => {
        this.props.deleteTask(this.props.task.id)
    }

    state = {
        editContentMode: false,
        editPriorityMode: false,
        displayCloudInfo: false
    }
    activateEditMode = () => {
        this.setState({
            editContentMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editContentMode: false
        })
    }

    render = () => {
        let classForIsDone = this.props.task.isDone ? `${style.done}` : `${style.todoListTask}`;
        let classForCloud = this.state.displayCloudInfo ? `${style.showCloudInfo}` : `${style.hide}`;
        return (
            <div className='taskContainer'>
                <div className={classForIsDone}
                     onMouseOut={() => this.setState({displayCloudInfo: false})}
                     onMouseOver={() => this.setState({displayCloudInfo: true})}
                >

                    <div className={classForCloud}>
                        <div><b>created:</b> {this.props.task.created}</div>
                        <div><b>updated:</b> {this.props.task.updated}</div>
                        <div><b>finished:</b> {this.props.task.finished}</div>
                    </div>
                    <input type="checkbox" onChange={this.onIsDoneChanged} checked={this.props.task.isDone}/>

                    <span>{this.props.task.id}</span>
                    {
                        this.state.editContentMode
                            ? <input onBlur={this.deActivateEditMode}
                                     onChange={this.onTitleChanged}
                                     value={this.props.task.title}
                                     autoFocus={true}/>
                            : <span onClick={this.activateEditMode}>-{this.props.task.title},</span>
                    }

                    <span>priority:
                        {
                            this.state.editPriorityMode
                                ? <select size="1"
                                          onBlur={() => this.setState({editPriorityMode: false})}
                                          onChange={this.onPriorityChanged}>
                                    <option>low</option>
                                    <option>medium</option>
                                    <option>hight</option>
                                </select>

                                : <span onClick={() => this.setState({editPriorityMode: true})}>
                                {this.props.task.priority}
                            </span>
                        }
                    </span>

                </div>
                <button onClick={this.onCloseClick}>x</button>
            </div>
        );
    }
}

export default TodoListTask;

TodoListTask.propTypes = {
    isDone: PropTypes.bool,
    title: PropTypes.string,
    priority: PropTypes.string
};