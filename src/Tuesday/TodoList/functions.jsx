import React from 'react';

export const saveState = (state) => {
    localStorage.setItem("our-state", JSON.stringify(state));
}


export const restoreState = () => {
    let state = {
        tasks: [],
        filterValue: "All"
    }
    let stateAsString = localStorage.getItem("our-state")
    if (stateAsString) {
        state = JSON.parse(stateAsString);
    }
    return state
    // this.setState(state, () => {
    //     // this.state.tasks.forEach(task => {
    //     //     if (task.id >= this.nextTaskId) {
    //     //         this.nextTaskId = task.id + 1
    //     //     }
    //     // })
    // })
}

