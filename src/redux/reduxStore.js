import {combineReducers, createStore} from "redux";
// import mondayReducer from "./mondayReducer";
// import tuesdayReducer from "./tuesdayReducer";
import loadingReducer from "./loadingReducer";
import SettingsReducer from "./SettingsReducer";
import wednesdayReducer from "./wednesdayReducer";


// let initialState = {
//     mondayPage: {
//         arraySkills:
//             [
//                 {skill: "рационалист"},
//                 {skill: "комуннист"},
//                 {skill: "анимешник"}
//             ],
//         listOfNames: [
//             // {name: "Alla"},
//             // {name: "Sasha"}
//         ]
//     },
//     loadingPage: {
//         loading: true
//     },
//     tuesdayPage: {
//         tasks: [
//             // {id: 2, title: "HTML", isDone: true, priority: 'high', created: "21.04.2020", updated: "21.04.2020",finished: "21.04.2020",},
//         ],
//         filterValue: "All"
//     }
// }

let reducers = combineReducers(
    {
        loadingPage: loadingReducer,
        settings: SettingsReducer,
        // mondayPage: mondayReducer,
        // tuesdayPage: tuesdayReducer
        wednesdayPage: wednesdayReducer
    }
)

let store = createStore(reducers)

export default store;
