import React from "react";
import PropTypes from "prop-types";
import {ButtonNya} from "../../../Thursday/ButtonComponent";

class TodoListFooter extends React.Component {
    state={
        isHidden: false
    }

    onAllFilterClick = () => {this.props.changeFilter("All")}
    onCompletedFilterClick = () => {this.props.changeFilter("Completed")}
    onActiveFilterClick = () => {this.props.changeFilter("Active")}
    onShowFiltersClick = () => {this.setState({isHidden: false})}
    onHideFiltersClick = () => {this.setState({isHidden: true})}

    render = () => {

        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="">
                <div className="todoList-footer">
                    {!this.state.isHidden && <div className="btnHideShow" onClick={this.onHideFiltersClick}>hide</div>}
                    {this.state.isHidden && <div className="btnHideShow" onClick={this.onShowFiltersClick}>show</div>}


                    {!this.state.isHidden && <ButtonNya className="btnHideShow" onClick={this.onHideFiltersClick}>hide</ButtonNya>}
                    {this.state.isHidden && <ButtonNya className="btnHideShow" onClick={this.onShowFiltersClick}>show</ButtonNya>}


                    {!this.state.isHidden && <div>
                        <button onClick={this.onAllFilterClick} className={classForAll}>All</button>
                        <button onClick={this.onCompletedFilterClick} className={classForCompleted}>Completed</button>
                        <button onClick={this.onActiveFilterClick} className={classForActive}>Active</button>
                    </div>}
                </div>
            </div>
        );
    }
}

export default TodoListFooter;

TodoListFooter.propTypes = {
    filterValue: PropTypes.string
};