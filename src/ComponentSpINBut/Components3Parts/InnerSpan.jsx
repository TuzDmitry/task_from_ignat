import React from 'react';

import style from '../Component3.module.css'

class InnerSpan extends React.Component {



    render = () => {
        return (
            <div className="">
                <span className={style.sp}>{this.props.nameCounter}</span>
            </div>
        );
    }
}

export default InnerSpan;
