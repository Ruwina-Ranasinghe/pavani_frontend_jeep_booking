// state/booking/bookingSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../interceptors/axiosInterceptor";

interface Jeep {
    _id: string;
    name: string;
    capacity: number;
    availability: string[]; // array of available time slots
}

interface Booking {
    _id: string;
    jeepId: string;
    jeepName: string;
    tripDate: string;
    tripTime: string;
    ticketQR: string;
}

interface BookingState {
    jeeps: Jeep[];
    bookings: Booking[];
    loading: boolean;
    error: string | null;
}

const initialState: BookingState = {
    jeeps: [],
    bookings: [],
    loading: false,
    error: null,
};

// Fetch available jeeps
export const fetchJeeps = createAsyncThunk(
    "booking/fetchJeeps",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get("/jeeps");
            return res.data; // should be Jeep[]
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Failed to fetch jeeps");
        }
    }
);

// Book a jeep
export const bookJeep = createAsyncThunk(
    "booking/bookJeep",
    async (
        data: { jeepId: string; tripDate: string; tripTime: string },
        { rejectWithValue }
    ) => {
        try {
            const res = await axiosInstance.post("/bookings", data);
            return res.data; // should be Booking object with QR
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Booking failed");
        }
    }
);

// Fetch user bookings
export const fetchBookings = createAsyncThunk(
    "booking/fetchBookings",
    async (_, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.get("/bookings/my");
            return res.data; // Booking[]
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Failed to fetch bookings");
        }
    }
);

const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch jeeps
            .addCase(fetchJeeps.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchJeeps.fulfilled, (state, action) => {
                state.loading = false;
                state.jeeps = action.payload;
            })
            .addCase(fetchJeeps.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // book jeep
            .addCase(bookJeep.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(bookJeep.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings.push(action.payload);
            })
            .addCase(bookJeep.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // fetch bookings
            .addCase(fetchBookings.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.loading = false;
                state.bookings = action.payload;
            })
            .addCase(fetchBookings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default bookingSlice.reducer;
