import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/temp-slider.jpg" layout='fill' />
            </div>
            <div className={styles.item}>
                {/* <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID IT. THE FRIED RICE, IT'S ONE IN TOWN
                    </h2>
                </div> */}
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
                    <p className={styles.text}>
                        Yafrato Complex, Opposite Jaiz Bank,
                        <br /> Alagbaka, Akure.
                        <br /> 07062319778, 07053764997
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY TO FRIDAY
                        <br /> 8am- 5pm
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>SOCIAL MEDIA</h1>
                    <div className={styles.text}>
                        <SocialIcon url="https://instagram.com/fifis_cuisinebistro" network="instagram" style={{ height: 50, width: 50 }} bgColor="red" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;