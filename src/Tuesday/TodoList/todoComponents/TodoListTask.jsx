import React from "react"
import PropTypes from 'prop-types';
import {upDatePriorityActionCreator, upDateTitleActionCreator} from "../TodoList";


class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }

    onTitleChanged = (e) => {
        let text = e.currentTarget.value;
        let id = this.props.task.id;
        let action = upDateTitleActionCreator(text, id);
        this.props.pseudoDispatch(action)
    }
    onPriorityChanged = (e) => {
        let value = e.currentTarget.value;
        let id = this.props.task.id;
        let action = upDatePriorityActionCreator(value, id)
        this.props.pseudoDispatch(action)
    }

    onCloseClick = () => {
        this.props.deleteTask(this.props.task.id)
    }

    state = {
        editContentMode: false,
        editPriorityMode: false
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
        let classForIsDone = this.props.task.isDone ? "done" : "todoList-task";
        return (
            <div className='taskContainer'>
                <div className={classForIsDone}>
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
                                ? <select multiple size="1"
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