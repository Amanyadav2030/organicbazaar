import { useEffect, useState } from "react";
import styles from "./Cart.module.css";
export default function Counter({ el }) {
    const [count, setCount] = useState(1);
    const handleCount = (x) => {
        setCount(x + count);
        handleQuantity(el.id, x);
    }

    return (
        <>

            <div className={styles.prbox}>
                <p className={styles.prices}>{`₹ ${el.disPrice * count}.00`} <span>{`₹${el.realPrice}.00`}</span></p>
            </div>
            <div className={styles.counter}>
                <button onClick={() => {
                    handleCount(-1)
                }} disabled={count == 1} className={styles.btn1}>-</button>
                <button className={styles.count}>{count}</button>
                <button onClick={() => {
                    handleCount(+1)
                }} className={styles.btn2}>+</button>
            </div>
        </>
    )
}