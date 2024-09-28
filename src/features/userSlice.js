import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    registeredUsers: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.registeredUsers.push(action.payload);
        },
    },
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
