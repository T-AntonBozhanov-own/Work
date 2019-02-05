import * as constants from './constants';

const initialState = {
    data: '',
    isOpen: false,
};

export default (state = initialState, action) => {
    switch(action.type){
        case constants.CHANGE_DATA:
            return (
                {
                    ...state,
                    data: action.payload,
                }
            );

        case constants.CHANGE_IS_OPEN:
            return (
                {
                    ...state,
                    isOpen: action.payload,
                }
            );

        default:
            return state;
    }
}
