import React, { useEffect } from 'react'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import { FaShoppingCart } from 'react-icons/fa'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import {
    addToCart,
    clearCart,
    clearWishList,
    decreaseCart,
    getTotals,
    moveToCart,
    removeFromCart,
    removeFromWishList,
} from "../slices/cartSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const WishList = () => {
    const { theme } = useThemeHook()
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleMoveToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(removeFromWishList(product))
    };

    const handleRemoveFromWishList = (product) => {
        dispatch(removeFromWishList(product));
    };
    const handleClearWishList = () => {
        dispatch(clearWishList());
    };
    return (
        <>
            <div className={`${theme ? 'bg-light-black text-light cart-container' : 'bg-light text-black cart-container'} `}>
                <h2 className={`${theme ? 'text-light' : 'text-black'}`}>My Wishlist</h2>
                {cart.wishListItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your Wishlist is empty!!</p>
                        <div className="start-shopping">
                            <Link to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>Start Shopping</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div>


                        <div className="cart-items">
                            {cart.wishListItems &&
                                cart.wishListItems.map((wishListItem) => (
                                    <div className="row">
                                        <div className="col-sm" id={wishListItem.id}>
                                            <div className={`${theme} ? 'bg-light-black text-light' : 'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`} >
                                                <Link to={"/productdetails/" + wishListItem.id}>

                                                    <img src={wishListItem.image} alt={wishListItem.title + " image"} className="card-img-top" style={{ width: "200px", height: "250px" }} />

                                                </Link>
                                                <div className="card-body">
                                                    <h6 className="card-title">{wishListItem.title}</h6>
                                                    <h4>
                                                        {/* <span>&#8377;</span> */}${wishListItem.price}
                                                    </h4>
                                                    <button id={"delete" + wishListItem.id} onClick={() => handleRemoveFromWishList(wishListItem)}>
                                                        <RiDeleteBin7Fill size={20} />
                                                    </button>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <button /* disabled="true"  */id={"cart" + wishListItem.id} className="btn-primary" onClick={()=>handleMoveToCart(wishListItem)}><FaShoppingCart /></button>

                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="cart-summary">
                            <button className="clear-btn" onClick={() => handleClearWishList()}>
                                Clear Wishlist
                            </button>
                            <div className="cart-checkout">
                                <div className="continue-shopping">
                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-left"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                            />
                                        </svg>
                                        <span>Continue Shopping</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default WishList
