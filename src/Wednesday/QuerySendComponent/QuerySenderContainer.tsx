import React from "react";
import QuerySender from "./QuerySender";
import {connect} from "react-redux";
import {
    ActionTypes,
    changeSuccess,
    queryFrom11Less,
} from "../../redux/wednesdayReducer";
import {AppStateType} from "../../redux/reduxStore";
import {ThunkDispatch} from "redux-thunk";


type mapDispatchToPropsType={
    changeSuccess:(isSuccess:boolean)=>void
    queryFrom11Less:()=>void
}

type MapStateToPropsType={
    success:boolean
    inProgress: boolean
    notification: string
}


class QuerySenderAPI extends React.Component <mapDispatchToPropsType&MapStateToPropsType>{
    componentDidMount() {
    }

    render() {
        return (
            <QuerySender success={this.props.success}
                         changeSuccess={this.props.changeSuccess}

                         inProgress={this.props.inProgress}
                         notification={this.props.notification}

                         queryFrom11Less={this.props.queryFrom11Less}
            />

        )
    }
}


const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        success: state.wednesdayPage.success,
        inProgress: state.wednesdayPage.inProgress,
        notification: state.wednesdayPage.notification
    }
};

// const mapDispatchToProps = (dispatch:ThunkDispatch<AppStateType,{},ActionTypes>):mapDispatchToPropsType => {
//     return {
//         changeSuccess: (isSuccess:boolean) => {
//             dispatch(changeSuccess(isSuccess))
//         },
//         queryFrom11Less: () => {
//             let thunk = queryFrom11Less()
//             dispatch(thunk)
//         }
//     }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(QuerySenderAPI)

export default connect(mapStateToProps, {changeSuccess,queryFrom11Less})(QuerySenderAPI)

