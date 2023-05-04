import { useParams } from "react-router-dom"
import NavbarComponent from "../components/NavbarComponent"
import axios from "axios"
import { useEffect, useState } from "react"
import EndPoints from "../api/EndPoints"
import { useDispatch } from "react-redux"
import { addToCart, addToWishList } from "../slices/cartSlice"
import {FaShoppingCart,FaHeart} from 'react-icons/fa'

const ProductDetailPage = (props) => {
    const {id} = useParams()
    const x=id
    const [productDetail, setProductDetail] = useState([])
    const dispatch = useDispatch()
    const fetchData = async () => {
        let i=0
        const response = await axios.get(EndPoints.PRODUCT_URL + id);
        try {
            console.log("Printing: " + i)
            console.log("Id of item clicked:"+id)
            setProductDetail(response.data)
            console.log("Details: "+response.data)
        }
        catch (error) { console.log(error) }
    }
    useEffect(() => {
            fetchData();
        }, [id]);

    const [toggle, setToggle] = useState(false)

    const handleAddToWishList = () => {
        setToggle(true)
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
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                    
                        <div className="col-md-6">
                            <img src={productDetail.image} alt={productDetail.image} className="img-fluid shadow" />
                        </div>
                        <div className="col-md-6">
                            <h5>{productDetail.title}</h5>
                            <p style={{
                                fontSize: "22px",
                                color: "#999",
                                marginLeft: "10px",
                            }}>{/* <span>&#8377;</span> */}${productDetail.price}</p>
                           
                            <p>{productDetail.description}</p>
                            <button className="btn-primary" onClick={handleAddToCart}>Add to Cart <FaShoppingCart /></button>
                            <button id={"addToWishList" +productDetail.id} className={toggle? 'btn-dark heart' : 'btn-danger heart'} onClick={handleAddToWishList}><FaHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetailPage