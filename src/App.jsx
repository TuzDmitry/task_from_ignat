import React from 'react';
import './App.css';

import NavBar from "./NavBar/NavBar";
import Monday from "./Monday/Monday";
import Tuesday from "./Tuesday/Tuesday";
import {Route} from "react-router-dom";
import Loading from "./Loading/Loading";
import {connect} from "react-redux";
import {setLoadingAC} from "./redux/loadingReducer";
import Wednesday from "./Wednesday/Wednesday";


class App extends React.Component {
    //////было//////////
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({loading: false})
    //     }, 3000)
    // }
    /////стало//////////
    componentDidMount() {
        setTimeout(() => {
            this.props.setLoadingFalse()
        }, 3000)
    }

    arraySkills =
        [
            {skill: "рационалист"},
            {skill: "комуннист"},
            {skill: "анимешник"}
        ];

    ChooseActiveSkill = 0;

    state = {
        // loading: true,
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
                {/*{this.state.loading &&*/}
                {this.props.loading &&
                <>
                    <div></div>
                    <Loading/>
                </>}
                {/*{!this.state.loading &&*/}
                {!this.props.loading &&
                <>
                    <div>
                        <NavBar/>
                    </div>
                    <div className="app-wrapper">
                        <Route path='/monday' render={() => <Monday arraySkills={this.arraySkills}
                                                                    numberSkill={this.ChooseActiveSkill}
                                                                    state={this.state}
                                                                    getNameForAlert={this.getNameForAlert}/>}/>
                        <Route path='/tuesday' render={() => <Tuesday/>}/>
                        <Route path='/wednesday' render={() => <Wednesday/>}/>


                    </div>
                </>}
            </div>
        );
    }
}

////////////////////////////////////////////////////////////////
let mapStateToProps = (state) => {
    return {
        loading: state.loadingPage.loading
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setLoadingFalse: () => {
            let action = setLoadingAC()
            dispatch(action)
        }

    }
}


let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer;
