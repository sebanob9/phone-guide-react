import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const fetchPhones = (phones) => {
    return {
        type: actionTypes.FETCH_PHONES,
        phones: phones,
        loading: true
    };
};

export const fetchPhonesFailed = () => {
    return {
        type: actionTypes.FETCH_PHONES_FAILED
    };
};

export const initPhones = () => {
    return dispatch => {
        axios.get( 'http://localhost:9000/phones' )
            .then( response => {
                dispatch(fetchPhones(response.data));
            })
            .catch( error => {
                dispatch(fetchPhonesFailed());
            } );
    };
};
