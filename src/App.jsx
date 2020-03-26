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

    state = {
        listOfNames: [
            // {name: "Alla"},
            // {name: "Sasha"}
        ]
    };


    getNameForAlert = (currentName) => {
        if (currentName) {

            let newName = {name: currentName}
            let newNames = [...this.state.listOfNames, newName];

            this.setState({listOfNames: newNames});
            // alert(currentName);
        }
    }


    render = () => {
        return (
            <div className="App">
                <MyComponent/>
                <Qualities arraySkills={this.arraySkills} numberSkill={this.ChooseActiveSkill}/>
                <Component3 state={this.state}
                            getNameForAlert={this.getNameForAlert}/>
            </div>
        );
    }
}

export default App;
