import Image from "next/image";
import styles from "../../pages/product/Product.module.css";
import { useState } from "react";
import axios from "axios";

const Product = ({food}) => {
    const [price, setPrice] = useState(food.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQunatity] = useState(1);
    const [extras, setExtras] = useState([]);

    const changePrice = (number) => {
        setPrice(price + number);
    };

    const handleSize = (sizeIndex) => {
        const difference = food.prices[sizeIndex] - food.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };

    const handleChange = (e, extra) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(extra.price)
            setExtras((prev) => [extras, extra]);
        }
        else {
            changePrice(-extra.price)
            setExtras(extras.filter((extra) => extras._id !== extra._id))
        }
    }
    

    return (
        <div className={styles.container}>
            <div class  Name={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={food.img} alt="" width="350" height="350"/>
                </div> 
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{food.title}</h1>
                <span className={styles.price}>${price}</span>
                <p className={styles.desc}>{food.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/img/spag.jpeg" alt="" layout="fill" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/img/spag.jpeg" alt="" layout="fill" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/img/spag.jpeg" alt="" layout="fill" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Extra </h3>
                <div className={styles.ingredients}>
                    {food.extraOptions.map((extra) => (
                         <div className={styles.option} key={extra._id}>
                         <input
                             type="checkbox"
                             id={extra.text}
                             name={extra.text}
                             className={styles.checkbox}
                             onChange={(e) => handleChange(e,extra)}
                         />
                         <label htmlFor="double">{extra.text}</label>
                     </div>
                    ))}
                   
                </div>
                <div className={styles.add}>
                    <input 
                        onChange={(e) => setQunatity(e.target.value)}
                        type="number" 
                        defaultValue={1} 
                        className={styles.quantity} 
                        />
                    <button className={styles.button}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
      props: {
        food:res.data,
      },
    };
  };

export default Product 