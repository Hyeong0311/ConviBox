import { configureStore, createSlice } from '@reduxjs/toolkit';

// 슬라이스 생성
const productSlice = createSlice({
    name: 'product',
    initialState: {
        productDesc: "",
    },
    reducers: {
        setProductDesc: (state, action) => {
            state.productDesc = action.payload;
        },
    },
});

export const { setProductDesc } = productSlice.actions;
export const selectProductDesc = (state) => state.product.productDesc;

const store = configureStore({
    reducer: {
        product: productSlice.reducer,
    },
});

export default store;
