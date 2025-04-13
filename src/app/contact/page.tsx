import Image from "next/image";
import styles from "@/src/styles/ContactPage.module.css"
import ContactPageCard from "@/src/components/ui/ContactPageCard";

export default function Contact() {
    return (
        <div className={styles.main}>
            <ContactPageCard />
        </div>
    )
}