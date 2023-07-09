import styles from "../styles/FoodList.module.css"
import FoodCard from "../components/FoodCard"

const FoodList = ({foodList}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST FOOD BISTRO IN TOWN</h1>
            <p className={styles.desc}>
            “We welcome you to a delicious feast of exquisite dishes at Fifi Cuisine.<br/>
             With a wide range of world cuisines to choose from, 
             we guarantee you a sumptuous feast experience you won't regret.” 
            </p>
            <div className={styles.wrapper}>
                {foodList.map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </div>
    )
}


export default FoodList;