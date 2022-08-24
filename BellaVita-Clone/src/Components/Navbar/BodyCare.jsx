import styles from './Navbar.module.css';
export default function BodyCare() {
    return (
        <div style={{ position: "absolute", left: "33rem", margin: "15px" }} className='navbarAnim'>
            <ul className={styles.Floating}>
                <li>
                    <div className={styles.Floating_heading}>BATH & BODY</div>
                    <div className={styles.Floating_div}>
                        <ul>
                            <li>ALL BODY CARE</li>
                            <li>PRODUCTS</li>
                            <li>BODY SOAP</li>
                            <li>BODY WASH</li>
                            <li>BODY SCRUB</li>
                            <li>BODY LOTION</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Body_Care_Megamenu.png?v=1651666035" width="202px" alt="" />

                </li>
            </ul>
        </div>
    )
}