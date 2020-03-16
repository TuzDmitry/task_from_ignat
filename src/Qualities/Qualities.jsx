import React from 'react';
import quaS from './Qualities.module.css'
import Quality from "./Quality/Quality";
import qua from "./Quality/Quality.module.css";

class Qualities extends React.Component {
    render = () => {

        // let arraySkills=[{skill:"рационалист"},{skill:"комуннист"},{skill:"анимешник"}];
        let builder =this.props.arraySkills.map((el,i)=>{
                if(i===this.props.numberSkill){
                    return(
                        <Quality skill={el.skill} activeSkill={`${qua.block} ${qua.active_block}`}/>
                    )
                }
                else {return(
                    <Quality skill={el.skill} activeSkill={qua.block}/>
                )}
            }
        );


        return (
            <div className={quaS.block}>
                {builder}
                {/*<Quality skill={this.props.arraySkills[0].skill}/>*/}
                {/*<Quality skill={this.props.arraySkills[1].skill}/>*/}
                {/*<Quality skill={this.props.arraySkills[2].skill}/>*/}
            </div>
        );
    }
}

export default Qualities;
