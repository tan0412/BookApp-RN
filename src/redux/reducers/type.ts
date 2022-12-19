import { BookArrayState, BookState } from "../../data/models/BookCategory";

export enum ReduxSearchActionTypes {
    SEARCH_ACTIONS = 'SEARCH_ACTIONS',
    SEARCH_ACTIONS_PENDING = 'SEARCH_ACTIONS_PENDING'
}
export enum ReduxGetIdActionTypes {
    GET_ID_ACTIONS = 'GET_ID_ACTIONS',

}

export enum ReduxCartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_CART = 'REMOVE_CART',
}

export interface ReduxSearchAction {
    type: ReduxSearchActionTypes;
    data: BookArrayState;
}

export interface ReduxGetIdAction {
    type: ReduxGetIdActionTypes;
    payload: number;
}

export interface ReduxCartAction {
    type: ReduxCartActionTypes;
    payload: any;
}

export type TSearchAction = ReduxSearchActionTypes