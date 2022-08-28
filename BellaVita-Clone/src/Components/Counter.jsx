import { useState } from "react";
import styles from "./Cart.module.css";
export default function Counter({ el }) {
    const [count, setCount] = useState(1);
    return (
        <>

            <div className={styles.counter}>
                <div className={styles.prbox}>
                    <p className={styles.prices}>{`₹ ${el.disPrice * count}.00`} <span>{`₹${el.realPrice}.00`}</span></p>
                </div>
                <button onClick={() => setCount(count - 1)} disabled={count == 1} className={styles.btn1}>-</button>
                <button className={styles.count}>{count}</button>
                <button onClick={() => setCount(count + 1)} className={styles.btn2}>+</button>
            </div>
        </>
    )
}