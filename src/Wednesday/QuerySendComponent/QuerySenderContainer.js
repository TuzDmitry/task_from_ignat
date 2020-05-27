import React from "react";
import QuerySender from "./QuerySender";
import {connect} from "react-redux";
import * as axios from "axios";
import {changeInProgress, changeSuccess} from "../../redux/wednesdayReducer";

class QuerySenderAPI extends React.Component {
    componentDidMount() {
        ///делать запрос

    }

    // getQuery() {
    //     debugger
    //     axios.post('https://neko-cafe-back.herokuapp.com/auth/test',
    //         {success: this.success}
    //     ).then(response => {
    //         debugger
    //         console.log(response.data.yourBody)
    //         alert(response.data.yourBody.success)
    //     })
    //         .catch(err => alert(err));
    // }

    // tryCatch = async (f) => {
    //
    //     try {
    //         const response = await f();
    //         console.log('answer: ', response.data.yourBody.success);
    //         return response.data.yourBody;
    //     } catch (e) {
    //         console.log('error: ', {...e});
    //         console.log('error: ', {...e.response.data.yourBody});
    //
    //         return {success: false};
    //     }
    // }


    render() {
        return (
            <QuerySender success={this.props.success}
                         inProgress={this.props.inProgress}

                         changeSuccess={this.props.changeSuccess}
                         changeInProgress={this.props.changeInProgress}
                // tryCatch={this.tryCatch}
                         funct={this.getQuery}/>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        success: state.wednesdayPage.success,
        inProgress: state.wednesdayPage.inProgress
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSuccess: (isSuccess) => {
            dispatch(changeSuccess(isSuccess))
        },
        changeInProgress: (inProgress)=>{
            dispatch(changeInProgress(inProgress))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(QuerySenderAPI)
