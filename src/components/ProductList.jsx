import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"
import EndPoints from "../api/EndPoints"
import ShowSpinner from "./ShowSpinner"
import { FormControl, InputGroup } from "react-bootstrap"
import { BiSearch } from 'react-icons/bi'
import { useThemeHook } from "../GlobalComponents/ThemeProvider"
import SearchFilter from 'react-filter-search';

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchInput, setSearchInput] = useState('');
    const [theme] = useThemeHook();

    let i = 0
    const fetchData = async () => {
        setTimeout(10000)
        const response = await (axios.get(EndPoints.PRODUCT_URL));
        try {
            //i++
            //setIsLoading(true)
            console.log("Before Printing: ")
            setProducts(response.data)
            console.log("After Printing: ")
            setIsLoading(true)
        }
        catch (error) {
            console.log(error);
        }
        //i++
        //console.log("i:"+ i +" "+response.data)
        /* axios.get(EndPoints.PRODUCT_URL)
        .then(response=>
            {
                console.log("Printing i:"+i);
                setProducts(response.data)
            })
        .catch(error=>console.log(error)) */

        //setProducts(response.data)            
    }

    //setTimeout(fetchData,20000)
    useEffect(
        () => {
            fetchData()
            /* fetch(EndPoints.PRODUCT_URL)
                .then(response => response.json())
                .then(response => {
                    console.log(response)

                    setProducts(response)
                }
                ) */
            //fetchData() = async () => {
            /* const response = axios.get(EndPoints.PRODUCT_URL);
            try {
                //i++
                //setIsLoading(true)
                console.log("Before Printing: ")
                console.log("Before Data fetched"+ products) 
                setProducts(response.data)
                console.log("response.data "+response.data)
                console.log("After Printing: ")  
                console.log("After Data fetched"+ products)                
                //setIsLoading(false)
            }
            catch (error) {
                console.log(error);
            } */
            //i++
            //console.log("i:"+ i +" "+response.data)
            /* axios.get(EndPoints.PRODUCT_URL)
            .then(response=>
                {
                    console.log("Printing i:"+i);
                    setProducts(response.data)
                })
            .catch(error=>console.log(error)) */

            //setProducts(response.data)            
            //}
        }, []
    )
    return (


        <div className="wrapper">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <InputGroup className="mb-3">
                        <InputGroup.Text className={theme ? 'bg-black text-dark-primary' : 'bg-light text-light-primary'}>
                            <BiSearch size="2rem" />
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className={theme ? 'bg-light-black text-light' : 'bg-light text-black'}
                        />
                    </InputGroup>
                </div>
                <div className="col-md-4"></div>
            </div>
            {isLoading ?
                <SearchFilter
                    value={searchInput}
                    data={products}
                    renderResults={results => (
                        <div className="row">
                            {
                                results &&
                                results.map(product => (<Product data={product} />))
                            }
                        </div>
                    )}
                />
                : <ShowSpinner />
            }
        </div>
    )
}
export default ProductList