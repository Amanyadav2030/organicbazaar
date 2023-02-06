import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAPI, deleteCartAPI } from '../../store/cart/Cart.action';
import styles from './Cart.module.css';
const CartCard = ({ Img, realPrice, id, disPrice, qty, data, brand, stock }) => {
    const [quantity, setQuantity] = useState(qty);
    const { token } = useSelector((store) => store.authData)
    const dispatch = useDispatch();
    useEffect(() => {
        setQuantity(qty);
    }, [dispatch, quantity])
    useEffect(() => {
        setQuantity(qty)
    }, [qty])
    const handleQuantity = (value) => {
        setQuantity(quantity + value);
        dispatch(addCartAPI(token, {
            productId: data.productId._id,
            quantity: (quantity + value) - qty
        }))
    };
    const handleDelete = (id) => {
        // console.log(id, 'handleDelete')
        dispatch(deleteCartAPI(token, id))
    }
    return (
        <HStack align={'center'} p={['3px', '7px 0px']} justify={'space-between'} className={styles.container}>
            <Box>
                <Image p={['2px', '3px', '3px']} w={['100px', '110px', '127px']} className={styles.Image} src={Img} alt="" />
            </Box>
            <VStack align={'start'} w={['75%', '70%', '65%']} className={styles.Box}>
                <Text fontSize={['15px', '17px', '18px']} className={styles.cartName}>{brand}</Text>
                <HStack align={'center'} w={'100%'} justify={'space-between'} className={styles.prbox}>
                    <Text className={styles.prices}>{`₹ ${disPrice}.00`} <span>{`₹${realPrice}.00`}</span></Text>
                </HStack>
                <HStack w={'100%'} align={'center'} justify={'space-between'} p={['1.8px', '3px']} className={styles.addremoveBox}>
                    <HStack h={['31px']} className={styles.counter}>
                        <button onClick={() => handleQuantity(-1)} disabled={quantity == 1} className={styles.btn1}>-</button>
                        <button className={styles.count}>  {quantity}  </button>
                        <button disabled={quantity == stock} onClick={() => handleQuantity(+1)} className={styles.btn2}>+</button>
                    </HStack>
                    <svg style={{ cursor: 'pointer' }} onClick={() => handleDelete(id)} viewBox="0 0 190.68 252.38"><g id="a"></g><g id="b"><g id="c"><g><path d="M95.45,17.16c28.77,0,57.53,0,86.3,0,1.16,0,2.33,0,3.49,.02,2.64,.07,5.34,.48,5.43,3.78,.1,3.56-2.82,3.83-5.35,3.56-4.55-.5-6.23,1.42-6.37,5.85-.27,8.15-.98,16.28-1.36,24.42-1.47,31.09-2.78,62.19-4.35,93.28-1.47,29.26-3.19,58.51-4.81,87.76-.58,10.49-6.84,16.52-17.34,16.53-37.08,.04-74.16,.04-111.24,0-10.53,0-16.63-5.3-17.4-15.78-1.2-16.26-2-32.56-2.84-48.84-1.7-32.91-3.29-65.83-4.96-98.74-.98-19.46-2.14-38.9-2.94-58.37-.18-4.4-1.36-6.55-6.06-6.1C3.18,24.75,.05,24.71,0,21.26c-.05-3.92,3.25-4.08,6.16-4.08,29.76-.02,59.53-.01,89.29-.02Zm.14,8.09c-23.27,0-46.55,.1-69.82-.08-4.81-.04-6.54,1.57-6.2,6.36,.4,5.64,.59,11.3,.89,16.94,1.9,35.23,3.53,70.47,5.28,105.7,1.33,26.93,2.67,53.86,4.07,80.79,.37,7.09,3.34,9.95,10.34,9.95,36.74,.04,73.48,.04,110.21,0,7.4-.01,10.27-2.71,10.64-10.19,1.18-23.43,2.18-46.87,3.32-70.31,.68-14.13,1.48-28.25,2.21-42.38,1.57-30.08,3.18-60.16,4.67-90.25,.31-6.29-.06-6.52-6.29-6.52-23.11-.02-46.21,0-69.32,0Z"></path><path d="M124.23,6.37c-.17,3.15-3.31,4.78-5.82,2.83-2.37-1.84-4.82-1.94-7.49-1.94-9.65,0-19.29-.02-28.94,.01-3.6,.01-7.3-.58-10.39,2.26-1.23,1.13-2.85,.66-4.05-.53-1.21-1.19-1.39-2.64-.69-4.13,1.19-2.56,3.12-4.72,5.96-4.75,15.13-.15,30.26-.21,45.39,.09,3.41,.07,5.4,2.95,6.04,6.16Z"></path><path d="M56.44,131.72c0-27.65-.03-55.31,.05-82.96,0-3.26-1.17-8.21,3.88-8.2,4.88,.01,4.03,4.92,4.03,8.23,.06,55.31,.06,110.62,0,165.93,0,3.46,.85,8.59-4.4,8.41-5.08-.18-3.47-5.26-3.49-8.44-.11-27.65-.06-55.31-.06-82.96Z"></path><path d="M91.46,131.67c0-27.15,0-54.29,0-81.44,0-1.83-.02-3.68,.2-5.48,.28-2.26,1.08-4.45,3.84-4.37,2.71,.08,3.46,2.28,3.74,4.53,.21,1.64,.19,3.32,.19,4.99,0,54.79,.03,109.59-.04,164.38,0,3.42,1.26,8.72-3.85,8.79-5.77,.08-3.99-5.54-4.01-8.96-.14-27.48-.08-54.96-.08-82.44Z"></path><path d="M134.43,132.07c0,27.65,.04,55.29-.05,82.94-.01,3.24,1.16,8.21-3.96,8.09-4.86-.11-3.92-5.02-3.93-8.31-.07-55.29-.07-110.59,0-165.88,0-3.29-.97-8.3,3.85-8.34,5.33-.05,4.02,5.17,4.03,8.56,.09,27.65,.05,55.29,.05,82.94Z"></path></g></g></g></svg>
                </HStack>
            </VStack>
        </HStack>
    )
}

export default CartCard