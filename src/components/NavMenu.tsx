import Image from "next/image";
import Link from "next/link";
import styles from "@/src/styles/NavMenu.module.css";
import squareLogo from "@/src/images/square_logo.svg";

export default function NavMenu() {
    return (
        <div className={styles.nav}>
            <Link className={styles.logo} href={'/'}>
                <Image src={squareLogo} alt="Company logo" width={30} height={30} />
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link href={'/#services'}>
                        SERVICES
                    </Link>
                </li>
                <li>
                    <Link href={'/contact'}>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    )
}