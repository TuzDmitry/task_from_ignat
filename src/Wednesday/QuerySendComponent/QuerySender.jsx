import React from "react";
import * as axios from "axios";
import {API} from "../../dal/api";

const QuerySender=(props)=>{

    const onCheckBoxClick=(e)=>{
        props.changeSuccess(e.currentTarget.checked)

    }

    const f=()=>{
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',
            {success: props.success}
        )
    }
    //
    // const f=()=>{
    //     return API.f(props.success)
    // }


    const onSendButtonClick=()=>{
        props.tryCatch(f)
    }


    return(
        <div>
            <input type="checkbox" onChange={onCheckBoxClick} checked={props.success}/>
            <button onClick={onSendButtonClick}>SEND</button>
        </div>
    )
}
export default QuerySender