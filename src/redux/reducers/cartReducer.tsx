import { startTransition } from "react";
import { AnyAction } from "redux";
import { BookArrayState, BookState } from "../../data/models/BookCategory";
import { searchFilter } from "../actions/countAction";
import { ReduxCartActionTypes, ReduxSearchAction, ReduxSearchActionTypes, TSearchAction } from "./type";

const initialState: any = {
    cart: []
}


export default function searchReducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case ReduxCartActionTypes.ADD_TO_CART:
            {
                const itemInCart = [...state.cart].find((item: any) => item.id === action.payload.isbn13)
                if(itemInCart) {
                    itemInCart.quantity++
                } else {
                    state.cart.push({...action.payload, quantity: 1})
                }
            }
            return {...state}
           
            // case ReduxCartActionTypes.REMOVE_CART:
            // return{
            //     ...state, 
            //     item: state.item.filter(({item, index}:any)=>index !== action.index),
            //     total: state.total - action.payload.price
            // }
        default:
            return state;
    }

   
    }
