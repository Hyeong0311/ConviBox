// 슬라이스 생성
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipeName: "",
    description: "",
    price: "",
    keywords: "",
    image: null as File | null,
}

const productSlice = createSlice({
    name: 'product',
    initialState: {
        selectedItem: initialState
    },
    reducers: {
        setSelectedItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
});

export const { setSelectedItem } = productSlice.actions;
export const selectSelectedItem = (state) => state.product.selectedItem; // 선택자 함수
export default productSlice.reducer;
