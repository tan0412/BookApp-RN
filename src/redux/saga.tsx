import  { call, put, takeLatest} from 'redux-saga/effects'
import bookApi from '../api/BookApi'
import { getListPost, getListPostSuccess } from './actions/fetchData'
import { ReduxActionPostListActionTypes } from './reducers/type'

function* getListBook(action:any) : any {
    try {
        const data = yield call(bookApi.getApiBook)
        yield put(getListPostSuccess(data))
    } catch(error){
        //handle error
    }
} 

function* getSaga (){
    yield takeLatest(ReduxActionPostListActionTypes.GET_LIST_POST, getListBook)
}

export default getSaga