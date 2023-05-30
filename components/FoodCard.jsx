import Image from "next/image";
import styles from "../styles/FoodCard.module.css"

const FoodCard = () => {
    return (
        <div className={styles.container}>
          <Image src="/img/fried.jpg" alt="" width="150" height="150" />
          <h1 className={styles.title}>FRIED RICE</h1>
          <span className={styles.price}>#1,000</span>
          <p className={styles.desc}>
            Fried rice wey make sense pa
          </p>
        </div>
    )
}


export default FoodCard;