import { BookState } from "../../data/models/BookCategory";

export enum ReduxSearchActionTypes {
    SEARCH_ACTIONS = 'SEARCH_ACTIONS',
    SEARCH_ACTIONS_PENDING = 'SEARCH_ACTIONS_PENDING'
}

export interface ReduxSearchAction {
    type: ReduxSearchActionTypes;
    data?: BookState[];
}

export type TSearchAction = ReduxSearchActionTypes