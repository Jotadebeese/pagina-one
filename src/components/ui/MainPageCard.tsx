import styles from "@/src/styles/MainPageCard.module.css";
import Image from "next/image";
import logoName from "@/src/images/full_name_logo_no_space.svg";
import Link from "next/link";

export default function MainPageCard() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.main}>
                <Image src={logoName} alt="Company logo" width={500} />
                <p>We build web and mobile apps from the ground.<br/>
                We listen to your problem or idea and solve it with code.<br/><br/>
                <Link href={'/contact'}>Hit us up</Link> to collaborate.</p>
            </div>
        </div>
    )
}