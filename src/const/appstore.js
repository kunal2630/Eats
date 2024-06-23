import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import cordinateReducer from "./cordinateSlice";

const appstore = configureStore({
	reducer: {
		cart: cartReducer,
		 cordinate: cordinateReducer,
	},
});

export default appstore;
