import { ReduxGetIdActionTypes } from "../reducers/type";

export function getIdBook (id: number) {
    return {
        type: ReduxGetIdActionTypes.GET_ID_ACTIONS,
        payload: id
    }
}