import MainPageCard from "@/src/components/ui/MainPageCard";
import styles from "@/src/styles/page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <MainPageCard />
    </main>
  );
}
