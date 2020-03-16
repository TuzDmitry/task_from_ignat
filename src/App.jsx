import React from 'react';
import './App.css';
import MyComponent from "./MyComponent/MyComponent";
import Qualities from "./Qualities/Qualities";

class App extends React.Component {

    arraySkills =
        [
            {skill: "рационалист"},
            {skill: "комуннист"},
            {skill: "анимешник"}
            ];

    ChooseActiveSkill=0;

    render = () => {
        return (
            <div className="App">
                <MyComponent/>
                <Qualities arraySkills={this.arraySkills} numberSkill={this.ChooseActiveSkill}/>
            </div>
        );
    }
}

export default App;
