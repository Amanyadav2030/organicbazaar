import styles from './Navbar.module.css';
export default function Combos() {

    return (
        <div style={{ position: "absolute", left: "54rem", margin: "15px" }} className='navbarAnim'>
            <ul className={styles.Floating}>
                <li>
                    <div className={styles.Floating_div}>
                        <ul>
                            <li>GIFT BOXES</li>
                            <li>ALL COMBOS</li>
                            <li>BESTSELLER COMBOS</li>
                            <li>SKIN COMBOS</li>
                            <li>HAIR COMBOS</li>
                            <li>BODY COMBOS</li>
                            <li>PERFUME COMBOS</li>
                            <li>C GLOW RANGE</li>
                            <li>KUMKUMADI RANGE</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}