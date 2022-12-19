import { ReduxCartActionTypes } from "../reducers/type";

export function addToCart (item: any) {
    return {
        type: ReduxCartActionTypes.ADD_TO_CART,
        payload: item
    }
}

export function removeCart (item: any, index: number) {
    console.log(index)
    return {
        type: ReduxCartActionTypes.REMOVE_CART,
        payload: item,
        index: index
    }
}