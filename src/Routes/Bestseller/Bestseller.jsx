import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Catagories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Common/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Products from "../../Components/Products/Products";
import styles from "../Common/AllProducts.module.css";
import {
    Breadcrumb,
    Divider,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    useToast,
    HStack,
    Image,
    Text,
    Select,
    Spinner,
    Box
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProductAPI } from "../../store/products/product.action";

export default function Bestseller() {
    const { data, loading, error } = useSelector(store => store.productData);
    const dispatch = useDispatch();
    const [sort, setSort] = useState('asc');
    useEffect(() => {
        dispatch(getProductAPI(sort));
        console.log(data, loading)
    }, [dispatch, sort]);
    const handleSort = (event) => {
        if (event.target.value == '') return;
        setSort(event.target.value);
    };
    return (
        <div>
            <Header />
            <Navbar />
            <Box w={'100%'}>
                <Text color={'white'}>a</Text>
                <Divider orientation='horizontal' borderBottom={'1.9px solid #e5f0da'} />
                <Breadcrumb spacing='8px' className={styles.breadcrumb} separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='/bestseller'>BestSellers</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <HStack p={'1rem'} justify={'space-between'} >
                <HStack display={['none', 'flex', 'flex']}>
                    <Image w={'25px'} h={'25px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPjkFaNSTkWAQPmERF6KZx_Ek4h9--FoHCA&usqp=CAU" alt="" />
                    <Text fontWeight={'bold'} fontSize={'1.2rem'}>Refine by</Text>
                </HStack>
                <Text fontWeight={'bold'} fontSize={['0.9rem', '1rem', '1.2rem']}>
                    {`${data.length} products`}
                </Text>
                <HStack id="sort">
                    <Select placeholder="Sort by" onChange={handleSort}>
                        <option value=""> Sort by price</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </Select>
                </HStack>

            </HStack>
            <div className={styles.container}>
                <div id="category">
                    <Catagories />
                </div>
                <Box className={styles.products} style={{ width: "225rem" }} >

                    {loading ? <Spinner
                        m={'auto'}
                        display={'block'}
                        thickness='5px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='green.400'
                        size='xl'
                    /> : <Products data={data} />}
                </Box>
            </div>
            <Footer />
        </div>
    )
}
