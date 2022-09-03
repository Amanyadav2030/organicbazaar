import { Icon } from '@chakra-ui/react'
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
import { useContext, useEffect, useRef, useState } from 'react';
import { FaSearch, FaHeart, FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

import styles from './Cart.module.css';
import MenuBar from './Navbar/menuBar';
// import Counter from './Counter';

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuth, cartItems, handleCartItems } = useContext(AppContext);
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);
    const total = useRef(100);
    const redirect = useNavigate();
    // useEffect(() => {
    //     open && onOpen();
    //     console.log(open, "Drawer");
    // }, [open])
    const handleOpen = () => {
        setOpen(!open);
    }
    useEffect(() => {
        let localItems = cartItems.map((el) => {
            if (el['quantity'] == undefined) {
                el['quantity'] = 1;
                return el;
            } else {
                return el;
            }
        });
        setItems(cartItems);
        console.log(cartItems);
    }, [cartItems]);

    const handleQuantity = (id, value) => {
        const updateItem = items.map((el) =>
            el.id === id ? { ...el, quantity: el.quantity + value } : el
        );
        setItems([...updateItem])
        localStorage.setItem('cartItems', JSON.stringify(updateItem));
    };
    const handleDelete = (id) => {
        const Filter = items.filter((el) => el.id != id);
        // console.log(Filter);
        setItems([...Filter]);
        handleCartItems(Filter, true);
        localStorage.setItem('cartItems', JSON.stringify(Filter))
    }
    useEffect(() => {
        total.current = items.reduce((prev, el) => prev + el.disPrice * el.quantity, 0);
    }, [items])



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
            <div id='SearchBox'>
                <FaBars className='Bars' onClick={() => setOpen(!open)} />
                <MenuBar open={open} handleOpen={handleOpen} />
                <input type="text" placeholder="Search for products" />
                <FaSearch />
                <div className='userAccount2' onClick={() => redirect('/account')}>
                    <svg className="icon icon-account2" viewBox="0 0 269.83 270" ><path d="M269.8 51.78c0-2.36-.14-4.73-.51-7.06-4-24.89-26.79-45.29-53.5-44.71-26.87.58-53.75.13-80.61.13v.12c-28.56 0-57.13-.49-85.68.15C22.71.99.05 25.05.03 51.77l.05 166.3c0 4 .64 8.09 1.59 11.98 4.56 18.9 23.37 40.21 53.89 39.95l158.69-.13c2.53 0 5.06-.16 7.6-.35 26-1.92 47.92-25.37 47.95-51.45V51.77zm-6.57 163.63c-.15 27.94-20.86 47.79-48.9 47.82h-79.57-79.57c-27.47-.04-48.29-19.62-48.52-47.13L6.64 53.91C6.85 26.41 27.52 6.65 55 6.6h159.65c27.75.04 48.4 19.92 48.58 47.64v161.18zm-67.26-18.62c-2.34-31.18-28.9-55.54-60.77-55.74-31.95-.2-58.93 24.29-61.34 55.67-.49 6.38-.04 6.86 6.57 6.87h54.2 55.21c6.12 0 6.6-.57 6.13-6.79zm-114.45-.07c-2.66-22.46 23.97-47.65 51.44-48.92 28.18-1.31 56.31 23.15 55.58 48.92H81.52zm53.71-130.47c-17.23-.14-31.01 13.32-31.27 30.55-.26 16.94 13.61 31.14 30.64 31.34 16.96.22 31.05-13.61 31.28-30.71.24-17.05-13.52-31.06-30.65-31.19zm-.41 54.98c-13.22-.04-24.17-11.03-24.11-24.2.06-13.18 11.12-24.14 24.29-24.08 13.21.07 24.17 11.09 24.11 24.25-.05 13.18-11.05 24.06-24.29 24.03z"></path></svg>
                </div>
                <div className="cart" onClick={handleClick} >
                    <svg className="icon icon-cartnew" viewBox="0 0 209.58 270"><path d="M209.21 247.91l-.25-2.02-6.68-60.32-12.93-119.13c-.55-5.31-2.39-6.93-7.55-6.74-9.45.35-18.93.1-29.09.1.89-15.79.3-30.68-10.45-42.91C131.54 4.71 118.11-.61 101.91.06c-11.4.47-21.18 4.46-29.74 11.7C57.38 24.28 55.28 41.21 56.7 59.8c-11.07 0-21.09.05-31.1-.02-3.22-.03-4.97.95-5.3 4.55l-3.96 36.51-10.72 97.83-5.54 54.77c-.86 10.96 4.88 16.34 15.77 16.34l173.51.21c16.97.15 21.68-7.05 19.85-22.09zM79.73 13.65c15.54-10.41 32.02-10.84 48.03-1.23 17.73 10.63 20.64 27.73 18.65 47.06H62.98c-1.89-18.27.39-34.86 16.75-45.83zm114.29 250.44c-1.19.07-2.37.04-3.57.04H18.93c-1.53 0-3.07.04-4.59-.12-6.02-.61-9.17-4.27-8.53-10.37l7.89-73.03 10.86-98.88 1.85-15.58h30.07c0 3.31-.39 6.4.14 9.32a4.5 4.5 0 0 0 .17.63c.94 2.79 5.13 2.56 5.62-.34v-.05c.46-2.96.13-6.04.13-9.46h84.29c0 4.31-.25 8.67.13 12.96a2.76 2.76 0 0 0 .06.4c.59 2.6 4.3 2.85 5.41.42.15-.33.25-.66.29-.99.46-4.16.15-8.4.15-12.89h30.1l2.76 23.69 15.14 137.92 2.63 25.38c.68 6.9-2.5 10.54-9.49 10.96z"></path></svg>
                </div>
                <div className='Heart'>
                    <FaHeart />
                </div>
            </div>
            <div id="logos2">
                <Link to='/'> <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO_220_x_220_480x.png?v=1653304683" alt="" /></Link>
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brave_220_x_220_480x.png?v=1653304701" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVL_220_x_220_480x.png?v=1653304721" alt="" />
            </div>
            <div id="cartdrawer">

                <Drawer onClose={onClose} isOpen={isOpen} size={'md'} >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader> <Link to='/allproducts' style={{
                            textDecoration: "underline"
                        }}> Continue Shopping</Link> </DrawerHeader>
                        <DrawerBody>
                            {items?.map((el) => (
                                <div className={styles.container} key={el.id}>
                                    <div className={styles.cartimage}>
                                        <img className={styles.Image} src={el.Image} alt="" />
                                    </div>
                                    <div className={styles.Box}>
                                        <p className={styles.cartName}>{el.brand}</p>
                                        <div className={styles.prbox}>
                                            <p className={styles.prices}>{`₹ ${el.disPrice * el.quantity}.00`} <span>{`₹${el.realPrice}.00`}</span></p>
                                        </div>
                                        <div className={styles.addremoveBox}>
                                            <div className={styles.counter}>
                                                <button onClick={() => handleQuantity(el.id, -1)} disabled={el.quantity == 1} className={styles.btn1}>-</button>
                                                <button className={styles.count}>  {el.quantity}  </button>
                                                <button onClick={() => handleQuantity(el.id, +1)} className={styles.btn2}>+</button>
                                            </div>
                                            <svg onClick={() => handleDelete(el.id)} viewBox="0 0 190.68 252.38"><g id="a"></g><g id="b"><g id="c"><g><path d="M95.45,17.16c28.77,0,57.53,0,86.3,0,1.16,0,2.33,0,3.49,.02,2.64,.07,5.34,.48,5.43,3.78,.1,3.56-2.82,3.83-5.35,3.56-4.55-.5-6.23,1.42-6.37,5.85-.27,8.15-.98,16.28-1.36,24.42-1.47,31.09-2.78,62.19-4.35,93.28-1.47,29.26-3.19,58.51-4.81,87.76-.58,10.49-6.84,16.52-17.34,16.53-37.08,.04-74.16,.04-111.24,0-10.53,0-16.63-5.3-17.4-15.78-1.2-16.26-2-32.56-2.84-48.84-1.7-32.91-3.29-65.83-4.96-98.74-.98-19.46-2.14-38.9-2.94-58.37-.18-4.4-1.36-6.55-6.06-6.1C3.18,24.75,.05,24.71,0,21.26c-.05-3.92,3.25-4.08,6.16-4.08,29.76-.02,59.53-.01,89.29-.02Zm.14,8.09c-23.27,0-46.55,.1-69.82-.08-4.81-.04-6.54,1.57-6.2,6.36,.4,5.64,.59,11.3,.89,16.94,1.9,35.23,3.53,70.47,5.28,105.7,1.33,26.93,2.67,53.86,4.07,80.79,.37,7.09,3.34,9.95,10.34,9.95,36.74,.04,73.48,.04,110.21,0,7.4-.01,10.27-2.71,10.64-10.19,1.18-23.43,2.18-46.87,3.32-70.31,.68-14.13,1.48-28.25,2.21-42.38,1.57-30.08,3.18-60.16,4.67-90.25,.31-6.29-.06-6.52-6.29-6.52-23.11-.02-46.21,0-69.32,0Z"></path><path d="M124.23,6.37c-.17,3.15-3.31,4.78-5.82,2.83-2.37-1.84-4.82-1.94-7.49-1.94-9.65,0-19.29-.02-28.94,.01-3.6,.01-7.3-.58-10.39,2.26-1.23,1.13-2.85,.66-4.05-.53-1.21-1.19-1.39-2.64-.69-4.13,1.19-2.56,3.12-4.72,5.96-4.75,15.13-.15,30.26-.21,45.39,.09,3.41,.07,5.4,2.95,6.04,6.16Z"></path><path d="M56.44,131.72c0-27.65-.03-55.31,.05-82.96,0-3.26-1.17-8.21,3.88-8.2,4.88,.01,4.03,4.92,4.03,8.23,.06,55.31,.06,110.62,0,165.93,0,3.46,.85,8.59-4.4,8.41-5.08-.18-3.47-5.26-3.49-8.44-.11-27.65-.06-55.31-.06-82.96Z"></path><path d="M91.46,131.67c0-27.15,0-54.29,0-81.44,0-1.83-.02-3.68,.2-5.48,.28-2.26,1.08-4.45,3.84-4.37,2.71,.08,3.46,2.28,3.74,4.53,.21,1.64,.19,3.32,.19,4.99,0,54.79,.03,109.59-.04,164.38,0,3.42,1.26,8.72-3.85,8.79-5.77,.08-3.99-5.54-4.01-8.96-.14-27.48-.08-54.96-.08-82.44Z"></path><path d="M134.43,132.07c0,27.65,.04,55.29-.05,82.94-.01,3.24,1.16,8.21-3.96,8.09-4.86-.11-3.92-5.02-3.93-8.31-.07-55.29-.07-110.59,0-165.88,0-3.29-.97-8.3,3.85-8.34,5.33-.05,4.02,5.17,4.03,8.56,.09,27.65,.05,55.29,.05,82.94Z"></path></g></g></g></svg>


                                        </div>

                                    </div>
                                </div>
                            ))}
                        </DrawerBody>
                        <DrawerFooter>
                            <Button disabled={!isAuth} onClick={() => redirect('/checkout')} className={styles.checkoutBtn}>CHECKOUT   <span className={styles.total}>₹{total.current}.00</span></Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    )
}