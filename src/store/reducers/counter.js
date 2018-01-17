import * as actionTypes from './../actions';

const initialState = {
    counter: 0
};

export default (state = initialState, action) => {
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
        case actionTypes.CLICKED_INPUT:
            return {
                ...state,
                counter: state.counter + action.value
            }
    }
    return state;
};
