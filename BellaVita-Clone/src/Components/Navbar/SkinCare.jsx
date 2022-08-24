import styles from './Navbar.module.css';
export default function SkinCare() {
    return (
        <div style={{ position: "absolute", left: "82px", margin: "15px" }} className='navbarAnim'>
            <ul className={styles.Floating}>
                <li>
                    <div className={styles.Floating_heading}>BY PRODUCT TYPE</div>
                    <div className={styles.Floating_div}>
                        <ul>
                            <li>ALL SKIN CARE</li>
                            <li>PRODUCTS</li>
                            <li>FACE CREAM</li>
                            <li>FACE PACK/MASK</li>
                            <li>FACE SERUM</li>
                            <li>FACE SCRUB</li>
                            <li>FACE TONER</li>
                            <li>FACE GEL</li>
                        </ul>
                        <ul>
                            <li>FACE MOISTURISERS</li>
                            <li>SUNSCREEN WITH SPF</li>
                            <li>LIP CARE</li>
                            <li>NIGHT CARE</li>
                            <li>UNDER EYE CARE</li>
                            <li>EYE BROWS</li>
                            <li>EXFOLIATORS</li>
                            <li>FACE WASH</li>
                        </ul>
                    </div>

                </li>
                <li>
                    <div className={styles.Floating_heading}>BY CONCERN</div>
                    <div className={styles.Floating_div}>
                        <ul>
                            <li>PIGMENTATION</li>
                            <li>ACNE & PIMPLES</li>
                            <li>AGEING</li>
                            <li>DARK SPOTS</li>
                            <li>DARK CIRCLES</li>
                            <li>BLACKHEADS & WHITE</li>
                            <li>HEADS</li>
                        </ul>
                        <ul>
                            <li>TAN REMOVAL</li>
                            <li>HYDRATION</li>
                            <li>SKIN BRIGHTENING</li>
                            <li>PORE CARE</li>
                            <li>SUN PROTECT</li>
                            <li>OIL CONTROL</li>
                            <li>PUFFINESS</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div className={styles.Floating_heading}>BY SKIN TYPE</div>
                    <div className={styles.Floating_div}>
                        <ul>
                            <li>DULL SKIN</li>
                            <li>DRY SKIN</li>
                            <li>OILY SKIN</li>
                            <li>NORMAL SKIN</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}