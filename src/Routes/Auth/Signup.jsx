import Header from "../../Components/Common/Header";
import Navbar from "../../Components/Navbar/Navbar";
import styles from './Form.module.css'
import { Button, Divider, Heading, HStack, VStack } from '@chakra-ui/react'
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from '@chakra-ui/react';
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const authSignupApi = async (data) => {
    return await axios.post(`${import.meta.env.VITE_API_KEY}/user/signup`, data);
}
export default function Signup() {
    const redirect = useNavigate();
    const { isAuth } = useSelector((store) => store.authData);
    const [info, setInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const toast = useToast();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]: value
        })

    }
    const handleFocus = (event) => {
        event.target.placeholder = "";
    };
    useEffect(() => {

    }, [dispatch])
    const submitForm = (event) => {
        event.preventDefault();
        authSignupApi(info).then((res) => {
            toast({
                position: 'bottom-right',
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            setTimeout(() => {
                redirect('/login')
            }, 2000);
        }).catch((err) => {
            console.log(err)
            toast({
                position: 'bottom-right',
                title: 'Signup Error.',
                description: err.response.data,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        })
    }
    if (isAuth) {
        return <Navigate to={'/account'} />
    }

    return (
        <div>
            <Header />
            <Navbar />
            <Divider orientation='horizontal' borderBottom={'1.9px solid #e5f0da'} />
            <HStack p={['1.8rem 0rem', '3rem 0rem', '3rem 0rem']} justify={'center'} w={'100%'}>
                <form style={{ width: '100%' }} onSubmit={submitForm}>
                    <VStack w={['90%', '80%', '40%']} m={'auto'}>
                        <Heading fontSize={['36px', '46px']} fontWeight={'400'} className={styles.header}>Create account</Heading>
                        <div className={styles.inputDiv2}>
                            <input type="text" name="first_name" onChange={handleChange} placeholder="First name" onBlur={(event) => event.target.placeholder = 'First name'} required onFocus={handleFocus} className={styles.inputs} />
                            <input type="text" name="last_name" onChange={handleChange} placeholder="Last name" onBlur={(event) => event.target.placeholder = 'Last name'} required onFocus={handleFocus} className={styles.inputs} />
                            <input type="email" name="email" onChange={handleChange} placeholder="Email" onBlur={(event) => event.target.placeholder = 'Email'} onFocus={handleFocus} required className={styles.inputs} />
                            <input type="password" name="password" onChange={handleChange} placeholder="Password" onBlur={(event) => event.target.placeholder = 'Password'} required onFocus={handleFocus} className={styles.inputs} />
                        </div>
                        <Button fontSize={['15px', '20px']} p={['1rem', '1.3rem', '1.8rem']} w={['65%', '50%', '40%']} className={styles.btn} type="submit" >Create</Button>
                    </VStack>

                </form>
            </HStack>
            <Footer />
        </div>
    )
}