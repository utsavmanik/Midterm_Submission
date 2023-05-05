import React from 'react'
import confirmation from '../images/img_confirm.png'
import NavbarComponent from '../components/NavbarComponent'
const CheckoutPage = () => {
    return (
        <div>
            <NavbarComponent />
            <div className="wrapper">
            <h2 className='text-center'>Order Placed Successfully!!</h2>
                <h2 className='text-center'>We have sent you an email with the order details</h2>
                <img className="card-img-top" src={confirmation} alt="Your Order has been placed" />                
            </div>
        </div>
    )
}

export default CheckoutPage
