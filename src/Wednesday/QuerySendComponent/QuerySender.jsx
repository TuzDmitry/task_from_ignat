import React from "react";

import Progress from "../../Progress/Progress";

const QuerySender = (props) => {

    const onCheckBoxClick = (e) => {
        props.changeSuccess(e.currentTarget.checked)

    }

    // const f = () => {
    //     return API.getSuccess(props.success)
    // }
    // const onSendButtonClick = () => {
    //     props.changeInProgress(true)
    //
    //     tryCatch(f).then((result) => {
    //         props.changeInProgress(false)
    //         if (result.success) {
    //             props.changeNotification('Запрос прошел успешно')
    //         } else {
    //             props.changeNotification('Запрос прошел неуспешно')
    //
    //         }
    //
    //         setTimeout(() => {
    //             props.changeNotification('')
    //         }, 4000)
    //     })
    // }

    const onSendButtonClick = () => {props.queryFrom11Less()}


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