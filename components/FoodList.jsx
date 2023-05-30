import styles from "../styles/FoodList.module.css"
import FoodCard from "../components/FoodCard"

const FoodList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST FOOD BISTRO IN TOWN</h1>
            <p className={styles.desc}>
                story story story story story story story story story 
                story story story story story story story story story 
                story story story story story story story story story 
            </p>
            <div className={styles.wrapper}>
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
        </div>
    )
}


export default FoodList;