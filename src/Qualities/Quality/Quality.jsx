import React from 'react';
import qua from './Quality.module.css'


class Quality extends React.Component {

    render = () => {


        return (
            <div className={this.props.activeSkill}>
                <div>{this.props.skill}</div>
            </div>
        );
    }
}

export default Quality;
