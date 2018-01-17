import * as actionTypes from './../actions';

const initialState = {
    results: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
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
    }
    return state;
};
