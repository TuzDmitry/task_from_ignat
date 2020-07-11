import React from "react";
import PropTypes from "prop-types";
import {ButtonNya} from "../../../Thursday/ButtonComponent";

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    state = {
        error: true,
        title: ""
    }
    onAddTaskClick = () => {
        let newText = this.state.title;
        this.setState({title: ""})

        if (newText === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newText);
        }


    }

    onTitleChanged = (e) => {
        debugger
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    };

    onKeyPress = (e) => {
        if (e.key === "Enter") {
            this.onAddTaskClick()
        }
    };


    render = () => {
        let classNameInput = this.state.error ? "error" : "";
        return (
            <div className="">
                <div className="todoList-header">
                    <h3 className="todoList-header__title">What to Learn</h3>
                    <div className="todoList-newTaskForm">
                        <input
                            type="text"
                            className={classNameInput}
                            onChange={this.onTitleChanged}
                            value={this.state.title}
                            onKeyPress={this.onKeyPress}
                            placeholder="New task name"/>
                        <button onClick={this.onAddTaskClick}>Add</button>
                        <ButtonNya onClick={this.onAddTaskClick}>Add</ButtonNya>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

TodoListHeader.propTypes = {
    // ________: PropTypes.____
};