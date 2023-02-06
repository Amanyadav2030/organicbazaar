import Info from '../../Components/Info/Info';
import styles from './Checkout.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, HStack, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCheckoutAPI } from '../../store/checkout/Checkout.action';
import { useEffect } from 'react';
export default function Checkout() {
    const redirect = useNavigate();
    const { isAuth, token } = useSelector((store) => store.authData);
    const { data } = useSelector((store) => store.cartData);
    const toast = useToast();
    const { error, loading } = useSelector((store) => store.checkoutData);
    const dispatch = useDispatch();
    const [address, setAddress] = useState('');
    useEffect(() => {
    }, [dispatch])
    const handleSubmit = (e) => {
        e.preventDefault();
        let cartId = [];
        data.forEach((el) => cartId.push(el._id));
        let totalAmount = data.reduce((prev, el) => prev + el.total, 0);
        let totalQuantity = data.reduce((prev, el) => prev + el.quantity, 0);
        totalAmount += (totalAmount * 18 / 100);
        dispatch(addCheckoutAPI(token, {
            cartId: cartId,
            address: address,
            totalPrice: totalAmount,
            totalQuantity: totalQuantity
        }))
        toast({
            position: 'top',
            title: 'Redirecting for payment',
            description: "Thank you 🎊",
            status: 'success',
            duration: 3000,
            isClosable: true,
        });

        setTimeout(() => {
            redirect('/payment');
        }, 3000);
    }
    return (
        <div>
            <div className={styles.header}>
                <Link to='/'>  <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bellavita-logo_256x256_2cf787ef.png?54744" alt="" />
                </Link>
            </div>
            <HStack justify={'center'} flexDirection={['column-reverse', 'row', 'row']} align={'start'} p={['0rem', '1.5rem', '2rem']}>
                <Box w={['100%', '90%', '56%']} p={['1rem 0.7rem', '1.5rem', '2rem 3rem']} className={styles.information}>
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <VStack gap={['0.8rem', '1rem']} align={'start'} className={styles.addressContainer}>
                            <h2>Shipping address</h2>
                            <span className={styles.country}>Country/region</span>
                            <select required={true} name="" id="">
                                <option value="India">India</option>
                                <option value="usa">USA</option>
                            </select>
                            <input required={true} type="text" minLength={3} onChange={(e) => setAddress(e.target.value)} placeholder='Address' />
                            <input type="text" placeholder='Apartment,suite,etc. (optional)' />
                            <HStack flexDirection={['column', 'row', 'row']} justify={"start"} align={'start'} gap={'0.8rem'} w={['100%', '98%', '97%']} className={styles.city}>
                                <input required={true} type="text" placeholder='City' />
                                <select required={true} style={{ margin: '0' }}>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                                <input required={true} style={{ margin: '0' }} type="text" placeholder='PIN Code' />
                            </HStack>
                            <VStack align={'start'} w={'100%'} className={styles.number}>
                                <input required={true} type="number" maxLength={11} placeholder='Phone' />
                                <div className={styles.checkbox}>
                                    <input required={true} type="checkbox" style={{
                                        accentColor: '#475d4b'
                                    }} name="" id="" />Save this information for next time
                                </div>
                            </VStack>
                            <HStack gap={'0.8rem'} w={'100%'} flexDirection={['column-reverse', 'row', 'row']} className={styles.continueBtn}>
                                <Link to='/allproducts' style={{
                                    textDecoration: "underline"
                                }}>Return to cart</Link>
                                <Button isLoading={loading} loadingText='processing' colorScheme={'green.400'} type={'submit'}>Continue to shipping</Button>
                            </HStack>

                        </VStack>
                    </form>
                </Box>
                <Info />


            </HStack>

        </div>
    )
}