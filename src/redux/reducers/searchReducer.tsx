import { AnyAction } from "redux";
import { BookArrayState, BookState } from "../../data/models/BookCategory";
import { searchFilter } from "../actions/countAction";
import { ReduxSearchActionTypes, TSearchAction } from "./type";

const initialState = {
    bookData :  [],
    pending: true,
}

export default function searchReducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case ReduxSearchActionTypes.SEARCH_ACTIONS:
            return{...state, bookData: action.data, pending: true}
        case ReduxSearchActionTypes.SEARCH_ACTIONS_PENDING:
            return{...state, pending: false}
        default:
            return state;
    }

   
    }
