import React from 'react';

import style from './Component3.module.css'
import InnerSpan from "./Components3Parts/InnerSpan";
import InnerButton from "./Components3Parts/InnerButton";
import InnerInput from "./Components3Parts/InnerInput";
import InnerListOfNames from "./Components3Parts/InnerListOfNames";

class Component3 extends React.Component {
    inputNameRef = React.createRef();

    getName = () => {
        let currentName = this.inputNameRef.current.value;
        this.props.getNameForAlert(currentName)
        this.inputNameRef.current.value = "";
    }

    render = () => {
        return (
            <div className={style.componet3}>
                <div>
                    <InnerSpan nameCounter={this.props.state.listOfNames.length}/>

                    <InnerInput inputNameRef={this.inputNameRef}/>

                    <InnerButton getName={this.getName}/>
                </div>

                <InnerListOfNames listOfNames={this.props.state.listOfNames}/>
            </div>
        );
    }
}

export default Component3;
