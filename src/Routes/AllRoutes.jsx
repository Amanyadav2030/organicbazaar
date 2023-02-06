import { Routes, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home/Home';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import PrivateRoute from '../Components/Common/PrivateRoute';
import SingleProduct from './SingleProduct/SingleProduct';
import AllProducts from './AllProducts/AllProducts';
import Checkout from './Checkout/Checkout';
import Payment from './Payment/Payment';
import Bestseller from './Bestseller/Bestseller';
import SkinCare from './Skincare/Skincare';
import HairCare from './Haircare/Haircare';
import Perfume from './Perfumes/Perfumes';
import BodyCare from './Bodycare/Bodycare';
export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/account' element={
                <PrivateRoute>
                    <Account />
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/allproducts' element={<AllProducts />} />
            <Route path='/bestseller' element={<Bestseller />} />
            <Route path='/skincare' element={<SkinCare />} />
            <Route path='/haircare' element={<HairCare />} />
            <Route path='/bodycare' element={<BodyCare />} />
            <Route path='/perfumes' element={<Perfume />} />
            <Route path='/product/:id' element={<SingleProduct />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    )
}