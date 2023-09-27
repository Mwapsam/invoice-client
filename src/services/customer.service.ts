import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SERVER_URL } from '../utils/server';

export const createCustomer = createAsyncThunk(
    'projects/create', async (customer) => {
        try{
            const response = await axios.post(`${SERVER_URL}/api/v1/customers`, {customer})
            const res = await response.data;
                return res;
        } catch(error: unknown | never){
            // throw new Error(error && error)
        }
    }
)