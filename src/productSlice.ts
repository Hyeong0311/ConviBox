import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
    pname: string;
    pdesc: string;
    price: string;
    keyword: string;
    image: File | null;
}

const initialState: ProductState = {
    pname: '',
    pdesc: '',
    price: '',
    keyword: '',
    image: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setRecipeName(state, action: PayloadAction<string>) {
            state.pname = action.payload;
        },
        setDescription(state, action: PayloadAction<string>) {
            state.pdesc = action.payload;
        },
        setPrice(state, action: PayloadAction<string>) {
            state.price = action.payload;
        },
        setKeywords(state, action: PayloadAction<string>) {
            state.keyword = action.payload;
        },
        setImage(state, action: PayloadAction<File | null>) {
            state.image = action.payload;
        },
        clearImage(state) {
            state.image = null;
        },
    },
});

export const {
    setRecipeName,
    setDescription,
    setPrice,
    setKeywords,
    setImage,
    clearImage,
} = productSlice.actions;

export default productSlice.reducer;
