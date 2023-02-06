import { Box, Button, HStack, useToast, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Payment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckoutAPI } from "../../store/checkout/Checkout.action";
import Info from "../../Components/Info/Info";
// import Cards from "react-credit-cards-2";
// import "react-credit-cards/es/styles-compiled.css";
export default function Payment() {
    const [paymentData, setPaymentData] = useState({
        name: "",
        credit: "",
        cvc: "",
        year: ""
    });
    const [focus, SetFocus] = useState("");
    const redirect = useNavigate();
    const toast = useToast();
    const { isAuth, token } = useSelector((store) => store.authData);
    const { error, loading } = useSelector((store) => store.checkoutData);
    const dispatch = useDispatch();
    const { data } = useSelector((store) => store.cartData);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPaymentData({
            ...paymentData,
            [name]: value
        });
    }
    useEffect(() => {

    }, [dispatch])
    const handleSubmit = (event) => {
        event.preventDefault();
        toast({
            position: 'top',
            title: 'Payment Successfully',
            description: "Thank you 🎊 , Your order will placed within 2 days",
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
        let cartId = [];
        data.forEach((el) => cartId.push(el._id));
        dispatch(updateCheckoutAPI(token, {
            status: true,
            cartId: cartId
        }));
        setTimeout(() => {
            redirect('/')
        }, 4000);
    }
    return (
        <div>
            <div className={styles.header}>
                <Link to='/'>  <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bellavita-logo_256x256_2cf787ef.png?54744" alt="" />
                </Link>
            </div>

            <HStack p={['15px 5px', '25px 38px', '31px 48px']} flexDirection={['column-reverse', 'row', 'row']} align={'center'} w={'100%'} className={styles.container}>
                <VStack align='center' gap={['10px']} p={['20px 2px', '30px 2px', '50px 4px']} w={['100%', '80%', '56%']} className={styles.Payment}>
                    <h2>Payment</h2>
                    <Box>
                        <h3>Accepted Cards</h3>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <Box>
                            <h3>Name on Cards</h3>
                            <input required={true} onFocus={(e) => SetFocus(e.target.name)} value={paymentData.name} type="text" placeholder="Ex. Prateek Sukla" name="name" onChange={handleChange} />
                        </Box>
                        <Box>
                            <h3>Credit card number</h3>
                            <input required={true} onFocus={(e) => SetFocus(e.target.name)} value={paymentData.credit} type="text" maxLength={16} name="credit" onChange={handleChange} placeholder="1111-2222-3333-4444" />
                        </Box>
                        <HStack className={styles.Cvv}>
                            <Box w={'48%'}>
                                <h3>Exp Year</h3>
                                <input required={true} onFocus={(e) => SetFocus(e.target.name)} value={paymentData.year} type="text" name="year" maxLength={4} onChange={handleChange} placeholder="2023" />
                            </Box>
                            <Box w={['48%']}>
                                <h3>CVC</h3>
                                <input required={true} onFocus={(e) => SetFocus(e.target.name)} value={paymentData.cvc} type="text" maxLength={3} name="cvc" onChange={handleChange} placeholder="514" />
                            </Box>
                        </HStack>
                        <Button colorScheme={'pink'} isLoading={loading} loadingText='payment processing' m={'auto'} w={['80%', '70%', '60%']} p={['1.1rem', '1.2rem', '1.5rem']} type={'submit'} >Continue to checkout</Button>
                    </form>
                </VStack>


                {/* <Cards
                        number={paymentData.credit}
                        name={paymentData.name}
                        expiry={paymentData.year}
                        cvc={paymentData.cvc}
                        focused={focus}
                    /> */}
                <Info />

            </HStack>

        </div>
    )
}