import { createSlice } from '@reduxjs/toolkit';

const activeTerm = createSlice({
    name: 'activeTerm',
    initialState: {},
    reducers: {
        setActiveTerm(state, action) {
            const { term } = action.payload;
            return (state = { activeTerm : term});
        },
        clearActiveTerm(state) {
            return (state = { activeTerm: "" });
        }
    }
});

export const { setActiveTerm, clearActiveTerm } = activeTerm.actions;

export default activeTerm.reducer;