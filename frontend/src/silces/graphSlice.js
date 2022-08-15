import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories : [
        'Casco',
        'Osago'
    ],
    activeCategorie: 'Casco'
}

const graphSlice = createSlice({
    name: 'graph',
    initialState,
    reducers: {
        activeCategorieChanged: (state, action) => {
            state.activeCategorie = action.payload;
        }
    }
});

const {actions, reducer} = graphSlice;

export default reducer;
export const {activeCategorieChanged} = actions;