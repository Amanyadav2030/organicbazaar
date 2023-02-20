import { Box, HStack, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Spinner, Text, VStack } from '@chakra-ui/react'
// import { MdSettings } from 'react-icons/md'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { FaSearch, FaHeart, FaBars } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCartAPI } from '../../store/cart/Cart.action';
import styles from '../Cart/Cart.module.css';                                                           
import CartCard from '../Cart/CartCard';
import MenuBar from '../Navbar/menuBar';
// import Counter from './Counter'; 
function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { token } = useSelector((store) => store.authData);
    const { loading, data } = useSelector((store) => store.cartData);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [total, setTotal] = useState(0);
    const redirect = useNavigate();
    const handleOpen = () => {
        setOpen(!open);
    }
    useCallback(() => {
        dispatch(getCartAPI(token));
    }, [dispatch])
    // useEffect(() => {
    //     dispatch(getCartAPI(token));
    // }, [dispatch])

    useEffect(() => {
        let updated = data.reduce((prev, el) => prev + el.total, 0);
        setTotal(updated)
    }, [data])

    const handleClick = () => {
        onOpen()
    };

    return (
        <header>

            <div className='userAccount' onClick={() => redirect('/account')}>
                <svg className="icon icon-account2" viewBox="0 0 269.83 270" ><path d="M269.8 51.78c0-2.36-.14-4.73-.51-7.06-4-24.89-26.79-45.29-53.5-44.71-26.87.58-53.75.13-80.61.13v.12c-28.56 0-57.13-.49-85.68.15C22.71.99.05 25.05.03 51.77l.05 166.3c0 4 .64 8.09 1.59 11.98 4.56 18.9 23.37 40.21 53.89 39.95l158.69-.13c2.53 0 5.06-.16 7.6-.35 26-1.92 47.92-25.37 47.95-51.45V51.77zm-6.57 163.63c-.15 27.94-20.86 47.79-48.9 47.82h-79.57-79.57c-27.47-.04-48.29-19.62-48.52-47.13L6.64 53.91C6.85 26.41 27.52 6.65 55 6.6h159.65c27.75.04 48.4 19.92 48.58 47.64v161.18zm-67.26-18.62c-2.34-31.18-28.9-55.54-60.77-55.74-31.95-.2-58.93 24.29-61.34 55.67-.49 6.38-.04 6.86 6.57 6.87h54.2 55.21c6.12 0 6.6-.57 6.13-6.79zm-114.45-.07c-2.66-22.46 23.97-47.65 51.44-48.92 28.18-1.31 56.31 23.15 55.58 48.92H81.52zm53.71-130.47c-17.23-.14-31.01 13.32-31.27 30.55-.26 16.94 13.61 31.14 30.64 31.34 16.96.22 31.05-13.61 31.28-30.71.24-17.05-13.52-31.06-30.65-31.19zm-.41 54.98c-13.22-.04-24.17-11.03-24.11-24.2.06-13.18 11.12-24.14 24.29-24.08 13.21.07 24.17 11.09 24.11 24.25-.05 13.18-11.05 24.06-24.29 24.03z"></path></svg>
            </div>
            <div id="logos">
                <Link to='/'> <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683" alt="" /></Link>
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" alt="" />
            </div>
            <HStack id='SearchBox' gap={['5px', '8px', '7px']}>
                <FaBars className='Bars' onClick={() => setOpen(!open)} />
                <MenuBar open={open} handleOpen={handleOpen} />
                <InputGroup>
                    <Input placeholder='Search for products' />
                    <InputRightElement children={<FaSearch />} />
                </InputGroup>
                {/* <input type="text" placeholder="Search for products" />
                <FaSearch /> */}
                <div className='userAccount2' onClick={() => redirect('/account')}>
                    <svg className="icon icon-account2" viewBox="0 0 269.83 270" ><path d="M269.8 51.78c0-2.36-.14-4.73-.51-7.06-4-24.89-26.79-45.29-53.5-44.71-26.87.58-53.75.13-80.61.13v.12c-28.56 0-57.13-.49-85.68.15C22.71.99.05 25.05.03 51.77l.05 166.3c0 4 .64 8.09 1.59 11.98 4.56 18.9 23.37 40.21 53.89 39.95l158.69-.13c2.53 0 5.06-.16 7.6-.35 26-1.92 47.92-25.37 47.95-51.45V51.77zm-6.57 163.63c-.15 27.94-20.86 47.79-48.9 47.82h-79.57-79.57c-27.47-.04-48.29-19.62-48.52-47.13L6.64 53.91C6.85 26.41 27.52 6.65 55 6.6h159.65c27.75.04 48.4 19.92 48.58 47.64v161.18zm-67.26-18.62c-2.34-31.18-28.9-55.54-60.77-55.74-31.95-.2-58.93 24.29-61.34 55.67-.49 6.38-.04 6.86 6.57 6.87h54.2 55.21c6.12 0 6.6-.57 6.13-6.79zm-114.45-.07c-2.66-22.46 23.97-47.65 51.44-48.92 28.18-1.31 56.31 23.15 55.58 48.92H81.52zm53.71-130.47c-17.23-.14-31.01 13.32-31.27 30.55-.26 16.94 13.61 31.14 30.64 31.34 16.96.22 31.05-13.61 31.28-30.71.24-17.05-13.52-31.06-30.65-31.19zm-.41 54.98c-13.22-.04-24.17-11.03-24.11-24.2.06-13.18 11.12-24.14 24.29-24.08 13.21.07 24.17 11.09 24.11 24.25-.05 13.18-11.05 24.06-24.29 24.03z"></path></svg>
                </div>
                <div className="cart" onClick={handleClick} >
                    <svg className="icon icon-cartnew" viewBox="0 0 209.58 270"><path d="M209.21 247.91l-.25-2.02-6.68-60.32-12.93-119.13c-.55-5.31-2.39-6.93-7.55-6.74-9.45.35-18.93.1-29.09.1.89-15.79.3-30.68-10.45-42.91C131.54 4.71 118.11-.61 101.91.06c-11.4.47-21.18 4.46-29.74 11.7C57.38 24.28 55.28 41.21 56.7 59.8c-11.07 0-21.09.05-31.1-.02-3.22-.03-4.97.95-5.3 4.55l-3.96 36.51-10.72 97.83-5.54 54.77c-.86 10.96 4.88 16.34 15.77 16.34l173.51.21c16.97.15 21.68-7.05 19.85-22.09zM79.73 13.65c15.54-10.41 32.02-10.84 48.03-1.23 17.73 10.63 20.64 27.73 18.65 47.06H62.98c-1.89-18.27.39-34.86 16.75-45.83zm114.29 250.44c-1.19.07-2.37.04-3.57.04H18.93c-1.53 0-3.07.04-4.59-.12-6.02-.61-9.17-4.27-8.53-10.37l7.89-73.03 10.86-98.88 1.85-15.58h30.07c0 3.31-.39 6.4.14 9.32a4.5 4.5 0 0 0 .17.63c.94 2.79 5.13 2.56 5.62-.34v-.05c.46-2.96.13-6.04.13-9.46h84.29c0 4.31-.25 8.67.13 12.96a2.76 2.76 0 0 0 .06.4c.59 2.6 4.3 2.85 5.41.42.15-.33.25-.66.29-.99.46-4.16.15-8.4.15-12.89h30.1l2.76 23.69 15.14 137.92 2.63 25.38c.68 6.9-2.5 10.54-9.49 10.96z"></path></svg>
                </div>
                <div className='Heart'>
                    <FaHeart />
                </div>
            </HStack>
            <div id="logos2">
                <Link to='/'> <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683" alt="" /></Link>
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" alt="" />
            </div>
            <div id="cartdrawer">
                <Drawer onClose={onClose} isOpen={isOpen} size={['md', 'md', 'lg']} >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader> <Link to='/allproducts' style={{
                            textDecoration: "underline"
                        }}> Continue Shopping  </Link> </DrawerHeader>
                        {/* Img, realPrice, id, disPrice, quantity,data */}
                        <DrawerBody>
                            {loading ? <Spinner
                                m={'auto'}
                                display={'block'}
                                thickness='5px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='green.400'
                                size='xl'
                            /> : data.length ? data?.map((el) => (
                                <CartCard stock={el.productId.stock} brand={el.productId.brand} Img={el.productId.Img} qty={el.quantity} realPrice={el.productId.realPrice} disPrice={el.productId.disPrice} key={el._id} id={el._id} data={el} />
                            )) : <Image src={'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'} />
                            }
                        </DrawerBody>
                        <DrawerFooter>
                            <Button disabled={data.length == 0} fontSize={['16px', '18px', '21px']} w={['95%', '91%', '91%']} h={['39px', '40px', '46px']} onClick={() => redirect('/checkout')} className={styles.checkoutBtn}>CHECKOUT  <span className={styles.total}>₹{total}.00</span></Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    )
}
export default Header;