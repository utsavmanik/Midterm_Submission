import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import SubCategoryPage from './pages/SubcategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { Slide, ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import CartPage from './pages/CartPage';
import WishListPage from './pages/WishListPage';
import CheckoutPage from './pages/CheckoutPage';
function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme ? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto' }}>
       <ToastContainer 
       transition={Zoom}
       autoClose={3000}
       theme="colored"
       pauseOnHover
       newestOnTop={true}
       draggable={true}
       />
      <Router>
     
        <Routes>
          <Route path="/" element={<HomePage />} />
          
        {/*   <Route path="/subcategory/*electronics*" element={<ErrorPage />} />
          <Route path="/subcategory/*" element={<ErrorPage />} /> */}
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/subcategory/:catId" element={<SubCategoryPage />} />
          <Route path="/productdetails/:id" element={<ProductDetailPage />} />
          <Route path="/allPrd" element={<ProductList/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/wishlist" element={<WishListPage/>}/>
          <Route path='/confirm' element={<CheckoutPage/>}/>
          <Route path={"/*"} element={<ErrorPage />} />     
          <Route path="/subcategory/:catId/*" element={<ErrorPage />} />     
          <Route path={"/productdetails/:id/*"} element={<ErrorPage />} />
        </Routes>
      </Router>
    </main >
  );
}

export default App;
