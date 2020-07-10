import React, {ChangeEvent} from "react";

import Progress from "../../Progress/Progress";
import {ButtonNya} from "../../Thursday/ButtonComponent";

type OwnPropsType = {
    changeSuccess: (isSuccess: boolean) => void
    queryFrom11Less: () => void

    success:boolean
    inProgress: boolean
    notification: string
}


const QuerySender = (props:OwnPropsType) => {

    const onCheckBoxClick = (e:ChangeEvent<HTMLInputElement>) => {
        props.changeSuccess(e.currentTarget.checked)
    }


    const onSendButtonClick = () => {
        props.queryFrom11Less()
    }


    const divstyle = {
        padding:10,
        backgroundColor: 'orange',
        borderRadius: 20,
        border: 2,
        height: 100
    }

    return (
        <div style={divstyle}>
            <input type="checkbox" onChange={onCheckBoxClick} checked={props.success}/>
            <button disabled={props.inProgress} onClick={onSendButtonClick}>SEND</button>
            <ButtonNya disabled={props.inProgress} onClick={onSendButtonClick}/>
            <div style={{color: 'green', fontWeight: 'bold'}}>
                {props.notification}
            </div>
            {props.inProgress ? <Progress/> : null}
        </div>
    )}
export default QuerySender