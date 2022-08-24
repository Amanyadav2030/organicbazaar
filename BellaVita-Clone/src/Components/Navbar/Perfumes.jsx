import styles from './Navbar.module.css';
export default function Perfumes() {
    return (
        <div style={{ position: "absolute", left: "38rem", margin: "15px" }} className='navbarAnim'>
            <ul className={styles.Floating}>
                <li>
                    <div className={styles.Floating_div}>
                        <ul>
                            <li>ALL PERFUMES</li>
                            <li>PERFUMES FOR HER</li>
                            <li>PERFUMES FOR HIM</li>
                            <li>UNISEX PERFUMES</li>
                            <li>BODY PERFUME</li>
                            <li>LITTLE LUXURIES</li>
                            <li>GIFT SETS</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Perfumes_Medium_c0c80af3-da25-4c9f-8e7f-c00c84f76a51.jpg?v=1659103815" width="202px" alt="" />

                </li>
            </ul>
        </div>
    )
}