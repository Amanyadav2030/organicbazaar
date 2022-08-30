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
} from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import styles from './Cart.module.css';


export default function Cart({ open }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isAuth, cartItems } = useContext(AppContext);
    const [items, setItems] = useState([]);
    const total = useRef(100);
    const redirect = useNavigate();
    useEffect(() => {
        open && onOpen();
        console.log(open, "Drawer");
    }, [open])
    useEffect(() => {
        // const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
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
        setItems([...updateItem]);
        localStorage.setItem('cartItems', JSON.stringify(updateItem));
    };
    const handleDelete = (id) => {
        const Filter = items.filter((el) => el.id != id);
        console.log(Filter);
        setItems([...Filter]);
        localStorage.setItem('cartItems', JSON.stringify(Filter))
    }
    useEffect(() => {
        total.current = items.reduce((prev, el) => prev + el.disPrice * el.quantity, 0);
    }, [items])


    return (
        <>

            <Drawer onClose={onClose} isOpen={isOpen} size={'md'}>
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
        </>
    )
}