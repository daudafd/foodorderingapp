import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/slider'
import FoodList from '@/components/FoodList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fifi Cuisine Bristol</title>
        <meta name="description" content="Best Food Vendor In Town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className={`${styles.main} ${inter.className}`}>
      <Slider/>
      <FoodList />
      
      </main>
    </>
  )
}
