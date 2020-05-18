import React from 'react';
import ThemeSelector from "./ThemeSelector/ThemeSelector";
// import style from './Wednesday.module.css'
import {connect} from "react-redux";
import {setStyleTheme} from "../redux/SettingsReducer";
import QuerySenderContainer from "./QuerySendComponent/QuerySenderContainer";

// import style from '../Component3.module.css'

class Wednesday extends React.Component {

    render = () => {
        let divStyle = {
            backgroundColor: this.props.state.choisedTheme
        };

        return (
            // <div className={`${style.backColor}`} style={divStyle}>
            <div className={`${this.props.state.selectedStyle.backColor}`} style={divStyle}>
              <ThemeSelector state={this.props.state} setTheme={this.props.setTheme}/>
              <QuerySenderContainer />
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
state:state.settings.theme_style
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        setTheme:(color)=>{
            dispatch(setStyleTheme(color))
        }

    }
}

let WednesdayContainer=connect(mapStateToProps,mapDispatchToProps)(Wednesday)
export default WednesdayContainer;
