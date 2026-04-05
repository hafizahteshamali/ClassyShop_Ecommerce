import { Route, Routes } from "react-router-dom"
import Layout from "../Layouts/Layout"
import HomePage from "../pages/Home/HomePage"
import ProductsListing from "../pages/Products/ProductsListing"
import Signup from "../pages/Authentication/Signup"
import OTP_verification from "../pages/Authentication/OTP_verification"
import Login from "../pages/Authentication/Login"
import ForgotPassword from "../pages/Authentication/ForgotPassword"
import ResetPassword from "../pages/Authentication/ResetPassword"
import TShirt from "../pages/CategoryPages/fashions/men/TShirt"
import CasualShirts from "../pages/CategoryPages/fashions/men/CasualShirts"
import BlazerAndCoats from "../pages/CategoryPages/fashions/men/BlazerAndCoats"
import Jeans from "../pages/CategoryPages/fashions/men/Jeans"
import KurtasAndSuits from "../pages/CategoryPages/fashions/womens/KurtasAndSuits"
import Sarees from "../pages/CategoryPages/fashions/womens/Sarees"
import Tops from "../pages/CategoryPages/fashions/womens/Tops"
import WomenJeans from "../pages/CategoryPages/fashions/womens/WomenJeans"
import ShirtAndJeans from "../pages/CategoryPages/fashions/kids/ShirtAndJeans"
import KurtaAndShalwar from "../pages/CategoryPages/fashions/kids/KurtaAndShalwar"
import Apple from "../pages/CategoryPages/electronics/mobiles/Apple"
import Samsung from "../pages/CategoryPages/electronics/mobiles/Samsung"
import Oppo from "../pages/CategoryPages/electronics/mobiles/Oppo"
import Vivo from "../pages/CategoryPages/electronics/mobiles/Vivo"
import Techno from "../pages/CategoryPages/electronics/mobiles/Techno"
import Laptops from "../pages/CategoryPages/electronics/laptops/Laptops"
import SmartWatches from "../pages/CategoryPages/electronics/watches/SmartWatches"
import Cameras from "../pages/CategoryPages/electronics/cameras/Cameras"
import MenBags from "../pages/CategoryPages/bags/MenBags"
import WomenBags from "../pages/CategoryPages/bags/WomenBags"
import KidBags from "../pages/CategoryPages/bags/KidBags"
import MenFootwears from "../pages/CategoryPages/footwears/MenFootwears"
import WomenFootwears from "../pages/CategoryPages/footwears/WomenFootwears"
import KidFootwears from "../pages/CategoryPages/footwears/KidFootwears"
import Groceries from "../pages/CategoryPages/groceries/Groceries"
import Beauty from "../pages/CategoryPages/beauty/Beauty"
import Wellness from "../pages/CategoryPages/welless/Wellness"
import Jewellery from "../pages/CategoryPages/jewellery/Jewellery"
import ProductDetail from "../pages/Products/ProductDetail"
import Cart from "../pages/Cart/Cart"
import Checkout from "../pages/Checkout/Checkout"
import OrderConfirmation from "../pages/Checkout/OrderConfirmation"
import { getReq } from "../api/axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "../store/userSlice"
import ProtectedRoute from "../components/ProtectedRoute"
import Dashboard from "../pages/Admin/Dashboard"

const AppRoutes = () => {
  const dispatch = useDispatch();

  const isFetchUser = async () => {
    try {
      const response = await getReq("auth/get-me");
      dispatch(setUser(response?.user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isFetchUser();
  }, []);

  return (
    <Routes>

      {/* Layout Routes */}
      <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />

        {/* ✅ Protected Routes */}
        <Route 
          path="/cart" 
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/checkout" 
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } 
        />

        <Route 
          path="/order-confirmation/:id" 
          element={
              <OrderConfirmation />
          } 
        />

        {/* Categories */}
        <Route path="/mens/t-shirt" element={<TShirt />} />
        <Route path="/mens/casual-shirt" element={<CasualShirts />} />
        <Route path="/mens/blazer-and-coats" element={<BlazerAndCoats />} />
        <Route path="/mens/jeans" element={<Jeans />} />

        <Route path="/womens/kurtas-and-suits" element={<KurtasAndSuits />} />
        <Route path="/womens/sarees" element={<Sarees />} />
        <Route path="/womens/tops" element={<Tops />} />
        <Route path="/womens/jeans" element={<WomenJeans />} />

        <Route path="/kids/shirt-and-jeans" element={<ShirtAndJeans />} />
        <Route path="/kids/kurta-and-shalwar" element={<KurtaAndShalwar />} />

        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Electronics */}
        <Route path="/mobiles/apple" element={<Apple />} />
        <Route path="/mobiles/samsung" element={<Samsung />} />
        <Route path="/mobiles/oppo" element={<Oppo />} />
        <Route path="/mobiles/vivo" element={<Vivo />} />
        <Route path="/mobiles/techno" element={<Techno />} />

        <Route path="/electronics/laptops" element={<Laptops />} />
        <Route path="/electronics/smart-watches" element={<SmartWatches />} />
        <Route path="/electronics/cameras" element={<Cameras />} />

        {/* Bags */}
        <Route path="/bags/men-bags" element={<MenBags />} />
        <Route path="/bags/women-bags" element={<WomenBags />} />
        <Route path="/bags/kid-bags" element={<KidBags />} />

        {/* Footwear */}
        <Route path="/footwear/men-footwears" element={<MenFootwears />} />
        <Route path="/footwear/women-footwears" element={<WomenFootwears />} />
        <Route path="/footwear/kid-footwears" element={<KidFootwears />} />

        {/* Others */}
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/jewellery" element={<Jewellery />} />

      </Route>

      {/* Auth Routes */}
      <Route path="/register" element={<Signup />} />
      <Route path="/verify-email-signup" element={<OTP_verification />} />
      <Route path="/verify-email-forgot-password" element={<OTP_verification />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Product Listing */}
      <Route path="/products" element={<Layout />}>
        <Route index element={<ProductsListing />} />
      </Route>

      {/* ✅ Admin Route */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute adminOnly={true}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default AppRoutes