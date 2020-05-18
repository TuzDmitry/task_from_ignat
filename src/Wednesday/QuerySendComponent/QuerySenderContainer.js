import React from "react";
import QuerySender from "./QuerySender";
import {connect} from "react-redux";
import * as axios from "axios";
import {changeSuccess} from "../../redux/wednesdayReducer";

class QuerySenderAPI extends React.Component {
    componentDidMount() {
        ///делать запрос

    }

    getQuery() {
        debugger
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test',
            {success: this.success}
        ).then(response => {
            debugger
            console.log(response.data.yourBody)
            alert(response.data.yourBody.success)
        })
            .catch(err => alert(err));
    }

    vvv = this.props.success
    tryCatch = async () => {

        debugger
        try {

            const responce = await axios.post('https://neko-cafe-back.herokuapp.com/auth/test',
                {success: this.props.success}
            );
            console.log('answer: ', responce.data.yourBody);
            return responce.data.yourBody;
        } catch (e) {
            // console.log('error: ', {...e});
            console.log('error: ', {success: false});

            return {success: false};
        }
    }


    // axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists/${this.props.id}/tasks`,
    //     {title: newText},
    //     {
    //         withCredentials: true,
    //         headers: {"API-KEY": "99d1b1eb-87ca-41b0-b4eb-5da7df0ab7de"}
    //     }
    // ).then(response => {
    //     if (response.data.resultCode === 0) {
    //         let newTask = response.data.data.item;
    //         this.props.addTask(this.props.id, newTask)
    //     }
    // })


    render() {
        return (
            <>
                <button onClick={() => {
                    this.tryCatch()
                }}>SEND2
                </button>
                <QuerySender success={this.props.success}
                             changeSuccess={this.props.changeSuccess}
                             funct={this.getQuery}/>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        success: state.wednesdayPage.success
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSuccess: (isSuccess) => {
            dispatch(changeSuccess(isSuccess))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(QuerySenderAPI)
