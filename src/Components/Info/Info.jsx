import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartAPI } from "../../store/cart/Cart.action";
import styles from "./Info.module.css";
export default function Info() {
    const { isAuth, token } = useSelector((store) => store.authData);
    const { loading, error, data } = useSelector((store) => store.cartData);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        dispatch(getCartAPI(token));
        // console.log(data, 'inside cart info')
    }, [dispatch])
    useEffect(() => {
        let totalAmount = data.reduce((prev, el) => prev + el.total, 0);
        setTotal(totalAmount)
    }, [data]);
    return (
        <VStack p={['15px 0px', '25px', '52px']} w={['96%', '80%', '43%']} justify={'start'} align={'start'} className={styles.InfoContainer}>
            <VStack w={'100%'} justify={'start'} align={'start'} gap={['22px']} className={styles.itemsBox}>
                {data?.map((item) => (
                    <HStack w={'100%'} justify={'space-between'} align={'center'} className={styles.item} key={item._id}>
                        <Image w={['79px']} src={item.productId.Img} alt="" />
                        <span className={styles.qty}>{item.quantity}</span>
                        <Box fontSize={['13px', '14px', '16px']} w={['236px']} className={styles.brand}>{item.productId.brand}</Box>
                        <div> ₹{item.productId.disPrice}.00</div>
                    </HStack>
                ))}
            </VStack>
            <HStack w={'100%'} align={'center'} justifyContent={'space-between'} m={'32px auto'}>
                <div className={styles.total}>
                    <Text fontSize={['16px', '18px', '20px']}>Total</Text>
                    <Text color="gray" style={{
                        letterSpacing: '0.4px'
                    }}>Including ₹{(total * 18 / 100)} in taxes (18%)</Text>
                </div>
                <Text fontSize={['1.2rem', '1.8rem', '2rem']} fontWeight='700'> ₹ {Number(total + (total * 18 / 100)).toFixed(2)}</Text>
            </HStack>

        </VStack>
    )

}