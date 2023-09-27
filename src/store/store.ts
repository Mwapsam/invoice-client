import { configureStore } from '@reduxjs/toolkit';
import customersSlice from '../reducers/customer';
import invoiceSlice from '../reducers/invoice'

const store = configureStore({
  reducer: {
    customers: customersSlice,
    invoices: invoiceSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['payload'],
      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      ignoredPaths: ['items.dates'],
    },
  }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;