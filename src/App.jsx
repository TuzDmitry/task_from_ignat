import React from 'react';
import './App.css';

import NavBar from "./NavBar/NavBar";
import Monday from "./Monday/Monday";
import Tuesday from "./Tuesday/Tuesday";
import {Route} from "react-router-dom";


class App extends React.Component {
    componentDidMount() {
        setTimeout(()=>{this.setState({loading:false})}, 3000)
    }

    arraySkills =
        [
            {skill: "рационалист"},
            {skill: "комуннист"},
            {skill: "анимешник"}
        ];

    ChooseActiveSkill = 0;

    state = {
        loading:true,
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
                {this.state.loading&&<div>ЗДЕСЬ БУДЕТ КОМПОНЕНТА ЗАГРУЗКИ КОТОРАЯ БУДЕТ ПОКАЗЫВАТЬСЯ 3 СЕКУНДЫ</div>}
                {!this.state.loading&&<>
                   <div>
                       <NavBar/>
                   </div>
                   <div className="app-wrapper">
                       <Route path='/monday' render={() => <Monday arraySkills={this.arraySkills}
                                                                   numberSkill={this.ChooseActiveSkill}
                                                                   state={this.state}
                                                                   getNameForAlert={this.getNameForAlert}/>}/>
                       <Route path='/tuesday' render={() => <Tuesday/>}/>

                   </div>
               </>}
            </div>
        );
    }
}

export default App;
