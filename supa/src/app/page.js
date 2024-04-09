import Image from "next/image";
import styles from "./page.module.css";
import Test from "../components/test";
import supabase from "@/api/supabase";

export default function Home() {
  console.log(supabase)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing
        </p>
        <Test />
        </div>
    </main>
  );
}
