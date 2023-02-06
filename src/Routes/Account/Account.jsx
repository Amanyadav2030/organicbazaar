import Header from "../../Components/Common/Header";
import Navbar from "../../Components/Navbar/Navbar";
import {
    Breadcrumb,
    Divider,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    useToast,
    VStack,
    HStack,
    Text,
    Badge,
    Skeleton
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";
import styles from './Account.module.css';
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authLogoutApi } from "../../store/auth/auth.action";
import Orders from "../../Components/Orders/Orders";

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
    const [isLoaded, setIsLoaded] = useState(true);
    const dispatch = useDispatch();
    const [orders, setOrders] = useState(false)
    const [info, setInfo] = useState({
        first_name: '',
        last_name: '',
        email: '',
        contact: ''
    });
    const toast = useToast();
    useEffect(() => {
        setIsLoaded(false)
        getUserById(token).then((res) => {
            setInfo({ ...res.data, contact: res.contact == null ? '' : res.contact });
            setIsLoaded(true)
        }).catch((err) => {
            setIsLoaded(true)
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
            <Text color={'white'} mt={'0.3rem !important'}>a</Text>
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
            <Text mt={['0.5rem', '0rem']} className={styles.name}>{`Hello ${info.first_name}`}</Text>
            <div className={styles.container} style={{ display: "flex" }}>
                <HStack background={'white !important'} p={'0.5rem'} className={styles.scroll} display={['flex', 'none', 'none']} overflow={'hidden'} overflowX={'auto'} w={['100%', '100%', null]}>
                    <Badge fontSize={'0.9rem'} onClick={() => setOrders(false)} bgColor={'#e5f0da !important'} variant='subtle' p={'0.5rem'} colorScheme='green'>
                        MY PROFILE
                    </Badge>
                    <Badge fontSize={'0.9rem'} onClick={() => setOrders(true)} bgColor={'#e5f0da !important'} variant='subtle' p={'0.5rem'} colorScheme='green'>
                        MY ORDERS
                    </Badge>
                    <Badge onClick={handleLogout} bgColor={'#e5f0da !important'} fontSize={'0.9rem'} variant='subtle' p={'0.5rem'} colorScheme='green'>
                        LOGOUT
                    </Badge>
                </HStack>
                <VStack display={['none', 'flex', 'flex']} className={styles.left}>
                    <div onClick={() => setOrders(false)}>MY PROFILE</div>
                    <div onClick={() => setOrders(true)}>MY ORDERS</div>
                    <div>DELIVERY ADDRESS</div>
                    <div>TOP ORDERED PRODUCTS</div>
                    <div>MY WISHLIST</div>
                    <div>RECENTLY VIEWED</div>
                    <div>MY CASHBACK</div>
                    <div>REFER FRIEND</div>
                    <div onClick={handleLogout}>LOG OUT</div>
                </VStack>
                <VStack w={['100%', '80%', '60%']} className={styles.right}>
                    {
                        orders ? <Orders /> : <VStack align={'center'} w={'100%'} mt={['1rem', '2rem', '3rem']} gap={['2px', '10px', '15px']} fontSize={['18px']} className={styles.editable}>
                            <HStack p={['0', '0.3rem', '0.5rem']} w={['100%', '80%', '56%']} justify={'space-between'} >
                                <label>First Name:</label>
                                <Skeleton isLoaded={isLoaded}>
                                    <input onChange={handleChange} type="text" value={info.first_name} name='first_name' readOnly={edit} />
                                </Skeleton>
                            </HStack>
                            <HStack p={['0', '0.3rem', '0.5rem']} w={['100%', '80%', '56%']} justify={'space-between'}>
                                <label>last Name:</label>
                                <Skeleton isLoaded={isLoaded}>
                                    <input onChange={handleChange} type="text" value={info.last_name} name='last_name' readOnly={edit} />
                                </Skeleton>
                            </HStack>
                            <HStack p={['0', '0.3rem', '0.5rem']} w={['100%', '80%', '56%']} justify={'space-between'}>
                                <label>Email:</label>
                                <Skeleton isLoaded={isLoaded}>
                                    <input onChange={handleChange} value={info.email} name='email' type="text" readOnly={edit} />
                                </Skeleton>
                            </HStack>
                            <HStack p={['0', '0.3rem', '0.5rem']} w={['100%', '80%', '56%']} justify={'space-between'}>
                                <label>Contact Number:</label>
                                <Skeleton isLoaded={isLoaded}>
                                    <input onChange={handleChange} type="number" value={info.contact} name='contact' readOnly={edit} />
                                </Skeleton>
                            </HStack>
                            <button onClick={() => {
                                if (!edit) {
                                    handleUpdate();
                                }
                                setEdit(!edit)
                            }}>{edit ? "Edit" : "Done"}</button>
                        </VStack>
                    }

                </VStack>
            </div>
            <Footer />
        </div>

    )
}
