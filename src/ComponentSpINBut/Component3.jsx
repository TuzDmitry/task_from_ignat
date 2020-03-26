import React from 'react';

import style from './Component3.module.css'
import InnerSpan from "./Components3Parts/InnerSpan";
import InnerButton from "./Components3Parts/InnerButton";
import InnerInput from "./Components3Parts/InnerInput";

class Component3 extends React.Component {
    inputNameRef = React.createRef();

    getName=()=>{
        let currentName = this.inputNameRef.current.value;
        this.props.getNameForAlert(currentName)
        this.inputNameRef.current.value="";
    }

    render = () => {
        return (
            <div className={style.componet3}>
                <InnerSpan nameCounter={this.props.nameCounter}/>
                {/*<span className={style.sp}>{this.props.nameCounter}</span>*/}
                <InnerInput inputNameRef={this.inputNameRef}/>
                {/*<input className={style.inp} ref={this.inputNameRef} type="text" />*/}
                <InnerButton getName={this.getName} />
                {/*<button className={style.but} onClick={this.getName}>Push me</button>*/}
            </div>
        );
    }
}

export default Component3;
