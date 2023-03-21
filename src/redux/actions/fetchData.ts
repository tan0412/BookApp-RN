import { BookArrayState } from "../../data/models/BookCategory";
import { ReduxActionPostList, ReduxActionPostListActionTypes, ReduxActionPostListSuccess} from "../reducers/type";

export function getListPost() : ReduxActionPostList {
    return {
        type: ReduxActionPostListActionTypes.GET_LIST_POST,
    }
}

export function getListPostSuccess(payload : BookArrayState) : ReduxActionPostListSuccess {
    return {
        type: ReduxActionPostListActionTypes.GET_LIST_POST_SUCCESS,
        payload : payload,
    }
}
