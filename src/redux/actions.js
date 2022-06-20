import * as types from './actionType';
import axios from 'axios';

// const getUsers = (users) => ({
//     type: types.GET_USERS,
//     payload: users,
// });

// const userAdded = () =>({
//     type:types.ADD_USER,

// });

// export const loadUsers = () => {
//     return function(dispatch){
//         axios.get("http://localhost:4000/users")
//         .then((response) => {
//             console.log("response", response);
//             dispatch(getUsers(response.data));
//         })
//         .catch((error) => console.log(error));
//     };
// };

// export const addUser = (user) => {
//     return function (dispatch){
//         axios
//             .post("http://localhost:4000/users",user)
//             .then((response) =>{
//                 console.log("response",response);
//                 dispatch(userAdded());
//             })
//             .catch((error) => console.log(error));
//     };
// };


const loginStart = () => ({
    type : types.LOGIN_START,
});

const loginSuccess = (token) => ({
    type : types.LOGIN_SUCCESS,
    payload : token,
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


export const loginInitiate = (email,password) => {
    return function(dispatch){
        dispatch(loginStart());
        axios
        .post("http://localhost:4000/login",{
            email,
            password,
        })
        .then((response) => {
            console.log("response", response);
            dispatch(loginSuccess(response.data.access_token))
            
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
            dispatch(registerSuccess(response.data))
            
        })
        .catch((error) => dispatch(registerFail(error.response.data.message)));
    };
};
