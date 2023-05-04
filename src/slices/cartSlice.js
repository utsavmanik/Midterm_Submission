import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  wishListItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  wishListTotalQuantity: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex].cartQuantity++

        toast.info(`Increased ${state.cartItems[existingIndex].title} quantity`,
          {
            position: "bottom-left",
          });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;

          toast.error(`${cartItem.title} removed from cart`, {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
    addToWishList: (state, action) => {

      const existingIndex = state.wishListItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex === -1) {
        let tempProductItem = { ...action.payload, wishQuantity: 1, wished: true };
        state.wishListItems.push(tempProductItem);
        toast.success(`${action.payload.title} added to Wishlist`, {
          position: "bottom-left",
        });
      } else {
        //removeFromWishList
        /* state.wishListItems.map((wishListItem) => {
          if (wishListItem.id === action.payload.id) {
            const nextWishListItems = state.wishListItems.filter(
              (item) => item.id !== wishListItem.id
            );

            state.wishListItems = nextWishListItems;

            toast.error(`${wishListItem.title} removed from Wishlist`, {
              position: "bottom-left",
            });
          }
          localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
          return state;
        }); */
      }
      localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
    },
    removeFromWishList: (state, action) => {
      state.wishListItems.map((wishListItem) => {
        if (wishListItem.id === action.payload.id) {
          const nextWishListItems = state.wishListItems.filter(
            (item) => item.id !== wishListItem.id
          );

          state.wishListItems = nextWishListItems;

          toast.error(`${wishListItem.title} removed from Wishlist`, {
            position: "bottom-left",
          });
        }
        localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
        return state;
      });
    },
   
    clearWishList: (state, action) => {
      state.wishListItems = [];
      localStorage.setItem("wishListItems", JSON.stringify(state.cartItems));
      toast.error("Wishlist cleared", { position: "bottom-left" });
    }
  },
  moveToCart:(state,action)=>{
    const existingIndex = state.wishListItems.findIndex(
      (item) => item.id === action.payload.id
    );

    if (existingIndex === -1) {
      let tempProductItem = { ...action.payload, wishQuantity: 1, wished: true };
      state.wishListItems.push(tempProductItem);
      toast.success(`${action.payload.title} added to Wishlist`, {
        position: "bottom-left",
      });
    } else {}
    
  }
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart, addToWishList, removeFromWishList, moveToCart, clearWishList } =
  cartSlice.actions;

export default cartSlice.reducer;
