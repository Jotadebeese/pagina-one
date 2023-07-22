import Image from 'next/image'
import styles from '/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h3 className={styles.element}>We Create</h3>
      <h1 className={styles.element}>We design</h1>
      <h2 className={styles.element}>We innovate</h2>     
    </main>
  )
}
