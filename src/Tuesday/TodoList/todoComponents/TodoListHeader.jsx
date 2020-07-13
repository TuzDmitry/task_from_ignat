import React from "react";
import PropTypes from "prop-types";
import {ButtonNya} from "../../../Thursday/ButtonComponent";
import {InputNya} from "../../../Thursday/InputComponent";

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        error: "",
        title: ""
    }
    onAddTaskClick = () => {
        let newText = this.state.title;
        this.setState({title: ""})

        if (newText === "") {
            this.setState({error: "enter something"})
        } else {
            this.setState({error: ""})
            this.props.addTask(newText);
        }
    }

    onTitleChanged = (e) => {
        debugger
        this.setState({
            error: "",
            title: e.currentTarget.value
        })
    };


    render = () => {
        return (
            <div className="">
                <div className="todoList-header">
                    <h3 className="todoList-header__title">What to Learn</h3>
                    <div className="todoList-newTaskForm">

                        <InputNya error={this.state.error}
                                  onChange={this.onTitleChanged}
                                  value={this.state.title}
                                  placeholder="New task name"
                                  onEnter={this.onAddTaskClick}
                        />
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