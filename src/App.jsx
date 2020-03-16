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

    messageForAlert = React.createRef();
    state = {number: 5};

    onClickActions = () => {
        let asd = this.messageForAlert.current.value;
        let newNumber = (this.state.number + 1)
        this.setState({number: newNumber})
        alert(asd);
    }


    render = () => {
        return (
            <div className="App">
                <MyComponent/>
                <Qualities arraySkills={this.arraySkills} numberSkill={this.ChooseActiveSkill}/>
                <Component3 number={this.state.number} transFunc={this.onClickActions} name={this.messageForAlert}/>
            </div>
        );
    }
}

export default App;
