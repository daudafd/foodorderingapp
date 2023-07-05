import axios from "axios";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Slider from '@/components/slider';
import FoodList from '@/components/FoodList';
import Add from "@/components/Add";
import AddButton from "@/components/AddButton";
import { useState } from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home({foodList, admin}) {

  const [close, setClose] = useState(true);

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
      {<AddButton setClose={setClose} />}
      <FoodList foodList={foodList}/>
      {!close && <Add setClose={setClose} />}
      </main>
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodList:res.data,
      admin,
    },
  };
}; 
