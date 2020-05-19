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
            backgroundColor: this.props.themeStyle.choisedTheme
        };

        return (
            // <div className={`${style.backColor}`} style={divStyle}>
            <div className={`${this.props.themeStyle.selectedStyle.backColor}`} style={divStyle}>
              <ThemeSelector state={this.props.themeStyle} setTheme={this.props.setTheme}/>
              <QuerySenderContainer />
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        themeStyle:state.settings.theme_style
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
