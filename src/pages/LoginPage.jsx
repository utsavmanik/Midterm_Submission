import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup'
import EndPoints from '../api/EndPoints'
import { useState } from 'react'
const LoginPage = () => {
    const navigate = useNavigate()
    const [requestResponse, setRequestResponse] = useState({
        textMessage: "",
        className: "",
    });
    const initialValues = {
        email: "",
        password: ""
    }
    const validationSchema = (values) => Yup.object({
        email: Yup.string()
            .required("Email is required")
            .email("Invalid Email"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password should be 6 characters long")
    })
    const handleSubmit = (values) => {
        axios
            .post(EndPoints.LOGINS_URL, values)
            .then(
                (response) => {
                    console.log(response.data);
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.user));

                    setRequestResponse({
                        textMessage: "login successful, thank you",
                        className: "alert alert-success",
                    });
                    navigate("/");
                },
                (error) => {
                    console.log(error.response.data.message);
                    setRequestResponse({
                        textMessage: error.response.data.message,
                        className: "alert alert-danger",
                    });
                }
            )
            .catch((error) => console.log(error));
    }
    /*  fetch('https://fakestoreapi.com/auth/login',{
         method:'POST',
         body:JSON.stringify({
             username: "johnd",
             password: "m38rmF$"
         })
     })
         .then(res=>res.json())
         .then(json=>console.log(json)) */
    /* axios.post(EndPoints.LOGIN_URL, values)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            navigate("/")
        }
        )
        .catch(error => console.log(error)) */

    //}
    return (

        <div className="row">

            <div className="wrapper">
                <div className={requestResponse.className}>
                    {requestResponse.textMessage}
                </div>
                <h2>Login</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnMount>
                    {
                        (formik) => {
                            return (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <Field type="text" name="email" className="form-control" />
                                        <ErrorMessage name="email">
                                            {
                                                (errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <Field type="text" name="password" className="form-control"></Field>
                                        <ErrorMessage name="password">
                                            {
                                                (error) => (
                                                    <small className="text-danger">{error}</small>
                                                )
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <input type="submit" value="Sign In" className='btn btn-primary' />
                                </Form>
                            )
                        }
                    }
                </Formik>
                {/*   <p className="text-center">New User?<Link to="/register">Click Here</Link></p> */}
            </div>
        </div>



    )
}
export default LoginPage