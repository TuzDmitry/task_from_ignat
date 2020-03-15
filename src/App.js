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
    render = () => {
        return (
            <div className="App">
                <MyComponent/>
                <Qualities arraySkills={this.arraySkills}/>
            </div>
        );
    }
}

export default App;
