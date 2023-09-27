import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SERVER_URL } from '../utils/server';

export const createInvoice = createAsyncThunk(
    'projects/create', async (invoice) => {
        try{
            const response = await axios.post(`${SERVER_URL}/api/v1/invoices`, {invoice})
            const res = await response.data;
                return res;
        } catch(error: unknown | never){
            // throw new Error(error && error)
        }
    }
)