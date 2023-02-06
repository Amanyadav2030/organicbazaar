import Header from "../../Components/Common/Header";
import Navbar from "../../Components/Navbar/Navbar";
import styles from './SingleProduct.module.css';
import { FaStar } from 'react-icons/fa'
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import {
    Breadcrumb,
    Divider,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    useToast,
    HStack,
    Image,
    Box,
    Text,
    Button
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addSingleCartAPI, getSingleAPI, getSingleCartAPI } from "../../store/single/product_details.action";
export default function SingleProducts() {
    const { isAuth, token } = useSelector((store) => store.authData)
    const { singleData, loading2, loading, data } = useSelector((store) => store.singleData);
    const dispatch = useDispatch();
    const { id } = useParams();
    const toast = useToast();
    const [quantity, setQuantity] = useState(data[0]?.quantity || 1);
    const [count, setCount] = useState(0);
    useEffect(() => {
        dispatch(getSingleCartAPI(token, id));
        dispatch(getSingleAPI(id));
    }, [dispatch, quantity, count]);
    useEffect(() => {

    }, [quantity, count])
    const checkExist = (id) => {
        // console.log(id, data, '********')
        let filtered = data.filter((el) => id == el.productId._id);
        return filtered.length == 0 ? false : true;
    }
    const handleAddToCart = () => {
        setCount(count + 1)
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
                title: `Item Already Exist Please Increase Quantity`,
                variant: 'subtle',
                duration: 3000,
                isClosable: true,
            })
        } else {
            dispatch(addSingleCartAPI
                (token, {
                    productId: id
                }))
            dispatch(getSingleCartAPI(token, id))
            toast({
                title: `Item Added Successfully`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    };
    const handleQuantity = (value) => {
        setCount(count + 1)
        setQuantity(data[0]['quantity']);
        setQuantity(quantity + value);
        // console.log((quantity + value) - (data.length != 0 ? data[0]['quantity'] : 1), 'quantity');
        dispatch(addSingleCartAPI(token, {
            productId: id,
            quantity: (quantity + value) - (data.length != 0 ? data[0]['quantity'] : 1)
        }))
        dispatch(getSingleCartAPI(token, id))
    };
    return (
        <div>
            <Header />
            <Navbar />
            <Text color={'white'}>a</Text>
            <Divider orientation='horizontal' borderBottom={'1.9px solid #e5f0da'} />
            <Breadcrumb spacing='8px' className={styles.breadcrumb} separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/allproducts'>AllProducts</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Product</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <HStack flexDirection={['column', 'column', 'row']}   >
                <Box className={styles.imgsection} w={['100%', '100%', '55%']}>
                    <Image src={singleData.Img} m={'auto'} w={['90%']} />
                    {singleData.status && <img className={styles.bestseller} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733" alt="" />}
                </Box>
                <Box w={['100%', '100%', '43%']} p={['12px', '20px', '23px']} className={styles.infosection}>
                    <Text fontSize={['16px', '18px', '21px']} className={styles.brand}>{singleData.brand}</Text>
                    <Text fontSize={['16px', '18px', '21px']} className={styles.title}>{singleData.title}</Text>
                    <div className={styles.prbox}>
                        <p className={styles.prices}>{`₹${singleData.disPrice}.00`} <span>{`₹${singleData.realPrice}.00`}</span></p>
                        <p className={styles.rating}><span>{`${singleData.rating} `}</span><FaStar /></p>
                    </div>
                    <div id="counter">
                        <p className={styles.tax}>( inclusive of all taxes )</p>
                        <div className={styles.counter}>
                            <button onClick={() => handleQuantity(-1)} disabled={quantity == 1} className={styles.btn1}>-</button>
                            <button className={styles.count}>{quantity}</button>
                            <button onClick={() => handleQuantity(1)} disabled={quantity == singleData.quantity} className={styles.btn2}>+</button>
                        </div>
                    </div>
                    <Button p={['1.5rem']} colorScheme={'twitter'} isLoading={loading2} loadingText='Adding' onClick={handleAddToCart} className={styles.cartbtn}>ADD TO CART</Button>
                    <div id="offers">
                        <p className={styles.offerLogo}>offers</p>
                        <div className={styles.discountbox}>
                            <p className={styles.discount}>10% Discount</p>
                            <p className={styles.voucher}>NEW10</p>
                        </div>
                        <p className={styles.discountInfo}>
                            New Users can avail 10% discount on their first order with a minimum order value of ₹499. Cannot be clubbed with any other offers or Bella Cash.
                        </p>
                        <div className={styles.discountbox}>
                            <p className={styles.discount}>4 at the price of 3</p>
                            <p className={styles.voucher}>4FOR3</p>
                        </div>
                        <p className={styles.discountInfo}>
                            Get 4 products for the price of 3! Just add 4 products to your cart and use the code '4FOR3'.  Cannot be clubbed with any other offers or Bella Cash. Offer not valid on Boxes.
                        </p>
                    </div>
                </Box>
            </HStack>
            <Footer />
        </div>
    )

}