const initialState = {
    count: 0
};
export const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state,count: state.count - 1 };
        case "ADD_ITEM":
            return { ...state,formData:{...state.formData, ...action.payload} };
        default:
            return state;
    }
    };