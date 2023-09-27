import { createSlice } from '@reduxjs/toolkit';
import { createInvoice } from '../services/invoice.service';

type SliceState = { 
    invoices: []
    error: string
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    invoices: [],
    error: "",
    loading: 'idle',
} as SliceState

const invoiceSlice = createSlice({
    name: 'invoices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createInvoice.pending, (state) => {
            state.loading = 'pending';
        });

        builder.addCase(createInvoice.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message!
        });

        builder.addCase(createInvoice.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.invoices = action.payload;
        });
    }
})

export default invoiceSlice.reducer;