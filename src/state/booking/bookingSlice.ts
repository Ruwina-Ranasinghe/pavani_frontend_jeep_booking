import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
    date: string | null;
    jeepId: string | null;
}

const initialState: BookingState = {
    date: null,
    jeepId: null,
};

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload;
        },
        setJeepId: (state, action: PayloadAction<string>) => {
            state.jeepId = action.payload;
        },
    },
});

export const { setDate, setJeepId } = bookingSlice.actions;
export default bookingSlice.reducer;
