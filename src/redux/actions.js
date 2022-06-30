import * as types from './actionType';
import axios from 'axios';

const getProducts = (products) => ({
    type: types.GET_PRODUCTS,
    payload: products,
});

const productAdded = () =>({
    type:types.ADD_PRODUCT,
});

const productDeleted = () => ({
    type : types.DELETE_PRODUCT,
});

export const loadProducts = () => {
    return function(dispatch){
        axios.get("http://localhost:4000/products")
        .then((response) => {
            dispatch(getProducts(response.data));
        }).catch((error) => console.log(error));
    };
};

export const addProduct = (product) => {
    return function (dispatch){
        axios
            .post("http://localhost:4000/products",product)
            .then((response) =>{
                console.log("response",response);
                dispatch(productAdded());
                dispatch(loadProducts());
            })
            .catch((error) => console.log(error));
    };
};

export const deleteProduct = (id) => {
    return function (dispatch){
        axios
            .delete(`http://localhost:4000/products/${id}`)
            .then((response)=>{
                console.log(response);
                dispatch(productDeleted());
                dispatch(loadProducts());
            })
            .catch((error) => console.log(error));
    };
};


const loginStart = () => ({
    type : types.LOGIN_START,
});

const loginSuccess = (data) => ({
    type : types.LOGIN_SUCCESS,
    payload : data,
});

const loginFail = (error) => ({
    type : types.LOGIN_FAIL,
    payload : error,
});

const registerStart = () => ({
    type : types.REGISTER_START,
});

const registerSuccess = (token) => ({
    type : types.REGISTER_SUCCESS,
    payload : token,
});

const registerFail = (error) => ({
    type : types.REGISTER_FAIL,
    payload : error,
});

export const logout = () =>({
    type : types.LOGOUT_USER,

})

export const loginInitiate = (credentials) => {
    return function(dispatch){
        dispatch(loginStart());
        axios
        .post("http://localhost:4000/login",credentials)
        .then((response) => {
            console.log("response", response);
            dispatch(loginSuccess(response.data));
            sessionStorage.setItem('token',response.data.accessToken);
              
        })
        .catch((error) => dispatch(loginFail(error.response.data.message)));
    };
};
export const registerInitiate = (user) => {
    return function(dispatch){
        dispatch(registerStart());
        axios
        .post("http://localhost:4000/users",user)
        .then((response) => {
            console.log("response", response);
            dispatch(registerSuccess(response.data));
            
        })
        .catch((error) => dispatch(registerFail(error.response.data.message)));
    };
};

export const logoutUser = () =>{
    return function (dispatch){
        dispatch(logout());
    }
}
