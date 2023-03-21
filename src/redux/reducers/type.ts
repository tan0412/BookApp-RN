import { BookArrayState, BookState } from "../../data/models/BookCategory";

export enum ReduxSearchActionTypes {
    SEARCH_ACTIONS = 'SEARCH_ACTIONS',
    SEARCH_ACTIONS_PENDING = 'SEARCH_ACTIONS_PENDING'
}
export enum ReduxGetIdActionTypes {
    GET_ID_ACTIONS = 'GET_ID_ACTIONS',

}

export enum ReduxActionPostListActionTypes {
    GET_LIST_POST = 'GET_LIST_POST',
    GET_LIST_POST_SUCCESS = 'GET_LIST_POST_SUCCESS',

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

export interface ReduxActionPostList {
    type: ReduxActionPostListActionTypes;    
}

export interface ReduxActionPostListSuccess {
    type: ReduxActionPostListActionTypes; 
    payload: BookArrayState;   
}

export type TSearchAction = ReduxSearchActionTypes