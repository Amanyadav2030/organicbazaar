import { Box, useToast, Image, VStack, HStack, Text, Button } from "@chakra-ui/react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartAPI, getCartAPI } from "../../store/cart/Cart.action";
import styles from "./Card.module.css";
export default function Card(item) {
    const [hover, setHover] = useState(false);
    const { isAuth, token } = useSelector((store) => store.authData)
    const { data } = useSelector((store) => store.cartData);
    const dispatch = useDispatch();

    const toast = useToast()
    const redirect = useNavigate();
    // useEffect(() => {
    //     dispatch(getCartAPI(token));
    // }, [dispatch])
    useCallback(() => {
        dispatch(getCartAPI(token));
    }, [dispatch]);
    const { Img, Hover, category, brand, disPrice, realPrice, rating, title, status, id } = item;
    const checkExist = (id) => {
        let filtered = data.filter((el) => id == el.productId._id);
        return filtered.length == 0 ? false : true;
    }
    const handleAddToCart = () => {
        if (!isAuth) {
            toast({
                title: `Please login First`,
                variant: 'subtle',
                duration: 2000,
                status: 'error',
                isClosable: true,
            });
            return;
        }
        if (checkExist(id)) {
            toast({
                title: `Item Already Exist`,
                variant: 'subtle',
                duration: 2000,
                isClosable: true,
            })
        } else {
            dispatch(addCartAPI(token, {
                productId: id
            }))
            toast({
                title: `Item Added Successfully`,
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }
    };
    return (
        <VStack justify={'space-between'} className={styles.container}>
            <Box className={styles.box} onClick={() => redirect(`/product/${id}`)} style={{
                overflow: 'hidden',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
            }

            } onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {
                    hover ? <Image src={Hover} alt="" className={styles.image} /> : <Image src={Img} alt="" className={styles.image} />
                }
            </Box>
            {status && <Image className={styles.bestseller} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733" alt="" />}
            <Text onClick={() => redirect(`/product/${id}`)} w={['100%', '86%', '86%']} m={'auto'} mt={['0.2rem', '0.6rem', '0.6rem']} fontWeight={'600'} fontSize={['14px', '17px', '17px']} className={styles.brand}  >{brand}</Text>
            <Text onClick={() => redirect(`/product/${id}`)} m={'auto'} mt={['0.24rem', '0.6rem', '0.8rem']} w={['100%', '86%', '86%']} className={styles.title} >{title}</Text>
            <HStack onClick={() => redirect(`/product/${id}`)} mt={['0.1rem', '0.5rem', '0.5rem']} pt={['0.01rem', '0.15rem']} w={['100%', '86%', '87%']} justify={'space-between'}>
                <Text fontSize={['17px', '17px', '21px']} className={styles.prices}>{`₹${disPrice}.00`} <span>{`₹${realPrice}.00`}</span></Text>
                <Text fontSize={['15px', '16px', '18px']} className={styles.rating}><span>{`${rating} `}</span><FaStar /></Text>
            </HStack>
            <Button onClick={handleAddToCart} p={['1rem 5px', '1.5rem 5px']} w={'100%'} fontWeight={'600'} colorScheme={'blue'} fontSize={['16px', '20px', '20px']} color={'#e5f0da'} background={'#475d4b'} className={styles.btn}>ADD TO CART</Button>
        </VStack>
    )
}
// onClick={() => redirect(`/product/${id}`)}
// onClick={() => redirect(`/product/${id}`)}