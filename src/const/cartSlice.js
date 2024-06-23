import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			const {
				item,
				resName,
				locality,
				resimageId,
				itemId,
				price,
				defaultPrice,
				resId,
				foodtype,
			} = action.payload;
			const existingItem = state.items.find(
				(cartItem) => cartItem.itemId === itemId
			);
			//const checkRes=state.items.find((cartItem) => cartItem.resId === resId);

			if (existingItem) {
				// If the item is already in the cart, increase its qty by 1
				existingItem.qty += 1;
			} else {
				// If the item is not in the cart, add it with qty 1
				state.items.push({
					item,
					resName,
					locality,
					resimageId,
					itemId,
					qty: 1,
					price,
					defaultPrice,
					resId,
					foodtype,
				});
			}
		},
		removeItem: (state, action) => {
			state.items = state.items.filter(
				(it) => it?.item?.id !== action?.payload
			);
		},
		clearCart: (state) => {
			state.items.length = 0;
		},
		increment: (state, action) => {
			const existingItem = state.items.find(
				(cartItem) => cartItem.itemId === action?.payload
			);

			existingItem.qty += 1;
		},
		decrement: (state, action) => {
			const existingItemIndex = state.items.findIndex(
				(cartItem) => cartItem.itemId === action?.payload
			);

			if (existingItemIndex !== -1) {
				// If the item exists in the cart
				const existingItem = state.items[existingItemIndex];

				if (existingItem.qty > 1) {
					// Decrease the quantity by 1 if it's greater than 1
					existingItem.qty -= 1;
				} else {
					// If quantity is 1, remove the item from the cart
					state.items.splice(existingItemIndex, 1);
				}
			}
		},
	},
});

//named export
export const { addItem, removeItem, clearCart, increment, decrement } =
	cartSlice.actions;

export default cartSlice.reducer; //default export
