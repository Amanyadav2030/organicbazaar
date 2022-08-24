import styles from './Navbar.module.css';
export default function HairCare() {
    return (
        <div style={{ position: "absolute", left: "20rem", margin: "15px" }} className='navbarAnim'>
            <ul className={styles.Floating}>
                <li>
                    <div className={styles.Floating_heading}>BY PRODUCT TYPE</div>
                    <div className={styles.Floating_div}>
                        <ul>
                            <li>ALL HAIRCARE</li>
                            <li>PRODUCTS</li>
                            <li>SHAMPOO</li>
                            <li>CONDITIONER</li>
                            <li>HAIR OIL</li>
                            <li>HAIR MASK</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={styles.Floating_heading}>BY HAIR CONCERN</div>
                    <div className={styles.Floating_div}>
                        <ul>
                            <li>HAIR LOSS</li>
                            <li>HAIR THINNING</li>
                            <li>DULL HAIR</li>
                            <li>DANDRUFF</li>
                            <li>DAMAGE HAIR</li>
                            <li>FRIZZY HAIR</li>
                            <li>DRY HAIR & SCALP</li>
                        </ul>
                        <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Hair_Care_Medium_9f61e8b2-fbfd-4dde-b6f2-4c265b70be8a.jpg?v=1659103665" width="202px" alt="" />
                    </div>
                </li>
            </ul>
        </div>
    )
}