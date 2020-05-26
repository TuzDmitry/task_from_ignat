import React from "react";
import QuerySender from "./QuerySender";
import {connect} from "react-redux";
import * as axios from "axios";
import {changeSuccess} from "../../redux/wednesdayReducer";

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

    tryCatch = async (f) => {

        try {
            const response = await f();
            console.log('answer: ', response.data.yourBody.success);
            return response.data.yourBody;
        } catch (e) {
            console.log('error: ', {...e});
            console.log('error: ', {...e.response.data.yourBody});

            return {success: false};
        }
    }


    render() {
        return (
            <QuerySender success={this.props.success}
                         changeSuccess={this.props.changeSuccess}
                         tryCatch={this.tryCatch}
                         funct={this.getQuery}/>

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
