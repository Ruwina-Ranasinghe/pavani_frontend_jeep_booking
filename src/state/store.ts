import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./booking/bookingSlice";
import authReducer from "./auth/authSlice";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        booking: bookingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
