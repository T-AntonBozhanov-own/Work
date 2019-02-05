import * as constants from './constants';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type){
        case constants.ADD_TODO:
            return (
                [
                    ...state,
                    action.payload,
                ]
            );

        case constants.REMOVE_TODO:
            return (
               state.filter(item => item.id !== action.payload)
            );

        default:
            return state;
    }
}
