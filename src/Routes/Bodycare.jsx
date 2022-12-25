import { useEffect, useState } from "react";

import Card from "../Components/Card";
import Catagories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products";
import styles from "./AllProducts.module.css";
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
    Select
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function BodyCare() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
     
    }, []);
    const handleSort = (event) => {
        const { value } = event.target;
        if (value === 'lth') {
            data.sort((a, b) => a.disPrice - b.disPrice);
            setData([...data]);

        } else if (value === 'htl') {
            data.sort((a, b) => b.disPrice - a.disPrice);
            setData([...data]);
        }

    };
    return (
        <div>
            <Header />
            <Navbar />
            <Breadcrumb spacing='8px' className={styles.breadcrumb} separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/bodycare'>Bodycare</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
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
                        <option value=""> Featured</option>
                        <option value="bestselling"> Best Selling</option>
                        <option value="lth">Price, Low to High</option>
                        <option value="htl">Price, High to Low</option>
                    </Select>
                </HStack>
            </HStack>
            <div className={styles.container}>
                <div id="category">
                    <Catagories />
                </div>
                <div className={styles.products} style={{ width: "225rem" }}>
                    {/* <Products data={data} /> */}
                    {isLoading ? <h1 className={styles.loading}>Loading...</h1> : <Products data={data} />}
                </div>
            </div>
            <Footer />
        </div>
    )
}
