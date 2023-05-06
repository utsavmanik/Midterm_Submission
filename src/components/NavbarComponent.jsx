//import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../images/mstile-150x150.png';
import darkLogo from '../images/mstile-150x150 -dark.jpg'
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { BiSun, BiMoon } from 'react-icons/bi';
import Modal from 'react-responsive-modal'
import { useContext, useEffect, useRef, useState } from 'react';
import RegisterPage from '../pages/RegisterPage';
import 'react-responsive-modal/styles.css';
import LoginPage from '../pages/LoginPage';
import ShowModal from './ShowModal';
import { ThemeContext } from '../GlobalComponents/ThemeProvider';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../slices/cartSlice';
import { BsHeartFill, BsFillClipboardHeartFill } from 'react-icons/bs'



const NavbarComponent = () => {

  //const openSignupModal = () => <ShowModal open="openSignup" onClose="onCloseSignUp" />

  const [openSignup, setOpenSignUp] = useState(false)
  const onOpenSignUp = () => setOpenSignUp(true)
  const onCloseSignUp = () => setOpenSignUp(false)

  const [openLogin, setOpenLogin] = useState(false)
  const onOpenLogin = () => setOpenLogin(true)
  const onCloseLogin = () => setOpenLogin(false)

  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);

  const setMode = () => setDarkMode(!darkMode)

  const cart = useSelector(state => state.cart)
  const wishList = useSelector(state => state.wishList)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch]
  )



  return (
    <>
      <Navbar collapseOnSelect expand="md"
        variant={darkMode ? 'dark' : 'light'}
        className={darkMode ? 'bg-light-black border-bottom sticky-top' : 'bg-light border-bottom sticky-top'}

      >
        <Container>
          <Navbar.Brand className={darkMode ? 'text-dark-primary' : 'text-light-primary'} href="/"><span className='navbar-brands'>Shop</span>LANE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/subcategory/electronics">Electronics</Nav.Link>
              <Nav.Link href="/subcategory/jewelery">Jwellery</Nav.Link>
              <NavDropdown title="Fashion" id="basic-nav-dropdown">
                <NavDropdown.Item href="/subcategory/men's clothing">Men's Fashion</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/subcategory/women's clothing">Women's Fashion</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Nav.Link
          className={darkMode ? 'text-dark-primary' : 'text-light-primary'}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
        </Nav.Link>
        <Link
          to="/wishlist"
          className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center`}>
          <BsFillClipboardHeartFill size="2rem" />
          {
            wishList.wishListItems.length > 0 && <span className="badge badge-warning">{wishList.wishListItems.length}</span>
          }
        </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link
          to="/cart"
          className={`${darkMode ? 'text-dark-primary' : 'text-light-primary'} d-flex align-items-center`}
        >
          <FaShoppingCart size="2rem" />
          {
            cart.cartTotalQuantity > 0 && <span className="badge badge-warning">{cart.cartTotalQuantity}</span>
          }
          {/* <span style={{ marginLeft: noOfItems > 0 ? '-50px' : 0 }}>&nbsp;Cart</span> */}
        </Link>

        {/* Signup & Login Dropdown   */}
        {/*  {localStorage.user===null?
        ( */}
        <NavDropdown title={<FaRegUserCircle color='grey' size={50} />} id="basic-nav-dropdown">
          <NavDropdown.Item >
            {/* <Nav.Item onClick={openSignupModal}>Sign Up</Nav.Item> */}
            <Nav.Item onClick={onOpenSignUp}>Sign Up</Nav.Item>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Nav.Item onClick={onOpenLogin}>Login</Nav.Item>
          </NavDropdown.Item>
        </NavDropdown>
        {/*  )  : ""   

        } */}

      </Navbar>

      <Modal open={openSignup} onClose={onCloseSignUp} center
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}
      >
        <RegisterPage />
      </Modal>
      <Modal open={openLogin} onClose={onCloseLogin} center
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
        animationDuration={800}
      >
        <LoginPage />
      </Modal>

    </>
  )
}
export default NavbarComponent