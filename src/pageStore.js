import { createSlice } from "@reduxjs/toolkit";



export const pageSlice = createSlice({
	name: "page",
	initialState: {
		id: window.localStorage.getItem("id")
			? window.localStorage.getItem("id")
			: "0",
	},
	reducers: {
		updateID: (state, action) => {
            window.localStorage.setItem("id", action.payload);
			state.id = action.payload;
		},
	},
});

export const { updateID } = pageSlice.actions;
export default pageSlice.reducer;