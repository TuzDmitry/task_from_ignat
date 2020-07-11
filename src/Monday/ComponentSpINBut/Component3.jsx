import React from 'react';

import style from './Component3.module.css'
import InnerSpan from "./Components3Parts/InnerSpan";
import InnerInput from "./Components3Parts/InnerInput";
import InnerListOfNames from "./Components3Parts/InnerListOfNames";
import {ButtonNya} from "../../Thursday/ButtonComponent";
import {InputNya} from "../../Thursday/InputComponent";

class Component3 extends React.Component {

    state = {
        error: null,
        title: ""
    }

    onChangeInput = (e) => {
        let n = e.currentTarget.value;
        this.setState({
            title: n,
            error: ""
        })
        console.log(this.state)
    }


    getName = () => {
        let currentName = this.state.title;
        this.setState({title: ''})

        if (!this.state.title) {
            this.setState({error: "enter something"})
        } else {
            this.props.getNameForAlert(currentName)
            this.setState({error: ""})
        }
    }


    render = () => {
        return (
            <div className={style.componet3}>
                <div>
                    <InnerSpan nameCounter={this.props.state.listOfNames.length}/>

                    <InnerInput state={this.state}
                                getName={this.getName}
                                onChangeInput={this.onChangeInput}
                    />
                    <InputNya error={this.state.error} onChange={this.onChangeInput}value={this.state.title}/>
                    <ButtonNya onClick={this.getName}>Push me</ButtonNya>
                </div>

                <InnerListOfNames listOfNames={this.props.state.listOfNames}/>
            </div>
        );
    }
}

export default Component3;
