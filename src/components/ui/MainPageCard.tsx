import styles from "@/src/styles/MainPageCard.module.css";
import Image from "next/image";
import logoName from "@/src/images/full_name_logo_no_space.svg";
import Link from "next/link";

export default function MainPageCard() {
    return (
        <div className={styles.main}>
            <Image src={logoName} alt="Company logo" width={500} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/>
            <Link href={'/contact'}>Hit us up</Link> to collaborate.</p>
        </div>
    )
}