import { useParams } from "react-router-dom"
import NavbarComponent from "../components/NavbarComponent"
import axios from "axios"
import { useEffect, useState } from "react"
import EndPoints from "../api/EndPoints"
import { useDispatch } from "react-redux"
import { addToCart } from "../slices/cartSlice"
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import ShowSpinner from "../components/ShowSpinner"
import StarRatings from "react-star-ratings"
import { addToWishList } from "../slices/wishListSlice"

const ProductDetailPage = (props) => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [productDetail, setProductDetail] = useState([])
    const dispatch = useDispatch()
    const fetchData = async () => {
        let i = 0
        const response = await axios.get(EndPoints.PRODUCT_URL + id);
        try {
            console.log("Printing: " + i)
            console.log("Id of item clicked:" + id)
            setProductDetail(response.data)
            setIsLoading(true)
            console.log("Details: " + response.data)
        }
        catch (error) { console.log(error) }
    }
    useEffect(() => {
        fetchData();
    }, [id]);

    const [toggle, setToggle] = useState(false)

    const handleAddToWishList = () => {
        setToggle(toggle?false:true)
        dispatch(addToWishList(productDetail))
        //console.log("Wished ? "+cart.wishListItems.wished)
        //console.log("toggle "+toggle)
    }

    const handleAddToCart = () => {
        dispatch(addToCart(productDetail))
    }



    return (
        <>
            <NavbarComponent />
            {isLoading ?
                <div className="container">
                    <div className="wrapper">
                        <div className="row">

                            <div className="col-md-6">
                                <img src={productDetail.image} alt={productDetail.image} className="img-fluid shadow" />
                            </div>
                            <div className="col-md-6">
                                <h5>{productDetail.title}</h5>
                                <StarRatings
                                    rating={productDetail.rating.rate}
                                    starRatedColor="gold"
                                    starDimension="30px"
                                    /*  changeRating={changeRating} */
                                    numberOfStars={5}
                                    name='rating'
                                />&nbsp;&nbsp;&nbsp;
                                <span>{productDetail.rating.count}</span>
                                <p style={{
                                    fontSize: "22px",
                                    color: "#999",
                                    marginLeft: "10px",
                                }}>{/* <span>&#8377;</span> */}${productDetail.price}</p>

                                <p>{productDetail.description}</p>
                                <button className="btn-primary" onClick={handleAddToCart}>Add to Cart <FaShoppingCart /></button>
                                <button id={"addToWishList" + productDetail.id} className={toggle ? 'btn-danger heart' : 'btn-dark heart'} onClick={handleAddToWishList}><FaHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>
                : <ShowSpinner />
            }
        </>
    )
}
export default ProductDetailPage