import React from 'react';

import style from '../../Component3.module.css'

class NameItem extends React.Component {


    render = () => {
        return (
            <div className={style.NameItem}>{this.props.name}</div>
        );
    }
}

export default NameItem;
