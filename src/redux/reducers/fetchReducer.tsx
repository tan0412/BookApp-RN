import { AnyAction } from "redux";
import { BookArrayState } from "../../data/models/BookCategory";
import { ReduxActionPostList, ReduxActionPostListActionTypes} from "./type";

const bookData: BookArrayState = {
    bookData: []
}
const initialState : any = {
    bookData,
    loading: false
}

export default function fetchReducer ( state = initialState, action : AnyAction ) {
    switch (action.type) { 
        case ReduxActionPostListActionTypes.GET_LIST_POST : 
            return {
                ...state,
                loading: true
            }
        case ReduxActionPostListActionTypes.GET_LIST_POST_SUCCESS : 
            return {
                ...state,
                bookData: action.payload,
                loading: false
            }
        default: 
            return state
    }
}