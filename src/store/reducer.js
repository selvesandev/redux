const initialState = {
    counter: 0
};

export const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    } else if (action.type === 'ADD') {
        return {
            counter: state.counter + 5
        }
    } else if (action.type === 'SUB') {
        return {
            counter: state.counter - 5
        }
    }
    return state;
};
