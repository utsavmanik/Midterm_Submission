import axios from 'axios'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import EndPoints from '../api/EndPoints'

const RegisterPage = () => {

    const navigate = useNavigate()
    const initialValues = {
        firstName: "",
        //lastname: "",
        mobile: "",
        email: "",
        password: ""
    }

    const validationSchema = (values) =>
        Yup.object({
            firstName: Yup.string()
                .required("First Name is required"),
            mobile: Yup.string()
                .required("Mobile is required"),
            email: Yup.string()
                .required("Email is required")
                .email("Invalid Email"),
            password: Yup.string()
                .required("Password is required")
                .min(6, "Password should be 6 characters long")
        })

    const onSubmit = (values) => {
        axios
            .post(EndPoints.REGISTER_URL, values)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
        /* axios.post(EndPoints.SIGNUP_URL, values)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))
        navigate("/") */

        /* fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'Johnyyd@gmail.com',
                    username:'johndjoe',
                    password:'m38rmF$',
                    name:{
                        firstname:'Johnyyy',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json)) */
    }

    return (

        <div className="row">

            <div className="wrapper">
                <h1>Registration</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    validateOnMount>
                    {
                        (formik) => {
                            return (
                                <Form>
                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <Field type="text" name="firstName" className="form-control" />
                                        <ErrorMessage name="firstName">
                                            {
                                                (errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Mobile</label>
                                        <Field type="text" name="mobile" className="form-control" />
                                        <ErrorMessage name="mobile">
                                            {
                                                (errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <Field type="email" name="email" className="form-control"></Field>
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
                                                (errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )
                                            }
                                        </ErrorMessage>
                                    </div>
                                    <input type="submit" className="btn btn-warning" disabled={!formik.isValid}/>
                                </Form>
                            )
                        }
                    }
                </Formik>
                {/* <p className="text-center">Existing User?<Link to="/login">Click Here</Link></p> */}
            </div>

        </div>

    )
}
export default RegisterPage