import Header from "../../Components/Common/Header";
import Navbar from "../../Components/Navbar/Navbar";
import styles from './Form.module.css'
import {
    Divider,
    Heading,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useToast,
    HStack,
    VStack,
    Button,
} from '@chakra-ui/react'
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { authLoginApi } from "../../store/auth/auth.action";

export default function Login() {
    const redirect = useNavigate();
    const { error, isAuth } = useSelector((auth) => auth.authData);
    const dispatch = useDispatch()
    const toast = useToast();
    const [check, setCheck] = useState({
        email: '',
        password: ''
    });
    // console.log(isAuth)
    const handleFocus = (event) => {
        event.target.placeholder = "";
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCheck({
            ...check,
            [name]: value
        });
    };
    const submitForm = (event) => {
        event.preventDefault();
        dispatch(authLoginApi(check));
    }
    if (isAuth) {
        toast({
            position: 'bottom-right',
            title: `Login succesesfull`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
        return <Navigate to={'/'} />
    }

    return (
        <div>
            <Header />
            <Navbar />
            <Divider orientation='horizontal' borderBottom={'1.9px solid #e5f0da'} />
            <HStack p={['1.8rem 0rem', '3rem 0rem', '3rem 0rem']} justify={'center'} w={'100%'}>
                <form style={{ width: '100%' }} onSubmit={submitForm}>
                    <VStack w={['90%', '80%', '40%']} m={'auto'}>
                        <Heading fontSize={['36px', '46px']} fontWeight={'400'} className={styles.header}>Login</Heading>
                        {error && <Alert w={'97%'} status='error'>
                            <AlertIcon />
                            <AlertTitle>Invalid Details</AlertTitle>
                            <AlertDescription>Incorrect email or password</AlertDescription>
                        </Alert>
                        }
                        <div className={styles.inputDiv}>
                            <input type="email" onChange={handleChange} name="email" id="" onBlur={(event) => event.target.placeholder = 'Email'} onFocus={handleFocus} placeholder="Email" className={styles.inputs} />
                            <input type="password" onChange={handleChange} name="password" id="" onBlur={(event) => event.target.placeholder = 'Password'} onFocus={handleFocus} placeholder="Password" className={styles.inputs} />
                            <p className={styles.underline}>Forgot your password?</p>
                        </div>

                        <Button fontSize={['15px', '20px']} p={['1rem', '1.3rem', '1.8rem']} w={['65%', '50%', '40%']} className={styles.btn} type="submit" >Sign in</Button>
                        <p className={styles.underline} onClick={() => redirect('/signup')}>Create account</p>
                    </VStack>
                </form>
            </HStack>
            <Footer />
        </div>
    )
}