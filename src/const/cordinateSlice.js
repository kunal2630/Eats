import { createSlice } from "@reduxjs/toolkit";

const cordinateSlice = createSlice({
	name: "cordinate",
	initialState: {
		latitude: null,
		longitude: null,
	},
	reducers: {
		setCordinate: (state, action) => {
			state.latitude = action.payload.latitude;
			state.longitude = action.payload.longitude;
		},
	},
});

//named export
export const { setCordinate } = cordinateSlice.actions;

export default cordinateSlice.reducer; //default export
