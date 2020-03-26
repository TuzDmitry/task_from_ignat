import React from 'react';
import './App.css';
import MyComponent from "./MyComponent/MyComponent";
import Qualities from "./Qualities/Qualities";
import Component3 from "./ComponentSpINBut/Component3";

class App extends React.Component {

    arraySkills =
        [
            {skill: "рационалист"},
            {skill: "комуннист"},
            {skill: "анимешник"}
        ];

    ChooseActiveSkill = 0;

    state = {nameCounter: 0};

    getNameForAlert = (currentName) => {
        if (currentName) {
            let newNumber = (this.state.nameCounter + 1)
            this.setState({nameCounter: newNumber})
            alert(currentName);
        }
    }


    render = () => {
        return (
            <div className="App">
                <MyComponent/>
                <Qualities arraySkills={this.arraySkills} numberSkill={this.ChooseActiveSkill}/>
                <Component3 nameCounter={this.state.nameCounter}
                            getNameForAlert={this.getNameForAlert}/>
            </div>
        );
    }
}

export default App;
