import { useEffect, useState } from "react";
import { getAllProduct } from "../api/api";
import Card from "../Components/Card";
import Catagories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import Products from "../Components/Products";
import styles from "./AllProducts.module.css";

export default function Bestseller() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllProduct().then(res => {
            const Filter = res.data.filter((el) => el.status === true);
            setData([...Filter]);
        }).catch((err) => {
            console.log(err)
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
                <div className={styles.products} style={{width:"225rem"}}>
                    <Products data={data} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
