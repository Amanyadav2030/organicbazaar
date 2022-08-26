import { Link } from 'react-router-dom';
import styles from './Download.module.css';
export default function Download() {
    return (
        <div className={styles.download}>
            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Download_our_App_Section_Image_V_460x460.png?v=1650369432" alt="" className={styles.mobileImg} />
            <h2 className={styles.tagline}>Download Our App</h2>
            <div className={styles.stores}>
                <a href="https://play.google.com/store/apps/details?id=com.bellavita.shopifyapps" target={'_blank'}>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/playstore_460x460_efa998ac-e0d8_460x460.png?v=1650369394" alt="" />
                </a>
                <a href="https://apps.apple.com/in/app/bella-vita-organic-app/id1588406681" target={'_blank'}>
                    <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/app-store-card_460x460_35fc55d1_460x460.png?v=1650369409" alt="" />
                </a>
            </div>
        </div>
    )
}