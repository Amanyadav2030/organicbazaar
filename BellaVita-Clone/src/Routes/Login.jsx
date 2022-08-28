import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import styles from './Form.module.css'
import {
    Divider,
    Heading,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useToast,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Footer from "../Components/Footer";

export default function Login() {
    const redirect = useNavigate();

    const { isAuth, handleLogin } = useContext(AppContext);

    const [alert, setAlert] = useState(false);
    const toast = useToast();
    const [check, setCheck] = useState({
        email: '',
        password: ''
    });
    let info = JSON.parse(localStorage.getItem('info')) || {};
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
        if (check.email == info.email && check.password == info.password) {
            toast({
                position: 'bottom-right',
                title: `Login Successfully`,
                status: 'success',
                duration: 4000,
                isClosable: true,
            });
            handleLogin(true);
            setTimeout(() => {
                redirect('/');
            }, 3000);
        } else {
            setAlert(true);
        }

    }

    return (
        <div>
            <Header />
            <Navbar />
            <Divider orientation='horizontal' borderBottom={'1.9px solid #e5f0da'} />
            <div id="Form">
                <form className={styles.Form} onSubmit={submitForm}>
                    <Heading className={styles.header}>Login</Heading>
                    {alert && <Alert status='error'>
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

                    <input className={styles.btn} type="submit" value="Sign in " />
                    <p className={styles.underline} onClick={() => redirect('/signup')}>Create account</p>

                </form>
            </div>
            <Footer />
        </div>
    )
}