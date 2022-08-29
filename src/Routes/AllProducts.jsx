import { useEffect, useState } from "react";
import { getAllProduct } from "../api/api";
import {
    Breadcrumb,
    Divider,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    useToast
} from '@chakra-ui/react';
import { ChevronRightIcon } from "@chakra-ui/icons";
import Card from "../Components/Card";
import Catagories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products";
import styles from "./AllProducts.module.css";

export default function AllProducts() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllProduct().then(res => {
            setData(res.data);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false)
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
        } else if (value === 'bestselling') {
            const Filter = data.filter((el) => el.status === true);
            setData([...Filter]);
        }

    };
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
                    <BreadcrumbLink href='/allproducts'>AllProducts</BreadcrumbLink>
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
                        <option value="bestselling"> Best Selling</option>
                        <option value="lth">Price, Low to High</option>
                        <option value="htl">Price, High to Low</option>
                    </select>
                </div>

            </div>
            <div className={styles.container}>
                <div id="category">
                    <Catagories />
                </div>
                <div className={styles.products} id="ProductsGrid" style={{ width: "225rem" }} >
                    {isLoading ? <h1 className={styles.loading}>Loading...</h1> : <Products data={data} />}

                </div>
            </div>
            <Footer />
        </div>
    )
}
