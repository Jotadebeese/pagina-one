import Image from "next/image";
import Link from "next/link";
import styles from "/styles/NavMenu.module.css";

export default function NavMenu() {
    return (
        <div className={styles.nav}>
            <Link className={styles.logo} href={'/'}>
                <Image src={'/logo.png'} alt="Company logo" width={50} height={50} />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/#services'}>
                        Services
                    </Link>
                </li>
                <li>
                    <Link href={'/#about'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={'/#contact'}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}