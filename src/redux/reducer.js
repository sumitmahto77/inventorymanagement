import * as types from './actionType';

const initialAuthState ={
    user : null,
    loading : false,
    error : null,
    token : null
};

const initialProdState = {
    products : [],
    loading : true,
};

export const authReducer = (state = initialAuthState, action) => {
    switch (action.type){
        case types.LOGIN_START:
        case types.REGISTER_START:
            return{
                ...state,
                loading : true,
            };
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return{
                ...state,
                loading: false,
                user :action.payload.user,
                token : action.payload.accessToken,
            };
        case types.LOGIN_FAIL:
        case types.REGISTER_FAIL:
            return{
                ...state,
                loading :false,
                error : action.payload,
            };

        case types.LOGOUT_USER:
            return{
                ...state,
                user : null,
                token :null,
            };

        default:
            return state;
    }
};

export const prodReducer =(state=initialProdState,action) => {
    switch (action.type){
        case types.GET_PRODUCTS:
            return {
                ...state,
                products : action.payload,
                loading: false,
            };
        case types.ADD_PRODUCT:
            return{
                ...state
            }
        case types.DELETE_PRODUCT:
            return{
                ...state,
                loading :false,
            }

        default:
            return state;
    }

}
