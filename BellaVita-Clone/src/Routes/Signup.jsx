import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import styles from './Form.module.css'
import { Divider, Heading } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useToast } from '@chakra-ui/react';
import { AppContext } from "../Context/AppContext";
import Footer from "../Components/Footer";
let userArr = JSON.parse(localStorage.getItem('infoArr')) || [];
export default function Signup() {
    const redirect = useNavigate();
    const { isAuth, handleLogin } = useContext(AppContext);
    const [info, setInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    });
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
    const submitForm = (event) => {
        event.preventDefault();
        userArr.push(info);
        localStorage.setItem('infoArr', JSON.stringify(userArr));
        console.log(userArr);
        localStorage.setItem('info', JSON.stringify(info));
        toast({
            position: 'bottom-right',
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 4000,
            isClosable: true,
        });
        setTimeout(() => {
            redirect('/');
        }, 3000);
        handleLogin(true);
    }

    return (
        <div>
            <Header />
            <Navbar />
            <Divider orientation='horizontal' borderBottom={'1.9px solid #e5f0da'} />
            <div id="Form" method='post'>
                <form className={styles.Form} onSubmit={submitForm}>
                    <Heading className={styles.header}>Create account</Heading>
                    <div className={styles.inputDiv2}>
                        <input type="text" name="firstname" onChange={handleChange} placeholder="First name" onBlur={(event) => event.target.placeholder = 'First name'} onFocus={handleFocus} className={styles.inputs} />
                        <input type="text" name="lastname" onChange={handleChange} placeholder="Last name" onBlur={(event) => event.target.placeholder = 'Last name'} onFocus={handleFocus} className={styles.inputs} />
                        <input type="email" name="email" onChange={handleChange} placeholder="Email" onBlur={(event) => event.target.placeholder = 'Email'} onFocus={handleFocus} className={styles.inputs} />
                        <input type="password" name="password" onChange={handleChange} placeholder="Password" onBlur={(event) => event.target.placeholder = 'Password'} onFocus={handleFocus} className={styles.inputs} />
                    </div>

                    <input className={styles.btn} type="submit" value="Create" />

                </form>
            </div>
            <Footer />
        </div>
    )
}