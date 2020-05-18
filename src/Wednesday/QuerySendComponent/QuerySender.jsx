import React from "react";

const QuerySender=(props)=>{

    const onCheckBoxClick=(e)=>{
        let a=e.currentTarget.checked?1:0
        // props.changeSuccess(a)
        props.changeSuccess(e.currentTarget.checked)

        // alert(e.currentTarget.checked)
    }
    const onSendButtonClick=()=>{
        props.funct()
    }


debugger

    return(
        <div>
            {/*<input type="checkbox" onChange={onCheckBoxClick} checked={props.success===1}/>*/}
            <input type="checkbox" onChange={onCheckBoxClick} checked={props.success}/>
            <button onClick={onSendButtonClick}>SEND</button>
        </div>
    )
}
export default QuerySender