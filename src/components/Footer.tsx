import styles from '@/src/styles/Footer.module.css'
import Image from 'next/image'
import x from '@/src/images/x.svg'
import facebook from '@/src/images/facebook.svg'
import instagram from '@/src/images/instagram.svg'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.main}>
            <p>© 2024 PAGINA</p>
            <div className={styles.linksContainer}>
                <Link className={styles.link} href={'https://x.com/pagina0ne'} target='_blank'>
                    <Image src={x} alt="Twitter" width={15} height={15} />
                </Link>
                <Link className={styles.link} href={'https://www.facebook.com/hello.pagina.one/'} target='_blank'>
                    <Image src={facebook} alt="Facebook" width={15} height={15} />
                </Link>
                <Link className={styles.link} href={'https://www.instagram.com/pagina.one/'} target='_blank'>
                    <Image src={instagram} alt="Instagram" width={15} height={15} />
                </Link>
            </div>
        </footer>
    )
}