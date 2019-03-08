import axios from 'axios';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


export const login = creds => dispatch => {
    dispatch({ 
        type: LOGIN_START 
    });
    return axios
        .post('http://localhost:5000/api/login', creds)
        .then(response => {
            localStorage.clear();
            localStorage.setItem('token', response.data.payload);
            dispatch({ 
                type: LOGIN_SUCCESS, 
                payload: response.data.payload 
            });
            getFriends();
        })
        .catch(error => {
            // console.log('This is the action error: ', error)
        })
}

export const getFriends = () => dispatch => {
    dispatch({
        type: FETCH_DATA_START
    })
    axios
        .get(
            'http://localhost:5000/api/friends', {
                headers: { 
                    Authorization: localStorage.getItem('token') 
                }
            }
        )
        .then(response => {
            // console.log(response.data)
            dispatch({
                type: FETCH_DATA_SUCCESS,
                payload: response.data,
            })
        })
        .catch(error => {
            dispatch({
                type: FETCH_DATA_FAILURE,
                payload: error.message,
            })
            // console.log('This is a getFriends error: ', error)
        })
}

