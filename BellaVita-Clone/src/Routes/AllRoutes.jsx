import { Routes, Route } from 'react-router-dom';
import Account from './Account';
import Home from './Home';
export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account' element={<Account />} />
        </Routes>
    )
}