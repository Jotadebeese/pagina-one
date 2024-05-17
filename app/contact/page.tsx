import Image from "next/image";
import contact from "@/src/images/contact.svg";
import styles from "@/src/styles/ContactPage.module.css"

export default function Contact() {
    return (
        <div className={styles.main}>
            <Image src={contact} alt="Contact" width={500} />
        </div>
    )
}