import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import {
    Breadcrumb,
    Divider,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    useToast
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";
import styles from './Account.module.css';
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";


export default function Account() {
    let info = JSON.parse(localStorage.getItem('info')) || {};
    const [edit, setEdit] = useState(true);
    const { isAuth, handleLogin } = useContext(AppContext);
    const toast = useToast();
    useEffect(() => {
        let fname = document.getElementById('fName');
        let lname = document.getElementById('lName');
        let email = document.getElementById('email');
        fname.value = info.firstname;
        lname.value = info.lastname;
        email.value = info.email;

    }, []);
    const handleLogout = () => {
        toast({
            position: 'bottom-right',
            title: `Logout Successfully`,
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
        <NavLink to='/' />
        handleLogin(false);
    }
    return (
        <div>
            <Header />
            <Navbar />
            <Divider orientation='horizontal' borderBottom={'1.9px solid #e5f0da'} />
            <Breadcrumb spacing='8px' className={styles.breadcrumb} separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/account'>Account</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <h1 className={styles.name}>{`Hello ${info.firstname}`}</h1>
            <div className={styles.container} style={{display:"flex"}}>

                <div className={styles.left}>
                    <div>MY PROFILE</div>
                    <div>DELIVERY ADDRESS</div>
                    <div>MY ORDERS</div>
                    <div>TOP ORDERED PRODUCTS</div>
                    <div>MY WISHLIST</div>
                    <div>MY WISHLIST</div>
                    <div>RECENTLY VIEWED</div>
                    <div>MY CASHBACK</div>
                    <div>REFER FRIEND</div>
                    <div>CHANGE PASSWORD</div>
                    <div onClick={handleLogout}>LOG OUT</div>

                </div>
                <div className={styles.right}>
                    <div className={styles.editable}>
                        <div>
                            <label>First Name:</label>
                            <input type="text" readOnly={edit} id='fName' />
                        </div>
                        <div>
                            <label>last Name:</label>
                            <input type="text" readOnly={edit} id='lName' />

                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="text" readOnly={edit} id='email' />
                        </div>
                        <div>
                            <label>Contact Number:</label>
                            <input type="number" name="" id="" readOnly={edit} />
                        </div>
                        <button onClick={() => setEdit(!edit)}>{edit ? "Edit" : "Done"}</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
