import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions';



const initialState = {
   friends:[],
   fetching: false,
   error: null
}



export const charsReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                friends: action.payload,
                error: null,
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }


        default:
            return state;
    }
}

