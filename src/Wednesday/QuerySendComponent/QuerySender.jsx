import React from "react";
import * as axios from "axios";
import {API, tryCatch} from "../../dal/api";
import Progress from "../../Progress/Progress";

const QuerySender = (props) => {

    const onCheckBoxClick = (e) => {
        props.changeSuccess(e.currentTarget.checked)

    }

    // const f=()=>{
    //     return axios.post('https://neko-cafe-back.herokuapp.com/auth/test',
    //         {success: props.success}
    //     )
    // }

    const f = () => {
        return API.getSuccess(props.success)
    }


    const onSendButtonClick = () => {
        props.changeInProgress(true)

        tryCatch(f).then((result) => {
            props.changeInProgress(false)
            if (result.success) {
                props.changeNotification('Запрос прошел успешно')
                // alert('Запрос прошел успешно')
            } else {
                props.changeNotification('Запрос прошел неуспешно')
                // alert('Запрос прошел неуспешно')
            }
            // alert(result.success)

            setTimeout(() => {
                props.changeNotification('')
            }, 4000)
        })
    }


    const divstyle = {
        backgroundColor: 'orange',
        borderRadius: 20,
        border: 2,
        height: 100
    }

    return (
        <div style={divstyle}>
            <input type="checkbox" onChange={onCheckBoxClick} checked={props.success}/>
            <button disabled={props.inProgress} onClick={onSendButtonClick}>SEND</button>
            <div style={{color: 'green', fontWeight: 'bold'}}>
                {props.notification}
            </div>
            {props.inProgress ? <Progress/> : null}
        </div>
    )
}
export default QuerySender