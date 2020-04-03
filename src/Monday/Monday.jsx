import React from 'react';
import MyComponent from "../MyComponent/MyComponent";
import Qualities from "../Qualities/Qualities";
import Component3 from "../ComponentSpINBut/Component3";


class Monday extends React.Component {


    render = () => {
        return (
            <div>
                <MyComponent/>
                <Qualities arraySkills={this.props.arraySkills} numberSkill={this.props.numberSkill}/>
                <Component3 state={this.props.state}
                            getNameForAlert={this.props.getNameForAlert}/>
            </div>
        );
    }
}

export default Monday;
