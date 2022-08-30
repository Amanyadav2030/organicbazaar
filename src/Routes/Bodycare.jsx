import { useEffect, useState } from "react";
import { getAllProduct } from "../api/api";
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
    useToast
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function BodyCare() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllProduct().then(res => {
            const Filter = res.data.filter((el) => el.category === 'body');
            setData([...Filter]);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err)
            setIsLoading(false);
        })
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
            <div id="Productdetails">
                <h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPjkFaNSTkWAQPmERF6KZx_Ek4h9--FoHCA&usqp=CAU" alt="" /> Refine by</h1>
                <h1>
                    {`${data.length} products`}
                </h1>
                <div id="sort">
                    Sortby:  <select id="" onChange={handleSort}>
                        <option value=""> Featured</option>
                        <option value="lth">Price, Low to High</option>
                        <option value="htl">Price, High to Low</option>
                    </select>
                </div>

            </div>
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
