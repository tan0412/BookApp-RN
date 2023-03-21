import { all, call } from "redux-saga/effects";
import getSaga from "./saga";

function* rootSaga() {
    yield all ([
        getSaga(),

    ])
}

export default rootSaga