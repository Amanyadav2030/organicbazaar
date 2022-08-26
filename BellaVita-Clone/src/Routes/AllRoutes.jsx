import { Routes, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from '../Components/PrivateRoute';
import SingleProduct from './SingleProduct';
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
            <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
    )
}