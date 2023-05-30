import Image from "next/image";
import styles from "../../pages/product/Product.module.css";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);
    const food = {
        id: 1,
        img: "/img/spag.jpeg",
        name: "Stir Fry Spaghetti",
        price: [19.9, 23.0, 27.9],
        desc: "Spaghetti carefullly prepared pelu awon eroja to po gidi gan"
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={food.img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{food.name}</h1>
                <span className={styles.price}>${food.price[size]}</span>
                <p className={styles.desc}>{food.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/img/spag.jpeg" alt="" layout="fill" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/img/spag.jpeg" alt="" layout="fill" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/img/spag.jpeg" alt="" layout="fill" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose your Ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Turkey</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Chicken</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Soft drink</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Water</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product