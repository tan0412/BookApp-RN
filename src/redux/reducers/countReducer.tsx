import { AnyAction } from "redux";

interface CounterState {
    value: number;
}
const initialState : CounterState = {
    value: 10,
}

export default function countReducer(state = initialState, action: AnyAction){
    switch (action.type) {
        case 'COUNTER_INCREMENT': 
        return {
            ...state,
            value: state.value - 1
        }
        case 'COUNTER_DECREMENT': 
        return {
            ...state,
            value: state.value + 1
        }
        default: 
        return state
    }
}