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
        //
        // case assetConstants.ADD_ASSET_PENDING:
        //     return {
        //         ...state,
        //         externalAssetIsPending: true,
        //     };
        //
        // case constants.CHANGE_ADD_ASSET_DIALOG_STATUS:
        //     return {
        //         ...state,
        //         ...action.payload.status,
        //     };

        default:
            return state;
    }
}
