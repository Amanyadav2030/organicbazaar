import { Box, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import styles from "./Card.module.css";
import Cart from "./Cart";

// const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

export default function Card(item) {

    const [hover, setHover] = useState(false);
    const toast = useToast()
    const redirect = useNavigate();
    const { Image, Hover, category, brand, disPrice, realPrice, rating, title, status, id } = item;
    const { handleCartItems, cartItems } = useContext(AppContext);
    const checkExist = (id, cartItems) => {
        let Filter = cartItems.filter(el => el.id == id);
        return Filter.length >= 1 ? true : false;
    }
    const handleAddToCart = () => {
        const addItem = { Image, brand, disPrice, realPrice, rating, id };
        if (checkExist(addItem.id, cartItems)) {
            toast({
                title: `Item Already Exist`,
                variant: 'subtle',
                duration: 2000,
                isClosable: true,
            })
        } else {
            handleCartItems(addItem);
        }
    };
    return (
        <Box className={styles.container} >
            <div className={styles.box} style={{
                overflow: 'hidden',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
            }

            } onClick={() => redirect(`/product/${id}`)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {
                    hover ? <img src={Hover} alt="" className={styles.image} /> : <img src={Image} alt="" className={styles.image} />
                }
            </div>
            {status && <img className={styles.bestseller} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733" alt="" />}
            <div className={styles.brand} onClick={() => redirect(`/product/${id}`)}>{brand}</div>
            <div className={styles.title} onClick={() => redirect(`/product/${id}`)}>{title}</div>
            <div className={styles.prbox}>
                <p className={styles.prices}>{`₹${disPrice}.00`} <span>{`₹${realPrice}.00`}</span></p>
                <p className={styles.rating}><span>{`${rating} `}</span><FaStar /></p>
            </div>
            <button onClick={handleAddToCart} className={styles.btn}>ADD TO CART</button>
        </Box>
    )
}