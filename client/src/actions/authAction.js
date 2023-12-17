import axios from 'axios';
import { AUTH_ERROR, REMOVE_TOKEN, REGISTER_SUCCESS, LOAD_USER } from './actionsConstant';
import { setAlertAction } from './alertActions';
import { setAuthToken } from '../utilities/helperFunction';

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const response = await axios.get('/api/auth');
        dispatch({
            type: LOAD_USER,
            payload: response.data
        });
    } catch (error) {
        dispatch({ type: REMOVE_TOKEN });
    }
}

export const registerAction = ({ username, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, password });
    try {
        const response = await axios.post('/api/users', body, config);
        console.log('response', response)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
        dispatch(loadUser());
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            console.log(errors)
            errors.forEach(error => dispatch(setAlertAction(error, 'danger')));
        }
        dispatch({ type: REMOVE_TOKEN });
    }
}



export const loginAction = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, password });
    try {
        const response = await axios.post('/api/auth', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
        dispatch(loadUser());
    } catch (error) {
        const errors = error.response.data.errors;
        if (errors) {
            console.log(errors)
            errors.forEach(error => dispatch(setAlertAction(error, 'danger')));
        }
        dispatch({ type: REMOVE_TOKEN });
    }
}