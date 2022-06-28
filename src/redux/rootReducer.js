import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {authReducer,prodReducer} from "./reducer";




// const rootReducer = combineReducers({
//     users: usersReducers
// });

// export default rootReducer; 



const persistConfig = {
    key : "root",
    storage,
    whitelist: ["auth","prod"]
}


const rootReducer = combineReducers({
    auth : authReducer,
    prod : prodReducer,
});

export default persistReducer(persistConfig, rootReducer); 

