import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Info from "../Components/Info";
import styles from "./Payment.module.css";
export default function Payment() {
    const [done, setDone] = useState(true);
    const [paymentData, setPaymentData] = useState({
        name: "",
        credit: "",
        cvv: "",
        year: ""
    });
    const redirect = useNavigate();
    const toast = useToast();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPaymentData({
            ...paymentData,
            [name]: value
        });
        if (paymentData.name != "" && paymentData.credit != "" && paymentData.cvv != "" && paymentData.year != "") {
            setDone(false);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        toast({
            position: 'top',
            title: 'Payment Successfully.',
            description: "Thank you , Your order will placed within 2 days",
            status: 'success',
            duration: 4000,
            isClosable: true,
        });
        setTimeout(() => {
            redirect('/')
        }, 2000);
    }
    return (
        <div>
            <div className={styles.header}>
                <Link to='/'>  <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bellavita-logo_256x256_2cf787ef.png?54744" alt="" />
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.Payment}>
                    <h2>Payment</h2>

                    <div className={styles.cards}>
                        <h3>Accepted Cards</h3>
                        <div className={styles.cardBox}>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h3>Name on Cards</h3>
                            <input type="text" placeholder="Ex. Prateek Sukla" name="name" onChange={handleChange} />
                        </div>
                        <div>
                            <h3>Credit  card number</h3>
                            <input type="text" name="credit" onChange={handleChange} placeholder="1111-2222-3333-4444" />
                        </div>
                        <div className={styles.Cvv}>
                            <div>
                                <h3>Exp Year</h3>
                                <input type="text" name="year" onChange={handleChange} placeholder="2023" />
                            </div>
                            <div>
                                <h3>CVV</h3>
                                <input type="text" name="cvv" onChange={handleChange} placeholder="514" />
                            </div>

                        </div>
                        <button disabled={done}>Continue to checkout</button>
                    </form>
                </div>

                <Info />


            </div>

        </div>
    )
}