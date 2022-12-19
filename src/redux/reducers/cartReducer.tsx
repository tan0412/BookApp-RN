import { AnyAction } from "redux";
import { BookArrayState, BookState } from "../../data/models/BookCategory";
import { searchFilter } from "../actions/countAction";
import { ReduxCartActionTypes, ReduxSearchAction, ReduxSearchActionTypes, TSearchAction } from "./type";

const initialState : any  = {
    item : [],
    total: 0,
}

export default function searchReducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case ReduxCartActionTypes.ADD_TO_CART:
            return{
                ...state, 
                item: [action.payload, ...state.item],
                total: state.total + action.payload.price
            }
            case ReduxCartActionTypes.REMOVE_CART:
            return{
                ...state, 
                item: state.item.filter(({item, index}:any)=>index !== action.index),
                total: state.total - action.payload.price
            }
        default:
            return state;
    }

   
    }
