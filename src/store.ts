import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from "./slice/ProductSlice.ts";

const store = configureStore({
    reducer: {
        product: ProductSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
