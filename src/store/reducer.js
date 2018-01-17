//this file is not used now because this has been further divided onto sub reducer and combined in index.js
import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,//distributing the old state overriding the counter and return the new state.
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        case actionTypes.DELETE_RESULT:
            //method 1
            // const id = 2;
            // const newArray = [...state.results];//copy new array never touch the original,
            // newArray.splice(id, 1);//update the copied array

            //method 2
            //filter function returns a new array
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            };
            break;
    }
    return state;
};
