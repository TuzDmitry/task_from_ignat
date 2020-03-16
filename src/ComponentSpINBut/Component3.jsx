import React from 'react';

import style from './Component3.module.css'

class Component3 extends React.Component {


    render = () => {
        return (
            <div className={style.componet3}>
                <span className={style.sp}>{this.props.number}</span>
                <input className={style.inp} ref={this.props.name} type="text" />
                <button className={style.but} onClick={this.props.transFunc}>Push me</button>
            </div>
        );
    }
}

export default Component3;
