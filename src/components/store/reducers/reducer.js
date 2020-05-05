import * as actionTypes from '../actions/actionTypes';


const initialState = {
    apiResponse: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PHONES:
            return {
                ...state,
                apiResponse: action.phones,
                loading: true

            };
    default:
            return state;
    }
};




export default reducer;