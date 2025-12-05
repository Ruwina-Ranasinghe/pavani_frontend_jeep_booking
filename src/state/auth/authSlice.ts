import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../interceptors/axiosInterceptor.ts";

interface AuthState {
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
};

// Async Thunks
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (data: { email: string; password: string }, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post("/user/login", data); // <-- backend route
            localStorage.setItem("token", res.data.token);
            return res.data.token;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Login failed");
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (data: { name: string; email: string; password: string }, { rejectWithValue }) => {
        try {
            await axiosInstance.post("/user/signup", data); // <-- backend route
            return true;
        } catch (err: any) {
            return rejectWithValue(err.response?.data?.message || "Registration failed");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.token = null;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder
            // login
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            // register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
