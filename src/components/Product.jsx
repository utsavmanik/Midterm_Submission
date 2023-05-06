import { FaShoppingCart, FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import {  useState } from "react";
import StarRatings from "react-star-ratings";
import { addToWishList } from "../slices/wishListSlice";

const Product = (product) => {
    const [theme] = useThemeHook();
    const { title, price, description, image, id, rating } = product.data
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const cart = useSelector(state => state.cart)

    let i = 0
    const handleAddToCart = (e) => {
        console.log("button name: " + e.target.id.InnerText)
        dispatch(addToCart(product.data))
    }
    const handleAddToWishList = () => {
        setToggle(true)
        dispatch(addToWishList(product.data))
        //console.log("Wished ? "+cart.wishListItems.wished)
        //console.log("toggle "+toggle)
    }

    return (

        <div className="col-sm-3" id={id}>
            <div className={`${theme} ? 'bg-light-black text-light' : 'bg-lihgt text-black'} text-center p-0 overflow-hidden shadow mx-auto mb-4`} >
                <Link to={"/productdetails/" + id}>
                    <span className="d-inline-block" tabindex="0" data-toggle="tooltip" title={description}>
                        <img src={image} alt={title + " image"} className="card-img-top" style={{ width: "200px", height: "250px" }} />
                    </span>
                </Link>

                <button id={"button" + id} className={toggle ? 'btn-dark heart' : 'btn-danger heart'} onClick={handleAddToWishList}><FaHeart /></button>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <h4>
                        {/* <span>&#8377;</span> */}${price}
                    </h4>
                    <StarRatings
                        rating={rating.rate}
                        starRatedColor="gold"
                        starDimension="30px"
                        /*  changeRating={changeRating} */
                        numberOfStars={5}
                        name='rating'
                    />&nbsp;&nbsp;&nbsp;
                    <span>{rating.count}</span>
                    <button id={"button" + id} className="btn-primary btn-block" onClick={handleAddToCart}>Add to Cart <FaShoppingCart /></button>

                </div>
            </div>
            <br />
        </div>
    )
}
export default Product