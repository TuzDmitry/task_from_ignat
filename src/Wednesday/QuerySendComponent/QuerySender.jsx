import React from "react";

const QuerySender=(props)=>{

    const onCheckBoxClick=(e)=>{
        props.changeSuccess(e.currentTarget.checked)

    }
    const onSendButtonClick=()=>{
        // props.funct()
        props.tryCatch()
    }


    return(
        <div>
            <input type="checkbox" onChange={onCheckBoxClick} checked={props.success}/>
            <button onClick={onSendButtonClick}>SEND</button>
        </div>
    )
}
export default QuerySender