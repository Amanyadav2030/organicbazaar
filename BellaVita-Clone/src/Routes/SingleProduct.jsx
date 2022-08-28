import Header from "../Components/Header";
import Navbar from "../Components/Navbar/Navbar";
import styles from './SingleProduct.module.css';
import { FaStar } from 'react-icons/fa'
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { getsingleData } from "../api/api";
import { useParams } from "react-router-dom";
// const data = {
//     id: 1,
//     Image: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1_Medium_a7654ecf-8f6c-4b46-9d27-f3c5e8a30f28_900x.jpg?v=1659101350",
//     Hover: "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-02Medium_533x.jpg?v=1659101350",
//     category: "body",
//     brand: "Exfoliate Face And Body Scrub Grit, 75gm",
//     disPrice: 220,
//     realPrice: 275,
//     rating: "4.8",
//     title: "Gentle Exfoliation, Nourishing & Skin Brightening",
//     status: true
// };
export default function SingleProducts() {
    const [count, setCount] = useState(1);
    const [data, setData] = useState({});
    const params = useParams();
    useEffect(() => {
        getsingleData(params.id).then((res) => {
            setData(res.data);
        });
    }, [params.id]);
    console.log(data);
    return (
        <div>
            <Header />
            <Navbar />
            <div className={styles.container}>
                <div className={styles.imgsection}>
                    <img src={data.Image} className={styles.Image} alt="" />
                    {data.status && <img className={styles.bestseller} src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Best-sellers-tag.png?v=10809169506792369733" alt="" />}
                </div>
                <div className={styles.infosection}>
                    <h2 className={styles.brand}>{data.brand}</h2>
                    <h2 className={styles.title}>{data.title}</h2>
                    <div className={styles.prbox}>
                        <p className={styles.prices}>{`₹${data.disPrice}.00`} <span>{`₹${data.realPrice}.00`}</span></p>
                        <p className={styles.rating}><span>{`${data.rating} `}</span><FaStar /></p>
                    </div>
                    <div id="counter">
                        <p className={styles.tax}>( inclusive of all taxes )</p>
                        <div className={styles.counter}>
                            <button onClick={() => setCount(count - 1)} disabled={count == 1} className={styles.btn1}>-</button>
                            <button className={styles.count}>{count}</button>
                            <button onClick={() => setCount(count + 1)} className={styles.btn2}>+</button>
                        </div>
                    </div>
                    <button className={styles.cartbtn}>ADD TO CART</button>
                    <div id="offers">
                        <p className={styles.offerLogo}>offers</p>
                        <div className={styles.discountbox}>
                            <p className={styles.discount}>10% Discount</p>
                            <p className={styles.voucher}>NEW10</p>
                        </div>
                        <p className={styles.discountInfo}>
                            New Users can avail 10% discount on their first order with a minimum order value of ₹499. Cannot be clubbed with any other offers or Bella Cash.
                        </p>
                        <div className={styles.discountbox}>
                            <p className={styles.discount}>4 at the price of 3</p>
                            <p className={styles.voucher}>4FOR3</p>
                        </div>
                        <p className={styles.discountInfo}>
                            Get 4 products for the price of 3! Just add 4 products to your cart and use the code '4FOR3'.  Cannot be clubbed with any other offers or Bella Cash. Offer not valid on Boxes.
                        </p>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )

}