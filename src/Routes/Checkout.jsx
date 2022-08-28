import Info from '../Components/Info';
import styles from './Checkout.module.css';
import { Link, useNavigate } from 'react-router-dom';
export default function Checkout() {
    const redirect = useNavigate();
    return (
        <div>
            <div className={styles.header}>
                <Link to='/'>  <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/bellavita-logo_256x256_2cf787ef.png?54744" alt="" />
                </Link>
            </div>
            <div className={styles.container}>
                <div className={styles.information}>
                    <h2>Contact information</h2>
                    <div className={styles.email}>
                        <input type="email" />
                        <div className={styles.checkbox}>
                            <input type="checkbox" /> Email with news and offer
                        </div>
                    </div>
                    <div className={styles.addressContainer}>
                        <h2>Shipping address</h2>
                        <select name="" id="">
                            <span className={styles.country}>Country/region</span>
                            <option value="India">India</option>
                        </select>
                        <div className={styles.name}>
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder='Last name' />
                        </div>
                        <input type="text" placeholder='Address' />
                        <input type="text" placeholder='Apartment,suite,etc. (optional)' />
                        <div className={styles.city}>
                            <input type="text" placeholder='City' />
                            <select >
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                            <input type="text" placeholder='PIN Code' />
                        </div>
                        <div className={styles.number}>
                            <input type="number" placeholder='Phone' />
                            <div className={styles.checkbox}>
                                <input type="checkbox" name="" id="" />Save this information for next time
                            </div>
                        </div>
                        <div className={styles.continueBtn}>
                            <Link to='/allproducts' style={{
                                textDecoration: "underline"
                            }}>Return to cart</Link>
                            <button onClick={() => redirect('/payment')}>Continue to shipping</button>
                        </div>


                    </div>
                </div>
                <Info />


            </div>

        </div>
    )
}