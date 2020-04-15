import React from "react"
import PropTypes from 'prop-types';


class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
        // alert(e.currentTarget.checked);
    }

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value, e.currentTarget.name)
        // debugger
        // alert(e.currentTarget.name);
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
    onSelectChanged = (e) => {
        debugger
        // alert(e.currentTarget.value)
        alert(e.currentTarget)
        // alert(e)
        // this.props.changeTitle(this.props.task.id, e.currentTarget.value)
        // alert(e.currentTarget.checked);
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
                                     name={'editorTask'}
                                     autoFocus={true}/>
                            : <span onClick={this.activateEditMode}>-{this.props.task.title},</span>
                    }

                    <span>priority:
                        {
                            this.state.editPriorityMode
                                ? <select multiple size="1"
                                          onBlur={() => this.setState({editPriorityMode: false})}
                                          name={'editorPriority'}
                                          onChange={this.onTitleChanged} >
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