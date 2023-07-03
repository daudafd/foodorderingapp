import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/phone.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>07064203959</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                <Link href="/" passHref>
                    <li className={styles.listItem}>Homepage</li>
                </Link>
                    <li className={styles.listItem}>My order</li>
                    <li className={styles.listItem}>Menu</li>
                    {/* <Image src="/img/fried.jpg" alt="" width="100" height="69" /> */}
                    {/* <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li> */}
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="" width="32" height="32" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar;