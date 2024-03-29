import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>
      <Link href='/ExampleOne'>Example one</Link>
      <Link href='/ExampleTwo'>Example two</Link>
      <Link href='/ExampleThree'>Example three</Link>
      <Link href='/ExampleFour'>Example four</Link>
      <Link href='/ExampleFive'>Example five</Link>
      </main>
      <Footer/>
    </>
  )
}