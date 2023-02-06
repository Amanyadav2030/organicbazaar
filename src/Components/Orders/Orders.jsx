import { Badge, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAPI } from "../../store/order/Order.action";
import styles from "./Orders.module.css";
export default function Orders() {
    const { token } = useSelector((store) => store.authData);
    const { data, loadingO } = useSelector((store) => store.orderData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderAPI(token));
    }, [dispatch]);
    const currentDate = useMemo(() => new Date(), []);
    return (
        <VStack minH={'100vh'} p={['10px 0px', '25px', '30px']} w={['100%', '80%', '95%']} justify={'start'} align={'start'} className={styles.InfoContainer}>
            <VStack w={'100%'} justify={'start'} align={'start'} gap={['22px']} className={styles.itemsBox}>
                {loadingO ? <></> : data.length ? data?.map((item) => (
                    <HStack p={['10px', '10px', '20px']} border={'2px solid white'} w={'100%'} justify={'space-between'} align={'center'} className={styles.item} key={item._id}>
                        <Image w={['100px']} src={item.productId.Img} alt="" />
                        <span className={styles.qty}>{item.quantity}</span>
                        <Box fontSize={['13px', '14px', '16px']} w={['236px']} className={styles.brand}>{item.productId.brand}</Box>
                        <VStack>
                            <Text> ₹{item.productId.disPrice}.00</Text>
                            {
                                new Date(item.deliveredDate) <= currentDate ? <Badge p={'0.3rem'} borderRadius={'4px'} fontSize={'0.8rem'} colorScheme='whatsapp'>Success</Badge> : <Badge p={'0.3rem'} borderRadius={'4px'} fontSize={'0.8rem'} colorScheme='red'>Pending</Badge>
                            }

                        </VStack>
                    </HStack>
                )) : <>
                    <Image src={'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'} />
                    <Text color={'#da1010bf'} fontSize={['1.3rem', '1.5rem', '1.7rem']} textAlign={'center'} w={'100%'}>You haven't ordered something :(</Text>
                    <Text color={'#e7e707'} mt={'0 !important'} fontSize={['1.2rem', '1.4rem', '1.5rem']} textAlign={'center'} w={'100%'}>Please buy products :) </Text>
                </>
                }
            </VStack>
        </VStack>
    )

}