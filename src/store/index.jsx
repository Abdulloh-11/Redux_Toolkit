import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Task-Users/features/UserSlice";
import UsersSlice from "../Task-Posts/features/posts/UsersSlice";
const store = configureStore({
    reducer:{
        users: UserReducer,
        user_card: UsersSlice,
    }
})

export default store