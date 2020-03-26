import React from 'react';

import style from '../Component3.module.css'

class InnerInput extends React.Component {


    render = () => {
        return (
            <div className="">
                <input className={style.inp} ref={this.props.inputNameRef} type="text" />
            </div>
        );
    }
}

export default InnerInput;
