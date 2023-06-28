import axios from "axios";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Slider from '@/components/slider';
import FoodList from '@/components/FoodList';

const inter = Inter({ subsets: ['latin'] })

export default function Home({foodList}) {
  return (
    <div className={styles.container} >
      <Head>
        <title>Fifi Cuisine Bristol</title>
        <meta name="description" content="Best Food Vendor In Town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={`${styles.main} ${inter.className}`}>
      <Slider />
      <FoodList foodList={foodList}/>
      
      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodList:res.data,
    },
  };
}; 