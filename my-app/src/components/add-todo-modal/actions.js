import * as constants from './constants';

export const onChange = data => ({
    type: constants.CHANGE_DATA,
    payload: data,
});

export const changeIsOpen = isOpen => ({
    type: constants.CHANGE_IS_OPEN,
    payload: isOpen,
});


