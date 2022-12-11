import { BookData } from "../../data/mocks/Book";
import { BookState } from "../../data/models/BookCategory";
import { ReduxSearchActionTypes, ReduxSearchAction } from "../reducers/type";

/**
 * Seatch Action for Items
 */

export function fetchSearchBook (bookData: BookState[]) : ReduxSearchAction {
    return {
        type: ReduxSearchActionTypes.SEARCH_ACTIONS,
        data: bookData,
    }
}

export function fetchSearchPending () {
    return {
        type: ReduxSearchActionTypes.SEARCH_ACTIONS,
    }
}
