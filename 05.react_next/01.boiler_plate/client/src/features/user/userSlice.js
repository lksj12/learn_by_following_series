import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (submitData) => {
        const response = await axios.post("/api/users/login", submitData);
        return response.data;
    }
);

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (submitData) => {
        const response = await axios.post("/api/users/register", submitData);
        return response.data;
    }
);

export const authUser = createAsyncThunk(
    "user/authUser",
    async () => {
        const response = await axios.get("/api/users/auth");
        return response.data;
    }
);

const initialState = {
    loginSuccess: false,
    email: "",
    message: "",

    registerSuccess: false,
    user: null,
    error: "",

    userData: null,
    isAuth: false,
    isAdmin: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loginSuccess = action.payload.loginSuccess;
            state.email = action.payload.email || "";
            state.message = action.payload.message || "";
        })
        .addCase(registerUser.fulfilled, (state, action)=> {
            state.registerSuccess = action.payload.success;
            state.user = action.payload.user || null;
            state.error = action.payload.error || "";
        })
        .addCase(authUser.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.isAuth = action.payload.isAuth;
                state.isAdmin = action.payload.isAdmin || false;
            });
    }
});

export default userSlice.reducer;