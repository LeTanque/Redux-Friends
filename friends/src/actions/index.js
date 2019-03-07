import axios from 'axios';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axios.post('http://localhost:5000/api/login', creds)
        .then(response => {
            localStorage.setItem('token', response.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.payload });
            getData();
        })
}

export const getData = () => {
    axios
        .get('http://localhost:5000/api/data', {
            headers: { Authorization: localStorage.getItem('token')}
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}

