import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import {
    Breadcrumb,
    Divider,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    useToast,
    VStack,
    HStack,
    Text
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";
import styles from './Account.module.css';
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authLogoutApi } from "../store/auth/auth.action";

const getUserById = (token) => {
    return axios.get(`${import.meta.env.VITE_API_KEY}/user/info`, {
        headers: {
            authorization: token
        }
    })
}
const UpdateUserById = (token, info) => {
    return axios.patch(`${import.meta.env.VITE_API_KEY}/user/update`, info, {
        headers: {
            authorization: token
        }
    })
}
export default function Account() {
    const [edit, setEdit] = useState(true);
    const { token } = useSelector((store) => store.authData);
    const dispatch = useDispatch()
    const [info, setInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact: ''
    });
    const toast = useToast();
    useEffect(() => {
        getUserById(token).then((res) => {
            setInfo(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        })
    }
    const handleUpdate = () => {
            UpdateUserById(token, info).then((res) => {
        }).catch((err) => {
            console.log(err.message);
        })
    }

    const handleLogout = () => {
        dispatch(authLogoutApi())
        toast({
            position: 'bottom-right',
            title: `Logout Successfully`,
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
        <NavLink to='/' />
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
            <Text mt={['0.5rem', '0rem']} className={styles.name}>{`Hello `}</Text>
            <div className={styles.container} style={{ display: "flex" }}>

                <VStack display={['none', 'flex', 'flex']} className={styles.left}>
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

                </VStack>
                <VStack w={['100%', '80%', '60%']} className={styles.right}>
                    <VStack align={'center'} w={'100%'} mt={'3rem'} gap={['2px', '10px', '15px']} fontSize={['18px']} className={styles.editable}>
                        <HStack p={['0', '0.3rem', '0.5rem']} w={['100%', '80%', '56%']} justify={'space-between'} >
                            <label>First Name:</label>
                            <input onChange={handleChange} type="text" value={info.first_name} name='first_name' readOnly={edit} />
                        </HStack>
                        <HStack p={['0', '0.3rem', '0.5rem']} w={['100%', '80%', '56%']} justify={'space-between'}>
                            <label>last Name:</label>
                            <input onChange={handleChange} type="text" value={info.last_name} name='last_name' readOnly={edit} />
                        </HStack>
                        <HStack p={['0', '0.3rem', '0.5rem']} w={['100%', '80%', '56%']} justify={'space-between'}>
                            <label>Email:</label>
                            <input onChange={handleChange} value={info.email} name='email' type="text" readOnly={edit} />
                        </HStack>
                        <HStack p={['0', '0.3rem', '0.5rem']} w={['100%', '80%', '56%']} justify={'space-between'}>
                            <label>Contact Number:</label>
                            <input onChange={handleChange} type="number" value={info.contact} name='contact' readOnly={edit} />
                        </HStack>
                        <button onClick={() => {
                            if (!edit) {
                                handleUpdate();
                            }
                            setEdit(!edit)
                        }}>{edit ? "Edit" : "Done"}</button>
                    </VStack>
                </VStack>
            </div>
            <Footer />
        </div>

    )
}
