import { useContext, useRef } from "react";
import { AppContext } from "../Context/AppContext";
import styles from "./Info.module.css";
export default function Info() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const total = useRef(100);
    const tax = useRef(0);

    total.current = cartItems.reduce((prev, el) => prev + el.disPrice * el.quantity, 0);
    tax.current = (total.current * 18 / 100)
    return (
        <div className={styles.InfoContainer}>
            <div className={styles.itemsBox}>
                {cartItems?.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <img src={item.Image} alt="" />
                        <span className={styles.qty}>{item.quantity}</span>
                        <div className={styles.brand}>{item.brand}</div>
                        <div className={styles.price}> ₹{item.disPrice}.00</div>
                    </div>
                ))}
            </div>
            <div id="totalBox">
                <div className={styles.total}>
                    <p>Total</p>
                    <p>Including ₹{tax.current} in taxes</p>
                </div>
                <div style={{
                    fontWeight: "700",
                    fontSize: "29px"
                }}>
                    ₹{total.current}
                </div>

            </div>

        </div>
    )

}