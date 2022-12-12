import { AnyAction } from "redux";
import { BookArrayState, BookState } from "../../data/models/BookCategory";
import { searchFilter } from "../actions/countAction";
import { ReduxGetIdAction, ReduxGetIdActionTypes, ReduxSearchActionTypes, TSearchAction } from "./type";

const initialState = {
    id: 0,
}

export default function getIdReducer(state = initialState, action:AnyAction){
    switch (action.type) {
        case ReduxGetIdActionTypes.GET_ID_ACTIONS:
            return{...state,id: action.payload}
       
        default:
            return state;
    }

   
    }
