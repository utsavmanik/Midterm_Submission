import NavbarComponent from "../components/NavbarComponent"
import { Link } from 'react-router-dom'
import oopsImage from '../images/404-error-NEW2.jpg'
const ErrorPage = () => {
    return (
        <>
            <NavbarComponent />
            <div className="container text-center">
                <Link to="/"><img src={oopsImage} alt="ooPs" /></Link>
            </div>
        </>
    )
}
export default ErrorPage