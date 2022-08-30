import { Routes, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from '../Components/PrivateRoute';
import SingleProduct from './SingleProduct';
import AllProducts from './AllProducts';
import Checkout from './Checkout';
import Payment from './Payment';
import Bestseller from './Bestseller';
import SkinCare from './Skincare';
import HairCare from './Haircare';
import Perfume from './Perfumes';
import BodyCare from './Bodycare';
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