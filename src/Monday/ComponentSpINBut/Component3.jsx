import React from 'react';

import style from './Component3.module.css'
import InnerSpan from "./Components3Parts/InnerSpan";
import InnerButton from "./Components3Parts/InnerButton";
import InnerInput from "./Components3Parts/InnerInput";
import InnerListOfNames from "./Components3Parts/InnerListOfNames";

class Component3 extends React.Component {

    state = {
        error: true,
        title: ""
    }

    onChangeInput = (e) => {
        let n = e.currentTarget.value;
        this.setState({
            title: n,
            error: true
        })
        console.log(this.state)
    }


    getName = () => {
        // let currentName = this.inputNameRef.current.value;
        let currentName = this.state.title;
        this.setState({title: ''})

        if (!this.state.title) {
            this.setState({error: false})
        } else {
            this.props.getNameForAlert(currentName)
            this.setState({error: true})
        }
    }

    // onPressEnter=()=>

    render = () => {
        return (
            <div className={style.componet3}>
                <div>
                    <InnerSpan nameCounter={this.props.state.listOfNames.length}/>

                    <InnerInput state={this.state}
                                getName={this.getName}
                                onChangeInput={this.onChangeInput}
                        // inputNameRef={this.inputNameRef}
                    />

                    <InnerButton getName={this.getName}/>
                </div>

                <InnerListOfNames listOfNames={this.props.state.listOfNames}/>
            </div>
        );
    }
}

export default Component3;
