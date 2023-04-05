import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dhaka Catering</title>
        <meta name="keywords" content="Dhaka, Catering, Food" />
        <meta name="description" content="A catering service" />
      </Head>
      <div>

        {/* ++++++++++++++++++ Header ++++++++++++++++++ */}
        <div className={styles.header}>
          <h1>Welcome to Dhaka Catering</h1>
          <p>Exloper our Menu Items</p>
        </div>

        {/* ++++++++++++++++++ Menu Items ++++++++++++++++++ */}
        <div className={styles.menu_container}>
          <Image alt='menu-1' src='/menu-1.jpg' width={1000} height={700} className={styles.img} />
          <Image alt='menu-2' src='/menu-2.jpg' width={1000} height={700} className={styles.img} />
        </div>

        {/* ++++++++++++++++++ Footer ++++++++++++++++++ */}
        <div className={styles.footer}>
          <h3 style={{ textAlign: 'center', marginBottom: '25px'}}>For Customize order</h3>
          <div className={styles.contact}>
            <h5>Phone: </h5>
            <span>01703790978</span>
          </div>
          <div className={styles.contact}>
            <h5>Email: </h5>
            <span>dhakacaterings@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
