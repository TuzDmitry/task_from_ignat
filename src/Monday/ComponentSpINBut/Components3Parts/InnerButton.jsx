import React from 'react';

import style from '../Component3.module.css'

class InnerButton extends React.Component {


    render = () => {
        return (
            <div className="">
                <button className={style.but}
                        onClick={this.props.getName}>Push me</button>
            </div>
        );
    }
}

export default InnerButton;
