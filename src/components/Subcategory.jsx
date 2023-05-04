import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "./Product"
import EndPoints from "../api/EndPoints"
import ShowSpinner from "./ShowSpinner"


const SubCategory = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { catId } = useParams()
//const catId="jewelery"
    const [category, setCategory] = useState([])
    const fetchData = async () => {
        const response = await axios.get(EndPoints.CATEGORY_URL + catId);
        try {
            //setIsLoading(true)
            console.log(response.data)
            setCategory(response.data)
            //setIsLoading(false)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(
        () => {
            fetchData()
        }, [catId]
    )
    return (


        <div className="wrapper">
            <br/><br/>
            {
                isLoading ? (<ShowSpinner />) : null
            }
            <div className="row">
                {/* <div className="col-md-3"></div>
                <div className="col-md-6"> */}
                {
                    category.map(item => (<Product data={item} />))
                }
                {/*  </div>
                <div className="col-md-3"></div> */}
            </div>
        </div>

    )
}
export default SubCategory