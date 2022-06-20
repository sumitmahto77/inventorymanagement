import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./reducer";




// const rootReducer = combineReducers({
//     users: usersReducers
// });

// export default rootReducer; 



const persistConfig = {
    key : "root",
    storage,
    whitelist: [""]
}


const rootReducer = combineReducers({
    auth : authReducer
});

export default persistReducer(persistConfig, rootReducer); 
