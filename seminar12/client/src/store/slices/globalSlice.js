import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: false,
    checkTokenLoading: true,
    token: null
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setCheckTokenLoading: (state, action) => {
            state.checkTokenLoading = action.payload;
        },
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        }
    }
})

export const { setCheckTokenLoading, setLoggedIn, setToken } = globalSlice.actions;
export default globalSlice.reducer;