import { createSlice } from '@reduxjs/toolkit';
import { createCustomer } from '../services/customer.service';

type SliceState = { 
    customers: []
    error: string
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    customers: [],
    error: "",
    loading: 'idle',
} as SliceState

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createCustomer.pending, (state) => {
            state.loading = 'pending';
        });

        builder.addCase(createCustomer.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message!
        });

        builder.addCase(createCustomer.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.customers = action.payload;
        });
    }
})

export default customerSlice.reducer;