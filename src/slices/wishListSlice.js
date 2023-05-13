import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {
    wishListItems: localStorage.getItem("wishListItems")
        ? JSON.parse(localStorage.getItem("wishListItems"))
        : [],
    wishListTotalQuantity: 0
}
const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const existingIndex = state.wishListItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex === -1) {
                let tempProductItem = { ...action.payload, wishQuantity: 1, wished: true };
                state.wishListItems.push(tempProductItem);
                toast.success(`${action.payload.title} added to Wishlist`, {
                    position: "bottom-right",
                });
            } else {
                //removeFromWishList
                state.wishListItems.map((wishListItem) => {
                    if (wishListItem.id === action.payload.id) {
                        const nextWishListItems = state.wishListItems.filter(
                            (item) => item.id !== wishListItem.id
                        );

                        state.wishListItems = nextWishListItems;

                        toast.error(`${wishListItem.title} removed from Wishlist`, {
                            position: "bottom-right",
                        });
                    }
                    localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
                    return state;
                });
            }
            localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
        },
        removeFromWishList: (state, action) => {
            state.wishListItems.map((wishListItem) => {
                if (wishListItem.id === action.payload.id) {
                    const tempWishListItems = state.wishListItems.filter(
                        item =>
                            item.id !== wishListItem.id
                    )
                    state.wishListItems = tempWishListItems
                    toast.error(`${wishListItem.title} removed from Wishlist`,
                        {
                            position: "bottom-right"
                        })
                }
            })
            localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems))
            return state
        },
        clearWishList: (state, action) => {
            state.wishListItems = []
            localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems))
            toast.error("Wishlist cleared", { position: "bottom-right" });
        }        
    }
})

export const { addToWishList, removeFromWishList, clearWishList } = wishListSlice.actions;

export default wishListSlice.reducer;