import React from 'react';

import style from '../Component3.module.css'

class InnerInput extends React.Component {
    onEnterPress=(e)=>{
        if(e.key === "Enter"){this.props.getName()}
    }


    render = () => {
        let classNameInput = !this.props.state.error ? `${style.error} ${style.inp}` : `${style.inp}`;
        // let classNameInput = !this.props.state.title ? `${style.error} ${style.inp}` : `${style.inp}`;

        return (
            <div className="">
                <input className={classNameInput}
                       // ref={this.props.inputNameRef}
                       onChange={this.props.onChangeInput}
                       value={this.props.state.title}
                       onKeyPress={this.onEnterPress}
                       type="text" />
            </div>
        );
    }
}

export default InnerInput;
