import { AnyAction } from "redux";
import { BookArrayState, BookState } from "../../data/models/BookCategory";
import { searchFilter } from "../actions/countAction";
import { ReduxSearchAction, ReduxSearchActionTypes, TSearchAction } from "./type";

const initialState : BookArrayState = {
    bookData : []
}

export default function searchReducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case ReduxSearchActionTypes.SEARCH_ACTIONS:
            return{...state, bookData: action.data}
        default:
            return state;
    }

   
    }
