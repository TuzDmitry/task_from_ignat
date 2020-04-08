import React from 'react';

import style from '../Component3.module.css'
import NameItem from "./NameItem/NameItem";

class InnerListOfNames extends React.Component {

    render = () => {

        let nameElements = this.props.listOfNames.map(el => <NameItem name={el.name}/>)


        return (
            <div className={style.listNames}>
                {nameElements}
            </div>
        );
    }
}

export default InnerListOfNames;
