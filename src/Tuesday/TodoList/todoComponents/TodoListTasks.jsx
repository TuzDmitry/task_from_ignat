import React from "react";
import TodoListTask from "./TodoListTask";
import PropTypes from "prop-types";


class TodoListTasks extends React.Component {

    render = () => {

        let taskElements = this.props.tasks.map(task => {
            return <TodoListTask
                pseudoDispatch={this.props.pseudoDispatch}
                deleteTask={this.props.deleteTask}
                task={task}/>
        })
        return (
            <div className="todoList-tasks">
                {taskElements}
            </div>
        );
    }
}

export default TodoListTasks;

TodoListTasks.propTypes = {
    tasks: PropTypes.array.isRequired
};